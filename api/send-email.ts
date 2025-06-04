// /api/send-email.js

import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не разрешён" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Заполните все поля" });
  }

  try {
    // Создание транспортера для теста через Ethereal
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "xagrssr@gmail.com", // Замените на свою почту
      subject: "Новая заявка с сайта",
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);

    // Для теста: возвращаем ссылку на Ethereal
    return res.status(200).json({
      message: "Письмо отправлено",
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Ошибка при отправке письма" });
  }
}
