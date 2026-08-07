import nodemailer from "nodemailer";
console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL PASSWORD EXISTS:",
  !!process.env.EMAIL_PASSWORD
);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};

export default sendEmail;