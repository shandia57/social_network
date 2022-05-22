const likeExp = require('express');
const routerLike = likeExp.Router();

// Fichiers controller qui execute toutes les fonctions lié aux routes
const createLikeCtrl = require('../controller/like/Create');
const readLikeCtrl = require('../controller/like/Find');


// Routes + fonctions
routerLike.post("/create", createLikeCtrl.create);
routerLike.get("/:id", readLikeCtrl.findLikeById);

module.exports = routerLike;