
// Configurar todo los datos para mandar el mail al profe y ver q mail paso èl para que les llegue el form

"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(texto) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cuentaapppresupuesto@gmail.com", // generated ethereal user
      pass: "Pass2513", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    to: "utnwi2020@gmail.com", // list of receivers
    subject: "Sugerencia de aplicacion", // Subject line
    text: texto
  });

  return info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

module.exports = {main};