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
      from: "Application from website <onboarding@resend.dev>", // или verified@yourdomain.com
      to: ["info@mfotrust.hk"],
      subject: "New application",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend API response:", data);
    return res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.error("Error when trying to send:", error);
    return res.status(500).json({ message: "Error when trying to send" });
  }
}
