const expUser = require('express');
const routerUser = expUser.Router();


// middleware that is specific to this router
const multerPhoto = require('../middleware/multerConfig');


/** Permissible loading a single file, 
    the value of the attribute "name" in the form of "recfile". **/
// var multerNew = require('multer');

// var upload = multerNew({ dest: 'images/' });
// var type = upload.single('photo');

const findUserCtrl = require('../controller/user/Find');
const createUserCtrl = require('../controller/user/Create');
const updateUserCtrlk = require('../controller/user/Update');
const deleteUserCtrl = require('../controller/user/Delete');

routerUser.get("/", findUserCtrl.findAll);
routerUser.get("/:id", findUserCtrl.findById);
routerUser.post("/create", createUserCtrl.create);
routerUser.post("/update/:id", updateUserCtrlk.update);
routerUser.post("/update/photo/:id", multerPhoto, updateUserCtrlk.updatePhoto);
routerUser.delete("/delete/:id", deleteUserCtrl.delete);

module.exports = routerUser;