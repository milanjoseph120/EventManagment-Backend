var eventModel = require('./eventModel');

module.exports.createEventDBService = async (eventDetails) => {
    console.log('this is called', eventDetails);
    try {
        var eventModelData = new eventModel(eventDetails);
        console.log('eventModelData');
        
        const saveDoc = await eventModelData.save(); 
        console.log('Document saved:', saveDoc);
        return saveDoc; 
    } catch(err) {
        console.log('Error:', err);
        return null;
    }
};