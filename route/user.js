const express = require('express')
const db = require('../firebase')
const route = express.Router()
const { collection, addDoc } = require('firebase/firestore');



route.post('/user', async (req,res) => {
    const { name, email, message } = req.body;
    try {
        const docRef = await addDoc(collection(db, 'user'), {
            name,
            email,
            message,
        });
        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error adding document: ', error);
        res.status(500).send('Error submitting form');
    }
})

module.exports = route