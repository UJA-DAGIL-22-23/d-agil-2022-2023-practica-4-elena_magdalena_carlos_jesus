/**
 * @file server.js
 * @description Define el servidor que aceptará las peticiones para esta aplicación.
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */
const express = require("express")
const app = express()

// Necesario para poder obtener los datos en las llamadas POST
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Necesario para gestionar el conjunto de callbacks para las distintas funciones REST
const routes = require("./routes")
app.use("/", routes);




<<<<<<< HEAD
const port = 8004;
app.listen(port, () => {
    console.log(`Microservicio PLANTILLA ejecutándose en puerto ${port}!`);
=======
const port = 8002;
app.listen(port, () => {
    console.log(`Microservicio GOLF ejecutándose en puerto ${port}!`);
>>>>>>> e60caf1585687bb2dfc40396eabf8786d4afdfb0
});


module.exports = app
