const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://fedefedev:fedecapo8@apphabitcluster.z9cp89t.mongodb.net/").then(() => {
    console.log("Conexión a MongoDB exitosa");
}).catch((error) => {
    console.log("Error al conectarse a MongoDB", error);
});

app.listen(port,() => {
    console.log("Servidor corriendo en el puerto", port);
})