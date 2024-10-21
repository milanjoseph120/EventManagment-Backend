var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({

    eventname: {
        type: String,
        required: true
    },
    eventdate: {
        type: Date,
        required: true
    },
    eventtime: {
        type: String, 
        required: true
    },
    eventlocation: {
        type: String,
        required: true
    },
    eventdescription: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('event', eventSchema);
