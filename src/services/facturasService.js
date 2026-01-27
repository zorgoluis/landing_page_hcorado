import { collection, addDoc, serverTimestamp, query, where, getDocs, limit } from 'firebase/firestore';
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
  };

  const facturaRef = await addDoc(collection(db, COLLECTION_FACTURAS), factura);

  return { pacienteId, facturaId: facturaRef.id };
};
