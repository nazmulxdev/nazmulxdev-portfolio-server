import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.post("/contact/email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOption = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Message - ${subject}`,
      html: `<p><strong>From:</strong>${name}</p><p><strong>Email:</strong>${email}</p><p><strong>Subject:</strong>${subject}</p><p>${message}</p>`,
    };
    await transporter.sendMail(mailOption);
    res.status(200).send({ success: true, message: "Email sent!" });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Server error, failed to send email." });
  }
});

app.get("/", (req, res) => {
  res.send("Contact form server is running.");
});

app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});

export default app;
