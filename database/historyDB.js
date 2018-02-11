var mongoose = require('mongoose');
var patientHistory = mongoose.createConnection('mongodb://localhost/patientHistory');

patientHistory.on('error', console.error.bind(console, 'connection error:'));
patientHistory.once('open', function() {
  // we're connected!
});

var patientHistory = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    birthOrder: {
        type: String,
    },
    feedingFrequency: {
        type: String,
    },
    feedingFormula: {
        type: String,
    },
    feedingAgeStart: {
        type: String,
    },
    feedingDateStart: {
        type: Number,
    },
    feedingAgeEnd: {
        type: String,
    },
    feedingDateEnd: {
        type: Number,
    },
    additions: {
        type: String
    },
    underweight: {
        type: Boolean
    },
    socialHistory: {
        type: String
    }
  });
var PatientHistory = mongoose.model('PatientHistory', patientHistory);

var historyDB = { 
    
};

module.exports = historyDB;