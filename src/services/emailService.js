import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID_EMAILJS;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID_EMAILJS;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

// ✅ Inicializar UNA sola vez
emailjs.init(PUBLIC_KEY);

export const enviarFacturaPorEmail = async ({
  toEmail,
  nombrePaciente,
  rfc,
  telefono,
  monto,
  archivoURL // URL de descarga del archivo en Firebase Storage
}) => {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('Faltan credenciales de EmailJS');
    }

    if (!toEmail || !nombrePaciente || !rfc || !archivoURL) {
      throw new Error('Faltan datos requeridos');
    }

    // 🧠 Crear formulario
    const form = document.createElement('form');
    form.style.display = 'none';

    const addInput = (name, value) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addInput('to_email', toEmail);
    addInput('paciente_nombre', nombrePaciente);
    addInput('paciente_rfc', rfc);
    addInput('paciente_telefono', telefono || 'N/A');
    addInput(
      'factura_monto',
      new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
      }).format(monto || 0)
    );
    addInput('fecha_envio', new Date().toLocaleString('es-MX'));
    addInput('link_descarga', archivoURL); // URL del archivo en Firebase

    // ⚠️ CLAVE: agregar al DOM
    document.body.appendChild(form);

    // 🚀 Enviar
    const response = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form
    );

    // 🧹 Limpiar
    document.body.removeChild(form);

    console.log('✅ Email enviado con enlace de descarga', response);
    return response;

  } catch (error) {
    console.error('❌ Error al enviar factura:', error);
    throw error;
  }
};
