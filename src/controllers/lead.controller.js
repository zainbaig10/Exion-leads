import { resend } from "../config/mailer.js";
import { clients } from "../config/clients.js";
import { formatLeadFields } from "../utils/formatLead.js";
// import { transporter } from "../config/mailer.js";
// import { clients } from "../config/clients.js";
// import { formatLeadFields } from "../utils/formatLead.js";

// export const receiveLead = async (req, res) => {
//   try {
//     const { clientId, leadType, fields } = req.body;

//     if (!clientId || !fields) {
//       return res.status(400).json({ msg: "Missing clientId or fields" });
//     }

//     const client = clients[clientId];

//     if (!client) {
//       return res.status(404).json({ msg: "Client not found" });
//     }

//     const formattedText = formatLeadFields(fields);

//     const mailOptions = {
//       from: `"${client.businessName} Website" <${process.env.SMTP_USER}>`,
//       to: client.email,
//       subject: `New ${leadType?.toUpperCase() || "CONTACT"} Lead`,
//       text: formattedText,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({
//       msg: "Lead delivered successfully",
//     });
//   } catch (err) {
//     console.error("MAIL ERROR:", err);
//     res.status(500).json({
//       msg: "Failed to send lead",
//       error: err.message,
//     });
//   }
// };

export const receiveLead = async (req, res) => {
  try {
    const { clientId, leadType, fields } = req.body;

    if (!clientId || !fields) {
      return res.status(400).json({ msg: "Missing clientId or fields" });
    }

    const client = clients[clientId];
    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error("RESEND_FROM_EMAIL not set");
    }

    const formattedText = formatLeadFields(fields);

    await resend.emails.send({
      from: `Al Ramah Website <leads@alramahalsadasi.com>`, // ✅ FIXED
      to: [client.email],                                  // ✅ ARRAY
      subject: `New ${leadType?.toUpperCase() || "CONTACT"} Lead`,
      text: formattedText,
    });

    return res.status(200).json({
      msg: "Lead delivered successfully",
    });

  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({
      msg: "Failed to send lead",
      error: err.message,
    });
  }
};


