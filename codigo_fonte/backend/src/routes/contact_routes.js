import express from "express";
import { sendContactEmail } from "../services/emailService.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Campos obrigatórios estão faltando." });
  }

  try {
    await sendContactEmail({ name, email, subject, message });
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro ao enviar email." });
  }
});

export default router;