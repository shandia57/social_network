const expAuth = require('express');
const routerAuth = expAuth.Router();

// Middleware
const authMiddleware = require('../middleware/auth');
const validateConnection = require('../middleware/validations/valideInput');

// Fichier controller qui execute toutes les fonctions lié aux routes
const findAuthCtrl = require('../controller/authentification/Log');

// Routes + Middleware pour valider les données entrants , puis fonction
routerAuth.post("/login", validateConnection.userDataConnection, findAuthCtrl.login);


module.exports = routerAuth;