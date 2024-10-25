



const eventRegistrationService = require('./eventRegService');

const createEventRegistrationController = async (req, res) => {
    try {
        console.log('Received registration details:', req.body);
        
      
        const status = await eventRegistrationService.createEventRegistrationService(req.body);
        console.log('Returned status:', status);

      
        if (status) {
            return res.status(201).json({ "status": true, "message": "Registration created successfully", registration: status });
        } else {
            return res.status(400).json({ "status": false, "message": "Error creating registration" });
        }
    } catch (err) {
        console.error('Error in createEventRegistrationController:', err);
        return res.status(500).json({ "status": false, "message": "Internal Server Error" });
    }
};

module.exports = { createEventRegistrationController };


