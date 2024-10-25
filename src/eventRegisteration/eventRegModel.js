// models/EventRegistration.js

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventRegistrationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    
  },
  event: {
    type: String,
    required: true,
    
  },
});

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema);
