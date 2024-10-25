

// const EventRegistration = require('./eventRegModel'); 

// module.exports.createEventRegistrationService = async (registrationDetails) => {
//     console.log('Creating event registration:', registrationDetails);
//     try {
//         const registration = new EventRegistration(registrationDetails);
//         console.log('Registration model instance created:', registration);
        
//         const savedRegistration = await registration.save();
//         console.log('Registration saved successfully:', savedRegistration);
//         return savedRegistration; 
//     } catch (err) {
//         console.error('Error while saving registration:', err);
//         return null; 
//     }
// };

// services/eventRegistrationService.js

const EventRegistration = require('./eventRegModel'); 

module.exports.createEventRegistrationService = async (registrationDetails) => {
    console.log('Creating event registration:', registrationDetails);
    try {
        const registrationModelData = new EventRegistration(registrationDetails);
        
        const savedDoc = await registrationModelData.save(); 
        console.log('Document saved:', savedDoc);
        
        return { status: 200, msg: "Document saved successfully", data: savedDoc }; 
    } catch (err) {
        console.log('Error:', err);
        
        
        if (err.name === 'ValidationError') {
            return { status: 400, msg: "Validation error", error: err }; 
        }
        
       
        return { status: 500, msg: "Server error", error: err }; 
    }
};
