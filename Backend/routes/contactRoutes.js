const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/contactController');

// Ahya fatka '/' hovu joie, kem ke server.js ma '/api/contact' pehlathi define che
router.post('/', sendEmail); 

module.exports = router;