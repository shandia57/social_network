const expComments = require("express");
const routerComments = expComments.Router();


const findCommentsCtrl = require("../controller/comment/Find");
// const createCommentsCtrl = require("../controller/comments/Create");
// const updateCommentsCtrl = require("../controller/comments/Update");
// const deleteCommentsCtrl = require("../controller/comments/Delete");

routerComments.get("/:id", findCommentsCtrl.findByPublicationId);

module.exports = routerComments;