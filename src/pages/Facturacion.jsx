import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/Imagotipo_negativo.svg';
import { solicitarFactura, getPacientePorRfc } from '../services/facturasService';
import './facturacion.css';
import { REGIMENES_FISCALES, obtenerUsosPorRegimen } from '../helper/satCatalogos';

const rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-V0-9]{3}$/;

const METODO_PAGO = [
  'Efectivo',
  'Tarjeta de Crédito',
  'Tarjeta de Débito',
  'Transferencia electrónica',
  'Otros'
];

const Facturacion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rfc: '',
    nombreCompleto: '',
    codigoPostal: '',
    regimenFiscal: '',
    usoCFDI: '',
    correo: '',
    numeroTelefonico: '',
    monto: '',
    fecha: '',
    metodoPago: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPaciente, setLoadingPaciente] = useState(false);

  const regimenSeleccionado = REGIMENES_FISCALES.find(
    r => r.label === formData.regimenFiscal
  );

  const usosDisponibles = regimenSeleccionado
    ? obtenerUsosPorRegimen(regimenSeleccionado.value)
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!rfcRegex.test(formData.rfc.toUpperCase())) {
      setError('RFC inválido. Debe tener el formato correcto.');
      return false;
    }

    // Validación Nombre Completo
    if (formData.nombreCompleto.trim().length < 3) {
      setError('El nombre completo debe tener al menos 3 caracteres.');
      return false;
    }

    // Validación Código Postal
    const cpRegex = /^\d{5}$/;
    if (!cpRegex.test(formData.codigoPostal)) {
      setError('El código postal debe tener 5 dígitos.');
      return false;
    }

    // Validación Régimen Fiscal
    if (!formData.regimenFiscal) {
      setError('Debes seleccionar un régimen fiscal.');
      return false;
    }

    // Validación Uso CFDI
    if (!formData.usoCFDI) {
      setError('Debes seleccionar un uso de CFDI.');
      return false;
    }

    // Validación Correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setError('El correo electrónico no es válido.');
      return false;
    }

    // Validación Número Telefónico
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.numeroTelefonico.replace(/\D/g, ''))) {
      setError('El número telefónico debe tener 10 dígitos.');
      return false;
    }

    // Validación Monto
    if (isNaN(formData.monto) || parseFloat(formData.monto) <= 0) {
      setError('El monto debe ser un número mayor a 0.');
      return false;
    }

    // Validación Fecha
    if (!formData.fecha) {
      setError('Debes seleccionar una fecha.');
      return false;
    }

    return true;
  };

  const handleRfcBlur = async () => {
    const rfc = formData.rfc.toUpperCase();
    if (!rfcRegex.test(rfc)) return; // si no es válido, no consulta

    setLoadingPaciente(true);
    try {
      const paciente = await getPacientePorRfc(rfc);
      if (paciente) {
        setFormData((prev) => ({
          ...prev,
          rfc: rfc,
          nombreCompleto: paciente.nombreCompleto || '',
          codigoPostal: paciente.codigoPostal || '',
          regimenFiscal: paciente.regimenFiscal || '',
          usoCFDI: paciente.usoCFDI || '',
        }));
        setError('');
      } else {
        setFormData((prev) => ({
          ...prev,
          rfc: rfc,
          nombreCompleto: '',
          codigoPostal: '',
          regimenFiscal: '',
          usoCFDI: '',
        }));
      }
    } catch (err) {
      console.error('Error consultando paciente por RFC:', err);
    } finally {
      setLoadingPaciente(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setError('');
    setSubmitted(false);
    setLoading(true);

    try {
      await solicitarFactura(formData);
      setSubmitted(true);
      setFormData({
        rfc: '',
        nombreCompleto: '',
        codigoPostal: '',
        regimenFiscal: '',
        usoCFDI: '',
        correo: '',
        numeroTelefonico: '',
        monto: '',
        fecha: '',
        metodoPago: '',
      });
    } catch (err) {
      console.error('Error al solicitar factura:', err);
      setError('No se pudo enviar la solicitud. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="facturacion-menu">
        <div className="facturacion-menu-content">
          <div className="menu-logo-section">
            <img src={logo} alt="Logo" className="menu-logo-img" />
            <h2 className="menu-logo">Facturación</h2>
          </div>
          <button className="menu-btn-home" onClick={() => navigate('/')}>
            <i className="bi bi-house-fill"></i> Ir al Inicio
          </button>
        </div>
      </div>
      <div className="facturacion-container">
        <div className="facturacion-wrapper">
          <h1 className="facturacion-title">Solicitar Factura</h1>
          <p className="facturacion-subtitle">Completa el formulario para solicitar tu factura</p>
          {loadingPaciente && <p className="facturacion-subtitle">Buscando datos del paciente...</p>}

          {error && <div className="error-message">{error}</div>}
          {submitted && <div className="success-message">¡Solicitud enviada correctamente!</div>}

          <form onSubmit={handleSubmit} className="facturacion-form">
            {/* RFC - Campo completo */}
            <div className="form-row form-row-full">
              <div className="form-group">
                <label htmlFor="rfc">RFC *</label>
                <input
                  type="text"
                  id="rfc"
                  name="rfc"
                  value={formData.rfc}
                  onChange={handleChange}
                  onBlur={handleRfcBlur}
                  placeholder="Ej: ABC123456XYZ"
                  maxLength="13"
                  required
                />
              </div>
            </div>

            {/* Nombre Completo - Campo completo */}
            <div className="form-row form-row-full">
              <div className="form-group">
                <label htmlFor="nombreCompleto">Nombre Completo *</label>
                <input
                  type="text"
                  id="nombreCompleto"
                  name="nombreCompleto"
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
            </div>

            {/* Código Postal + Número Telefónico */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="codigoPostal">Código Postal *</label>
                <input
                  type="text"
                  id="codigoPostal"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleChange}
                  placeholder="5 dígitos"
                  maxLength="5"
                  pattern="\d{5}"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numeroTelefonico">Número Telefónico *</label>
                <input
                  type="tel"
                  id="numeroTelefonico"
                  name="numeroTelefonico"
                  value={formData.numeroTelefonico}
                  onChange={handleChange}
                  placeholder="10 dígitos"
                  required
                />
              </div>
            </div>

            {/* Régimen Fiscal - Campo completo */}
            <div className="form-row form-row-full">
              <div className="form-group">
                <label htmlFor="regimenFiscal">Régimen Fiscal *</label>
                <select
                  id="regimenFiscal"
                  name="regimenFiscal"
                  value={formData.regimenFiscal}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      regimenFiscal: e.target.value, // guarda LABEL
                      usoCFDI: '' // reset uso CFDI
                    }));
                  }}
                  required
                >
                  <option value="">-- Selecciona un régimen fiscal --</option>
                  {REGIMENES_FISCALES.map((regimen, index) => (
                    <option key={regimen.value} value={regimen.label}>
                      {regimen.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="usoCFDI">Uso de CFDI *</label>
                <select
                  id="usoCFDI"
                  name="usoCFDI"
                  value={formData.usoCFDI}
                  onChange={(e) =>
                    setFormData(prev => ({
                      ...prev,
                      usoCFDI: e.target.value // guarda LABEL
                    }))
                  }
                  disabled={!formData.regimenFiscal}
                  required
                >
                  <option value="">-- Selecciona un uso de CFDI --</option>
                  {usosDisponibles.map((uso, index) => (
                    <option key={uso.value} value={uso.label}>
                      {uso.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>


            {/* Correo + Monto */}
            <div className="form-row form-row-full">
              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico *</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor="metodoPago">Forma de Pago *</label>
                  <select
                    id="metodoPago"
                    name="metodoPago"
                    value={formData.metodoPago}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Selecciona una forma de pago --</option>
                    {METODO_PAGO.map((forma, index) => (
                      <option key={`formaPago-${index}`} value={forma}>
                        {forma}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="monto">Monto *</label>
                  <input
                    type="number"
                    id="monto"
                    name="monto"
                    value={formData.monto}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>



            </div>

            {/* Fecha - Campo completo */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fecha">Fecha de Servicio *</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Enviando...' : 'Solicitar Factura'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Facturacion;
