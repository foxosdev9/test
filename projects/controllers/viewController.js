const Email = require('../models/EmailModel');

module.exports.getContactPage = async (req, res) => {
    try{
       res.status(200).render('contact');
    }catch(err){
        console.log(err);
    }
};

module.exports.getAllEmails = async (req, res) => {
    try{
       const emails = await Email.find().select('-__v');
       res.status(200).render('emails', { emails });

    }catch(err){
        console.log(err);
    }
}