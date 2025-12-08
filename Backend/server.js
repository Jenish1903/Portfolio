// server.js - FINAL FIXED VERSION
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Debug Log: Aana thi khabar padse ke request aavi ke nai
app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`);
  next();
});

// --- MAIN EMAIL ROUTE ---
app.post('/api/contact', async (req, res) => {
  console.log("--> Processing contact form...");
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please fill all fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("--> Email SENT Successfully!");
    res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("--> Email Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Test Route
app.get('/', (req, res) => {
  res.send('Server is RUNNING!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});