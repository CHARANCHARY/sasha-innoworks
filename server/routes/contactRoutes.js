const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST request to handle form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, description } = req.body;

        // Basic validation
        if (!name || !email || !subject || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Save form data to MongoDB
        const newContact = new Contact({ name, email, subject, description });
        await newContact.save();
        
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
