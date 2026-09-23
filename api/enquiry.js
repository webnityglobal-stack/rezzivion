import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      message,
    } = req.body || {};

    // Required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send enquiry to your Rezzivion email
    await transporter.sendMail({
      from: `"Rezzivion Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Website Enquiry - ${service}`,
      text: `
New Enquiry Received

Name: ${name}
Work Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}
Service: ${service}

Process / Requirement:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #172033;">
          <h2 style="color:#0D2342;">New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr />

          <h3>Process / Requirement</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry email error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
    });
  }
}