import { API_URL } from "./apiUrl";

const sendEmail = async (data) => {
  try {
    const response = await fetch(`${API_URL}/sendEmail`, {
      method: "POST",
      body: JSON.stringify({
        recipient: "impermeabilizacionesfp@gmail.com",
        subject: "Correo de cliente",
        msgBody:`Nombre : ${data.nombre}\nApellidos : ${data.apellidos}\nCorreo : ${data.email}\nNúmero de teléfono : ${data.phone}\nMensaje : ${data.description}`
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const EmailServices = {
  sendEmail,
};

export default EmailServices;
