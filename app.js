
const serviceId = 'service_qb4bb2m';
const templateId = 'template_qqo37xg';
const apiKey = 'SGBHvqX8yG0kz28VZ';
const frmEmail = document.getElementById('frm-email');

frmEmail.addEventListener('submit', sendEmail);

function sendEmail(event) {
    event.preventDefault();
    emailjs.init(serviceId);
    emailjs.sendForm(serviceId, templateId, frmEmail, apiKey)
    .then((result) => swal.fire("Su mensaje ha sido envido con éxito"))
    .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No ha sido posible enviar el mensaje!",
          });
    });
}