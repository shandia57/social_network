import "reflect-metadata";
import { createConnection } from "typeorm";


const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;

const clientRoutes = require('./routes/clients');
const eventRoutes = require('./routes/events');
const folderRoutes = require('./routes/folders');


export const connection = createConnection()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use("/api/clients", clientRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/folders", folderRoutes);



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})