const expPublication = require('express');
const routerPublication = expPublication.Router();

const multerPub = require('../middleware/multerConfigPublication');
// const multerPub = require('../middleware/multerConfig');

const findPublicationCtrl = require('../controller/publication/Find');
const createPublicationCtrl = require('../controller/publication/Create');
const updatePublicationCtrl = require('../controller/publication/Update');
const deletePublicationCtrl = require('../controller/publication/Delete');

routerPublication.get("/", findPublicationCtrl.findAll);
routerPublication.get("/:id", findPublicationCtrl.findById);
routerPublication.post("/create", createPublicationCtrl.create);
routerPublication.post("/createWithImage", multerPub, createPublicationCtrl.createWithImage);
routerPublication.post("/update/:id", updatePublicationCtrl.update);
routerPublication.delete("/delete/:id", deletePublicationCtrl.delete);

module.exports = routerPublication;