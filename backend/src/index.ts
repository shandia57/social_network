import "reflect-metadata";
import { createConnection } from "typeorm";


const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000;

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

export const connection = createConnection()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})