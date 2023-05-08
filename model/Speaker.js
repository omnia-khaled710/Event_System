const mongoose = require('mongoose');
const speakerSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },

});

const SpeakerModel = new mongoose.model('Speaker', speakerSchema)
module.exports = SpeakerModel;



