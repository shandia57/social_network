const expFolder = require('express');
const routerFolder = expFolder.Router();

const findFolderCtrl = require('../controller/folder/Find');
const createFolderCtrl = require('../controller/folder/Create');
const updateFolderCtrl = require('../controller/folder/Update');
const deleteFolderCtrl = require('../controller/folder/Delete');

routerFolder.get("/", findFolderCtrl.findAll)
routerFolder.get("/:id", findFolderCtrl.findById)
routerFolder.get("/last/:count", findFolderCtrl.findLast);
routerFolder.post("/create", createFolderCtrl.create)
routerFolder.post("/update/:id", updateFolderCtrl.update)
routerFolder.delete("/delete/:id", deleteFolderCtrl.delete)

module.exports = routerFolder;