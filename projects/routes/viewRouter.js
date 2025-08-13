const express = require('express');
const router = express.Router();
const { getContactPage, getAllEmails } = require('../controllers/viewController');
const Email = require('../models/EmailModel');

router.get('/contact', getContactPage);
router.get('/emails', getAllEmails);

router.post('/register-email', async (req, res) => {
    try{
        const date = new Date();
        const dd = date.toLocaleDateString('en-GB');
        const newEmail = 
        await new Email({email: req.body.email, date: dd});
        await newEmail.save();
        
        res.status(200).json({
            status: 'success',
            data: newEmail
        });
    }catch(err){

        res.status(400).json({
            status: 'Fail',
            err: err
        });
    }
})


module.exports = router;

