import { storage, auth } from './firebaseClient';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Sube un archivo a Firebase Storage y retorna el URL de descarga
 * @param {File} file - Archivo a subir
 * @param {string} facturaId - ID de la factura
 * @param {string} rfc - RFC del paciente
 * @returns {Promise<string>} - URL de descarga del archivo
 */
export const subirArchivoFactura = async (file, facturaId, rfc) => {
  try {
    // Verificar que el usuario esté autenticado
    if (!auth.currentUser) {
      throw new Error('Debes estar autenticado para subir archivos');
    }

    if (!file) {
      throw new Error('No se proporcionó ningún archivo');
    }

    // Crear nombre único para el archivo
    const timestamp = Date.now();
    const fileName = `${rfc}_${timestamp}_${file.name}`;
    
    // Ruta en Storage: facturas/{facturaId}/{fileName}
    const storageRef = ref(storage, `facturas/${facturaId}/${fileName}`);

    console.log('📤 Subiendo archivo a Firebase Storage:', fileName);
    console.log('👤 Usuario autenticado:', auth.currentUser.email);

    // Subir el archivo con metadata
    const metadata = {
      contentType: file.type,
      customMetadata: {
        'rfc': rfc,
        'facturaId': facturaId,
        'uploadedBy': auth.currentUser.email
      }
    };

    const snapshot = await uploadBytes(storageRef, file, metadata);
    
    console.log('✅ Archivo subido exitosamente');

    // Obtener URL de descarga
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log('🔗 URL generada:', downloadURL);

    return downloadURL;

  } catch (error) {
    console.error('❌ Error al subir archivo:', error);
    throw new Error('Error al subir el archivo: ' + error.message);
  }
};
