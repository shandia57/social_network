const expAuth = require('express');
const routerAuth = expAuth.Router();




const findAuthCtrl = require('../controller/authentification/Log');
const deleteAuthCtrl = require('../controller/authentification/Delete');

routerAuth.post("/login", findAuthCtrl.login);
routerAuth.delete("/delete/:id", deleteAuthCtrl.delete);


module.exports = routerAuth;