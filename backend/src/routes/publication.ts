const expPublication = require('express');
const routerPublication = expPublication.Router();

const findPublicationCtrl = require('../controller/publication/Find');
const createPublicationCtrl = require('../controller/publication/Create');
// const updatePublicationCtrl = require('../controller/publication/Update');
// const deletePublicationCtrl = require('../controller/publication/Delete');

routerPublication.get("/", findPublicationCtrl.findAll);
routerPublication.get("/:id", findPublicationCtrl.findById);
routerPublication.post("/create", createPublicationCtrl.create);
// routerPublication.post("/update/:id", updatePublicationCtrl.update);
// routerPublication.post("/update/photo/:id", multerPhoto, updatePublicationCtrl.updatePhoto);
// routerPublication.delete("/delete/:id", deletePublicationCtrl.delete);

module.exports = routerPublication;