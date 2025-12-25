// import nodemailer from "nodemailer";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);

// export const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: 587,                // 🔴 CHANGE THIS
//   secure: false,            // 🔴 MUST be false for 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.error("SMTP ERROR:", error);
//   } else {
//     console.log("SMTP server is ready to send emails");
//   }
// });

