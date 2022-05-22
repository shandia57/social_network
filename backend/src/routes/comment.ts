const expComments = require("express");
const routerComments = expComments.Router();

// Fichiers controller qui execute toutes les fonctions lié aux routes
const findCommentsCtrl = require("../controller/comment/Find");
const createCommentsCtrl = require("../controller/comment/Create");
const deleteCommentsCtrl = require("../controller/comment/Delete");

// Routes + fonctions
routerComments.get("/:id", findCommentsCtrl.findByPublicationId);
routerComments.post("/create", createCommentsCtrl.create);
routerComments.delete("/delete/:id", deleteCommentsCtrl.delete);

module.exports = routerComments;