var express = require('express');

var peopleController = require('../src/people/peoplesController');


const router = express.Router();

router.route('/people/login').post(peopleController.loginpeopleController)

router.route('/people/create').post(peopleController.createpeopleController)


module.exports = router