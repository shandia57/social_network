const expClient = require('express');
const routerClient = expClient.Router();

const findClientCtrl = require('../controller/client/Find');
const createClientCtrl = require('../controller/client/Create');
const updateClientCtrlk = require('../controller/client/Update');
const deleteClientCtrl = require('../controller/client/Delete');

routerClient.get("/", findClientCtrl.findAll);
routerClient.get("/:id", findClientCtrl.findById);
routerClient.get("/last/:count", findClientCtrl.findLast);
routerClient.post("/create", createClientCtrl.create);
routerClient.post("/update/:id", updateClientCtrlk.update);
routerClient.delete("/delete/:id", deleteClientCtrl.delete);

module.exports = routerClient;