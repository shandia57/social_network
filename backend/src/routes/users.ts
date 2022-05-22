const expUser = require('express');
const routerUser = expUser.Router();


// middleware that is specific to this router
const multerPhoto = require('../middleware/multerConfig');
const validateValues = require('../middleware/validations/valideInput');


// Fichiers controller qui execute répertories toutes les fonctions lié aux routes
const findUserCtrl = require('../controller/user/Find');
const createUserCtrl = require('../controller/user/Create');
const updateUserCtrlk = require('../controller/user/Update');
const deleteUserCtrl = require('../controller/user/Delete');

// Routes + fonctions
routerUser.get("/", findUserCtrl.findAll);
routerUser.get("/:id", findUserCtrl.findById);

// Routes + Middleware pour valider les données entrants  , puis fonction
routerUser.post("/create", validateValues.userData, createUserCtrl.create);
routerUser.post("/update/:id", updateUserCtrlk.update);
routerUser.post("/update/photo/:id", multerPhoto, updateUserCtrlk.updatePhoto);
routerUser.delete("/delete/:id", deleteUserCtrl.delete);

module.exports = routerUser;