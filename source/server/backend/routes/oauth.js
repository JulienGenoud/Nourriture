/**
 * Created by sylflo on 10/9/15.
 */

var authController = require('../oauth/controllers/auth');
var clientController = require('../oauth/controllers/client');
var oauth2Controller = require('../oauth/controllers/oauth2');

var express = require('express');
var router = express.Router();
var app = express();



// Create endpoint handlers for /clients
router.route('/clients')
    .post(authController.isAuthenticated, clientController.postClients)
    .get(authController.isAuthenticated, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
    .get(authController.isAuthenticated, oauth2Controller.authorization)
    .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
    .post(authController.isClientAuthenticated, oauth2Controller.token);

module.exports = router;
