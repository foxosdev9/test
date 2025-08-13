const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: String
});

// emailSchema.index({email: 1});

emailSchema.pre('save', async function(next){
    const existe = await emailModel.findOne({email: this.email});
    if(existe){
        const err = new Error('this email existe before');
        return next(err);
    }
    next();
})


const emailModel = mongoose.model('Email', emailSchema);
module.exports = emailModel;