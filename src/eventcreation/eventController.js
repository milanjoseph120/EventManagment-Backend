var eventService = require('./eventService')

var createEventController = async (req, res) => {
    try {
        console.log(req.body);
        var status = await eventService.createEventDBService(req.body);
        console.log('Returned status:', status);

        // Check if status is a valid saved document
        if (status) {
            res.send({ "status": true, "message": "event created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    } catch (err) {
        console.error('Error in createEventController:', err);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

module.exports = {createEventController};