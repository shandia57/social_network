const expPublication = require('express');
const routerPublication = expPublication.Router();

// Middleware pour contrôle des données
const multerPub = require('../middleware/multerConfigPublication');
const validatePublication = require('../middleware/validations/valideInput');

// Fichiers controller qui execute toutes les fonctions lié aux routes
const findPublicationCtrl = require('../controller/publication/Find');
const createPublicationCtrl = require('../controller/publication/Create');
const updatePublicationCtrl = require('../controller/publication/Update');
const deletePublicationCtrl = require('../controller/publication/Delete');

// Routes + fonctions
routerPublication.get("/", findPublicationCtrl.findAll);
routerPublication.get("/:id", findPublicationCtrl.findById);

// Routes + Middleware pour valider les données entrants  , puis fonction
routerPublication.post("/create", validatePublication.publicationData, createPublicationCtrl.create);
routerPublication.post("/createWithImage", multerPub, createPublicationCtrl.createWithImage);
routerPublication.post("/update/:id", updatePublicationCtrl.update);
routerPublication.post("/updateWithImage/:id", multerPub, updatePublicationCtrl.updateWithImage);
routerPublication.delete("/delete/:id", deletePublicationCtrl.delete);

module.exports = routerPublication;