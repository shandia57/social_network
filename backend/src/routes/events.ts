const expEvent = require('express');
const routerEvent = expEvent.Router();

const findEventCtrl = require('../controller/event/Find');
const createEventCtrl = require('../controller/event/Create');
const updateEventCtrl = require('../controller/event/Update');
const deleteEventCtrl = require('../controller/event/Delete');

routerEvent.get("/", findEventCtrl.findAll)
routerEvent.get("/:id", findEventCtrl.findById)
routerEvent.get("/last/:count", findEventCtrl.findLast);
routerEvent.post("/create", createEventCtrl.create)
routerEvent.post("/update/:id", updateEventCtrl.update)
routerEvent.delete("/delete/:id", deleteEventCtrl.delete)

module.exports = routerEvent;