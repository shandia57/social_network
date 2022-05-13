const likeExp = require('express');
const routerLike = likeExp.Router();

// Controller
const createLikeCtrl = require('../controller/like/Create');
const readLikeCtrl = require('../controller/like/Find');


// Routes
routerLike.post("/create", createLikeCtrl.create);
routerLike.get("/:id", readLikeCtrl.findLikeById);

module.exports = routerLike;