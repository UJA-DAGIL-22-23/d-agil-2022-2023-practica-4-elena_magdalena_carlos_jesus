/**
 * @file routes.js
 * @description Define las rutas ante las que va a responder al MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const express = require("express");
const router = express.Router();
const { callbacks } = require("./callbacks");



/**
 * Ruta raíz: /
 */
router.get("/", async (req, res) => {
    try {
        await callbacks.home(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Acerca De (es decir, About...)
 */
router.get("/acercade", async (req, res) => {
    try {
        await callbacks.acercaDe(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Nombre (Devuelve todos los nombres de los jugadores)
 */
router.get("/getNombres", async (req, res) => {
    try {
        await callbacks.getNombres(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Nombre (Devuelve todos los jugadores)
 */
router.get("/getTodos", async (req, res) => {
    try {
        await callbacks.getTodos(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.param("idJugador", (req, res, next, id) => {
    next();
});
  

/**
 * Devuelve los datos del jugador con el id indicado
 */
router.get("/getPorId/:idJugador", async (req, res) => {
    try {
        await callbacks.getPorId(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Modifica el nombre del jugador con el id indicado
 */
router.post("/setNombre", async (req, res) => {
    try {
        await callbacks.setNombre(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Crea un nuevo jugador 
 */
router.post("/nuevoJugador", async (req, res) => {
    try {
        await callbacks.nuevoJugador(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Elimina el jugador con el id indicado
 */
router.post("/eliminaJugador", async (req, res) => {
    try {
        await callbacks.eliminaJugador(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Test de conexión a la BBDD
 */
router.get("/test_db", async (req, res) => {
    try {
        await callbacks.test_db(req, res)
    } catch (error) {
        console.log(error);
    }
});


// Exporto el módulo para poder usarlo en server
module.exports = router;
