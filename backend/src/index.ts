// Import spécifique à TYPEORM
import "reflect-metadata";
import { createConnection } from "typeorm";

// variables de bases permettant l'initiation du serveur
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000;

// Tous les fichiers qui consituent les routes
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const publicationRoutes = require('./routes/publication');
const commentRoutes = require('./routes/comment');
const likeRoutes = require('./routes/like');

// TYPEORM autorise qu'une seule connexion à la base de données, il faut donc exporter cette varaible
export const connection = createConnection()

// Permet de récupérer les données envoyées par le client
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Permet d'autoriser les connexions
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Définition des routes pour envoyer / lire des images
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images/profile', express.static(path.join(__dirname, 'images/profile')));
app.use('/images/forum', express.static(path.join(__dirname, 'images/forums')));

// Déclaration du début de la route (le reste se situe dans le fichier routes)
app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/publications", publicationRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)

// Permet de définir le port d'écoute du serveur
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})