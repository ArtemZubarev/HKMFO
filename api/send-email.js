import { Resend } from "resend";

const resend = new Resend("re_Vj9wsAkc_9FwiXz8aeGcRyCAoHTap4Ut6");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не разрешён" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Заполните все поля" });
  }

  try {
    const data = await resend.emails.send({
      from: "Application from website <mfotrust.hk>", // или verified@yourdomain.com
      to: ["xagrssr@gmail.com"],
      subject: "Новая заявка с сайта",
      html: `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend API response:", data);
    return res.status(200).json({ message: "Письмо отправлено!" });
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    return res.status(500).json({ message: "Ошибка отправки письма" });
  }
}
