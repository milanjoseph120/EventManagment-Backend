var express = require('express')

var eventRegController = require('../src/eventRegisteration/eventRegController')

const routerss = express.Router();

routerss.route('/people/eventReg').post(eventRegController.createEventRegistrationController)

module.exports =routerss