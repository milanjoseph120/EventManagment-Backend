
var peopleService = require('./peoplesService');

var createpeopleController = async (req, res) => {
    try {
        console.log(req.body);
        var status = await peopleService.createPeopleDBService(req.body);
        console.log('Returned status:', status);

        // Check if status is a valid saved document
        if (status) {
            res.send({ "status": true, "message": "People created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    } catch (err) {
        console.error('Error in createpeopleController:', err);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

module.exports = createpeopleController;



var loginpeopleController = async (req, res) => {
    var result = null;
    try {
        result = await peopleService.loginpeopleDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}
module.exports = { createpeopleController, loginpeopleController};




// var peopleService = require('./peoplesService');
// var createpeopleController = async (req, res) => 
// {
//     try
//     {
//     console.log(req.body);
//     var status = await peopleService.createPeopleDBService(req.body);
//     console.log('status',status);
//     if (status) {
//         res.send({ "status": true, "message": "people created successfully" });
//     } else {
//         res.send({ "status": false, "message": "Error creating user" });
//     }
// }
// catch(err)
// {
//     console.log(err);
// }
// }