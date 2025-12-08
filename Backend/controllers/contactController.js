const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please fill all fields" });
  }

  try {
    // 2. Transporter Setup (Gmail Service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // .env file mathi email
        pass: process.env.EMAIL_PASS, // .env file mathi app password
      },
    });

    // 3. Email Options (Tamane Email aavse)
    const mailOptions = {
      from: email, // Sender no email
      to: process.env.EMAIL_USER, // Tamaro email (Reciever)
      subject: `New Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Server Error. Try again later." });
  }
};