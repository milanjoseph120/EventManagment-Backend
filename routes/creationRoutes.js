var express = require('express')

var creationController = require('../src/eventcreation/eventController')

const routers = express.Router();

routers.route('/people/createEvent').post(creationController.createEventController)

module.exports =routers