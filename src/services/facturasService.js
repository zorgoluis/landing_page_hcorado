import { collection, addDoc, serverTimestamp, query, where, getDocs, limit, orderBy } from 'firebase/firestore';
import { db } from './firebaseClient';

const COLLECTION_PACIENTES = 'pacientes';
const COLLECTION_FACTURAS = 'facturas';

const normalizarRfc = (rfc = '') => rfc.trim().toUpperCase();

export const getPacientePorRfc = async (rfc) => {
  const rfcNormalizado = normalizarRfc(rfc);
  const pacientesRef = collection(db, COLLECTION_PACIENTES);
  const q = query(pacientesRef, where('rfc', '==', rfcNormalizado), limit(1));
  const snap = await getDocs(q);

  if (snap.empty) return null;

  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
};

const obtenerOPacientePorRfc = async ({ rfc, nombreCompleto, codigoPostal, regimenFiscal, usoCFDI }) => {
  const existente = await getPacientePorRfc(rfc);
  if (existente) return existente.id;

  const rfcNormalizado = normalizarRfc(rfc);
  const pacientesRef = collection(db, COLLECTION_PACIENTES);

  const paciente = {
    rfc: rfcNormalizado,
    nombreCompleto,
    codigoPostal,
    regimenFiscal,
    usoCFDI,
    createdAt: serverTimestamp(),
  };

  const pacienteRef = await addDoc(pacientesRef, paciente);
  return pacienteRef.id;
};

/**
 * Guarda los datos del paciente y crea la factura enlazada.
 * Retorna los IDs creados { pacienteId, facturaId }.
 */
export const solicitarFactura = async (payload) => {
  const {
    rfc,
    nombreCompleto,
    codigoPostal,
    regimenFiscal,
    usoCFDI,
    correo,
    numeroTelefonico,
    monto,
    fecha,
    metodoPago
  } = payload;

  const rfcNormalizado = normalizarRfc(rfc);
  const pacienteId = await obtenerOPacientePorRfc({ rfc: rfcNormalizado, nombreCompleto, codigoPostal, regimenFiscal, usoCFDI });

  // Luego creamos la factura ligada al paciente
  const factura = {
    pacienteId,
    rfc: rfcNormalizado,
    telefono: numeroTelefonico,
    correo,
    monto: parseFloat(monto),
    fecha: fecha ? new Date(fecha) : null,
    createdAt: serverTimestamp(),
    metodoPago: metodoPago
  };

  const facturaRef = await addDoc(collection(db, COLLECTION_FACTURAS), factura);

  return { pacienteId, facturaId: facturaRef.id };
};

/**
 * Obtiene todas las facturas del mes especificado
 * @param {number} year - Año (ej: 2026)
 * @param {number} month - Mes (1-12, donde 1=enero)
 * @returns {Promise<Array>} Array de facturas con datos del paciente
 */
export const getFacturasPorMes = async (year, month) => {
  try {
    // Crear fechas para el rango del mes (usando timestamps de Firestore)
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1); // Primer día del siguiente mes

    const facturasRef = collection(db, COLLECTION_FACTURAS);
    const q = query(
      facturasRef,
      where('createdAt', '>=', startDate),
      where('createdAt', '<', endDate),
      orderBy('createdAt', 'desc')
    );

    const snap = await getDocs(q);
    const facturas = [];

    // Obtener datos de pacientes para cada factura
    for (const doc of snap.docs) {
      const factura = { id: doc.id, ...doc.data() };

      // Obtener datos del paciente
      if (factura.pacienteId) {
        try {
          const pacienteSnap = await getDocs(
            query(collection(db, COLLECTION_PACIENTES), where('__name__', '==', factura.pacienteId))
          );

          if (!pacienteSnap.empty) {
            const paciente = pacienteSnap.docs[0].data();
            factura.paciente = paciente;
          }
        } catch (err) {
          console.warn('Error al obtener paciente:', err);
        }
      }

      facturas.push(factura);
    }

    return facturas;
  } catch (error) {
    console.error('Error al obtener facturas por mes:', error);
    throw error;
  }
};

/**
 * Obtiene todas las facturas (sin filtro de mes)
 * @returns {Promise<Array>} Array de todas las facturas
 */
export const getAllFacturas = async () => {
  try {
    const facturasRef = collection(db, COLLECTION_FACTURAS);
    const q = query(facturasRef, orderBy('createdAt', 'desc'));

    const snap = await getDocs(q);
    const facturas = [];

    for (const doc of snap.docs) {
      const factura = { id: doc.id, ...doc.data() };

      if (factura.pacienteId) {
        try {
          const pacienteSnap = await getDocs(
            query(collection(db, COLLECTION_PACIENTES), where('__name__', '==', factura.pacienteId))
          );

          if (!pacienteSnap.empty) {
            const paciente = pacienteSnap.docs[0].data();
            factura.paciente = paciente;
          }
        } catch (err) {
          console.warn('Error al obtener paciente:', err);
        }
      }

      facturas.push(factura);
    }

    return facturas;
  } catch (error) {
    console.error('Error al obtener todas las facturas:', error);
    throw error;
  }
};
