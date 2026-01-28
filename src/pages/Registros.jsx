import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { logoutUser } from '../services/authService';
import DashboardMenu from '../components/DashboardMenu';
import { getFacturasPorMes } from '../services/facturasService';
import { enviarFacturaPorEmail } from '../services/emailService';
import { subirArchivoFactura } from '../services/storageService';
import './registros.css';

const Registros = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [facturas, setFacturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModalArchivos, setShowModalArchivos] = useState(false);
  const [selectedFactura, setSelectedFactura] = useState(null);
  const [archivos, setArchivos] = useState([]);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  // Cargar facturas cuando cambien mes o año
  useEffect(() => {
    const loadFacturas = async () => {
      setLoading(true);
      setError('');
      try {
        const datos = await getFacturasPorMes(year, month);
        setFacturas(datos);
      } catch (err) {
        console.error('Error al cargar facturas:', err);
        setError('Error al cargar los registros. ' + err.message);
        setFacturas([]);
      } finally {
        setLoading(false);
      }
    };

    loadFacturas();
  }, [year, month]);

  const handlePreviousMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
  };

  // Funciones para el modal de archivos
  const handleOpenModalArchivos = (factura) => {
    setSelectedFactura(factura);
    setShowModalArchivos(true);
    setArchivos([]);
    setUploadError('');
  };

  const handleCloseModalArchivos = () => {
    setShowModalArchivos(false);
    setSelectedFactura(null);
    setArchivos([]);
    setUploadError('');
  };

  const validarArchivo = (file) => {
    if (!file.name.endsWith('.zip')) {
      setUploadError('Solo se permite archivos .zip');
      return false;
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB
      setUploadError('El archivo no puede exceder 2MB');
      return false;
    }
    return true;
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setUploadError('');

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      // Solo permitir 1 archivo
      const file = files[0];
      if (validarArchivo(file)) {
        setArchivos([{
          file: file,
          nombre: file.name,
          tamaño: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
        }]);
      }
    }
  };

  const handleSelectFile = (e) => {
    setUploadError('');
    const files = e.target.files;
    if (files && files.length > 0) {
      // Solo permitir 1 archivo
      const file = files[0];
      if (validarArchivo(file)) {
        setArchivos([{
          file: file,
          nombre: file.name,
          tamaño: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
        }]);
      }
    }
  };

  const handleRemoveArchivo = (index) => {
    setArchivos(archivos.filter((_, i) => i !== index));
  };

  const handleEnviarArchivos = async () => {
    if (archivos.length === 0) {
      setUploadError('Por favor selecciona al menos un archivo');
      return;
    }

    if (!selectedFactura.correo) {
      setUploadError('La factura no tiene un correo electrónico asociado');
      return;
    }

    setUploadLoading(true);
    setUploadError('');

    try {
      // 1. Subir archivo a Firebase Storage
      console.log('📤 Subiendo archivo a Firebase Storage...');
      const archivoURL = await subirArchivoFactura(
        archivos[0].file,
        selectedFactura.id,
        selectedFactura.rfc
      );

      console.log('✅ Archivo subido, URL:', archivoURL);

      // 2. Enviar email con el enlace de descarga
      console.log('📧 Enviando email con enlace de descarga...');
      await enviarFacturaPorEmail({
        toEmail: selectedFactura.correo,
        nombrePaciente: selectedFactura.paciente?.nombreCompleto || 'Paciente',
        rfc: selectedFactura.rfc,
        telefono: selectedFactura.telefono,
        monto: selectedFactura.monto,
        archivoURL: archivoURL
      });

      // Mostrar mensaje de éxito
      alert(`✅ Factura enviada exitosamente a: ${selectedFactura.correo}`);
      handleCloseModalArchivos();
    } catch (err) {
      console.error('Error al enviar factura:', err);
      setUploadError('Error al enviar la factura: ' + (err.message || 'Intenta nuevamente'));
    } finally {
      setUploadLoading(false);
    }
  };

  const handleCopyToClipboard = async (text, e) => {
    try {
      await navigator.clipboard.writeText(text);
      // Mostrar feedback visual
      const button = e.currentTarget;
      if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="bi bi-check"></i>';
        button.style.color = '#28a745';
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.color = '';
        }, 1500);
      }
    } catch (err) {
      console.error('Error al copiar:', err);
      alert('No se pudo copiar al portapapeles');
    }
  };

  const formatDate = (date) => {
    if (!date) return '-';
    try {
      let d = date;
      // Si es un Timestamp de Firestore con método toDate()
      if (date && typeof date.toDate === 'function') {
        d = date.toDate();
      } else if (typeof date === 'number') {
        // Si es milliseconds
        d = new Date(date);
      } else if (typeof date === 'string') {
        // Si es un string ISO
        d = new Date(date);
      } else if (date instanceof Date) {
        d = date;
      }

      if (isNaN(d.getTime())) {
        return '-';
      }

      return d.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (err) {
      console.error('Error formateando fecha:', err);
      return '-';
    }
  };

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount || 0);
  };

  const totalFacturas = facturas.length;
  const totalMonto = facturas.reduce((sum, f) => sum + (f.monto || 0), 0);

  return (
    <div className="registros-container">
      <DashboardMenu user={user} onLogout={handleLogout} />

      <div className="registros-wrapper">
        <div className="registros-header">
          <div>
            <h1 className="registros-title">Registros de Facturas</h1>
            <p className="registros-subtitle">Solicitudes del mes</p>
          </div>
        </div>

        {error && (
          <div className="alert alert-error">
            <i className="bi bi-exclamation-circle"></i>
            {error}
          </div>
        )}

        {/* Selector de Mes */}
        <div className="month-selector">
          <button
            className="btn-month-nav"
            onClick={handlePreviousMonth}
            title="Mes anterior"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="month-display">
            <h2 className="month-title">
              {meses[month - 1]} {year}
            </h2>
          </div>

          <button
            className="btn-month-nav"
            onClick={handleNextMonth}
            title="Próximo mes"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <button
            className="btn-today"
            onClick={handleToday}
            title="Mes actual"
          >
            <i className="bi bi-calendar-check"></i> Hoy
          </button>
        </div>

        {/* Estadísticas */}
        <div className="registros-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="bi bi-file-earmark-pdf"></i>
            </div>
            <div className="stat-info">
              <h3>{totalFacturas}</h3>
              <p>Solicitudes</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <div className="stat-info">
              <h3>{formatMoney(totalMonto)}</h3>
              <p>Monto Total</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="bi bi-graph-up"></i>
            </div>
            <div className="stat-info">
              <h3>
                {totalFacturas > 0 ? formatMoney(totalMonto / totalFacturas) : '$0.00'}
              </h3>
              <p>Promedio</p>
            </div>
          </div>
        </div>

        {/* Grid de Facturas */}
        <div className="registros-grid-container">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Cargando registros...</p>
            </div>
          ) : facturas.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-inbox"></i>
              <p>No hay solicitudes para {meses[month - 1]} {year}</p>
            </div>
          ) : (
            <div className="registros-grid">
              {facturas.map((factura) => (
                <div
                  key={factura.id}
                  className="registro-card"
                >
                  <div className="card-header">
                    <div className="card-rfc">
                      <span className="label">RFC</span>
                      <div className="value-with-copy">
                        <span className="value">{factura.rfc || '-'}</span>
                        {factura.rfc && (
                          <button
                            className="btn-copy"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyToClipboard(factura.rfc, e);
                            }}
                            title="Copiar RFC"
                          >
                            <i className="bi bi-clipboard"></i>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="card-amount">
                      <span className="label">Monto</span>
                      <span className="value amount">{formatMoney(factura.monto)}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-person"></i> Paciente
                      </span>
                      <div className="value-with-copy">
                        <span className="value">
                          {factura.paciente?.nombreCompleto || 'Sin información'}
                        </span>
                        {factura.paciente?.nombreCompleto && (
                          <button
                            className="btn-copy"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyToClipboard(factura.paciente.nombreCompleto, e);
                            }}
                            title="Copiar nombre"
                          >
                            <i className="bi bi-clipboard"></i>
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-x-circle"></i>
                        Código Postal
                      </span>
                      <span className="value email">{factura.paciente.codigoPostal || '-'}</span>
                    </div>

                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-envelope"></i> Email
                      </span>
                      <span className="value email">{factura.correo || '-'}</span>
                    </div>

                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-telephone"></i> Teléfono
                      </span>
                      <span className="value">{factura.telefono || '-'}</span>
                    </div>

                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-calendar"></i> Fecha de Servicio
                      </span>
                      <span className="value">
                        {factura.fecha
                          ? (() => {
                            try {
                              let d = factura.fecha;
                              if (factura.fecha && typeof factura.fecha.toDate === 'function') {
                                d = factura.fecha.toDate();
                              } else if (typeof factura.fecha === 'number') {
                                d = new Date(factura.fecha);
                              } else if (typeof factura.fecha === 'string') {
                                d = new Date(factura.fecha);
                              }
                              return d.toLocaleDateString('es-ES');
                            } catch (err) {
                              return '-';
                            }
                          })()
                          : '-'
                        }
                      </span>
                    </div>

                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-clock"></i> Solicitud
                      </span>
                      <span className="value date">
                        {formatDate(factura.createdAt)}
                      </span>
                    </div>

                    {factura.paciente && (
                      <>
                        <div className="info-row">
                          <span className="label">
                            <i className="bi bi-percent"></i> Régimen Fiscal
                          </span>
                          <span className="value">
                            {factura.paciente.regimenFiscal || '-'}
                          </span>
                        </div>

                        <div className="info-row">
                          <span className="label">
                            <i className="bi bi-tag"></i> Uso CFDI
                          </span>
                          <span className="value">
                            {factura.paciente.usoCFDI || '-'}
                          </span>
                        </div>
                      </>
                    )}

                    <div className="info-row">
                      <span className="label">
                        <i className="bi bi-credit-card"></i> Método de Pago
                      </span>
                      <span className="value">
                        {factura.metodoPago || '-'}
                      </span>
                    </div>
                  </div>


                  <div className="card-footer">
                    <span className="factura-id">ID: {factura.id.substring(0, 8)}...</span>
                    <button
                      className="btn-enviar-factura"
                      onClick={() => handleOpenModalArchivos(factura)}
                    >
                      <i className="bi bi-send"></i>
                      Enviar Factura
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal de Archivos */}
        {showModalArchivos && (
          <div className="modal-overlay" onClick={handleCloseModalArchivos}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <h2>Enviar Archivos</h2>
                  <p className="modal-subtitle">RFC: {selectedFactura?.rfc}</p>
                </div>
                <button
                  className="btn-close"
                  onClick={handleCloseModalArchivos}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="modal-body">
                {uploadError && (
                  <div className="alert alert-error">
                    <i className="bi bi-exclamation-circle"></i>
                    {uploadError}
                  </div>
                )}

                {/* Drag and Drop */}
                <div
                  className={`drag-drop-area ${dragActive ? 'active' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="drag-drop-content">
                    <i className="bi bi-cloud-upload"></i>
                    <h3>Arrastra archivos .zip aquí</h3>
                    <p>o</p>
                    <label className="btn-select-file">
                      Selecciona un archivo
                      <input
                        type="file"
                        accept=".zip"
                        onChange={handleSelectFile}
                        style={{ display: 'none' }}
                      />
                    </label>
                    <p className="file-info">Máximo 2MB</p>
                  </div>
                </div>

                {/* Lista de Archivos */}
                {archivos.length > 0 && (
                  <div className="archivos-list">
                    <h3>Archivo seleccionado</h3>
                    {archivos.map((archivo, index) => (
                      <div key={index} className="archivo-item">
                        <div className="archivo-info">
                          <i className="bi bi-file-zip"></i>
                          <div>
                            <p className="archivo-nombre">{archivo.nombre}</p>
                            <p className="archivo-tamaño">{archivo.tamaño}</p>
                          </div>
                        </div>
                        <button
                          className="btn-remove"
                          onClick={() => handleRemoveArchivo(index)}
                          type="button"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  className="btn-secondary"
                  onClick={handleCloseModalArchivos}
                  disabled={uploadLoading}
                >
                  Cancelar
                </button>
                <button
                  className="btn-primary"
                  onClick={handleEnviarArchivos}
                  disabled={uploadLoading || archivos.length === 0}
                >
                  {uploadLoading ? (
                    <>
                      <span className="spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send"></i>
                      Enviar Archivos
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registros;
