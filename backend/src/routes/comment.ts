const expComments = require("express");
const routerComments = expComments.Router();


const findCommentsCtrl = require("../controller/comment/Find");
const createCommentsCtrl = require("../controller/comment/Create");
// const updateCommentsCtrl = require("../controller/comment/Update");
const deleteCommentsCtrl = require("../controller/comment/Delete");


routerComments.get("/:id", findCommentsCtrl.findByPublicationId);
routerComments.post("/create", createCommentsCtrl.create);
routerComments.delete("/delete/:id", deleteCommentsCtrl.delete);

module.exports = routerComments;