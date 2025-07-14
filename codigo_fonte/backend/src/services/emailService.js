import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendContactEmail({ name, email, subject, message }) {
    console.log("Host:", process.env.MAIL_HOST);

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST, 
    port: process.env.MAIL_PORT, 
    secure: true, 
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.MAIL_TO, 
    subject: `Contato: ${subject}`,
    text: `
      Nome: ${name}
      Email: ${email}
      Assunto: ${subject}
      Mensagem:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}