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
 * Ruta Lista Nombres
 */
router.get("/listanombres", async (req, res) => {
    try {
        await callbacks.listaNombres(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Devuelve los datos de la persona con el id pasado
 */
router.get("/getPorId/:idPersona", async (req, res) => {
    try {
        await callbacks.getPorId(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Devuelve los datos de la persona con el id pasado
 */
router.get("/getPorNombre/:Nombre", async (req, res) => {
    try {
        await callbacks.getPorNombre(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Modifica el email de la persona con el id pasado
 */
router.post("/setNombre", async (req, res) => {
    try {
        await callbacks.setNombre(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Lista Nombres Alfabeticos
 */
router.get("/listanombresalfabeticos", async (req, res) => {
    try {
        await callbacks.listaNombresAlfabeticos(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Lista Datos
 */
router.get("/listadatos", async (req, res) => {
    try {
        await callbacks.listaDatos(req, res)
    } catch (error) {
        console.log(error);
    }
});


/**
 * Ruta Lista Datos Ordenados Por nombre
 */
router.get("/listadatosordenados", async (req, res) => {
    try {
        await callbacks.listaDatosOrdenados(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Lista Por nombre
 */
router.get("/listapornombre", async (req, res) => {
    try {
        await callbacks.listaPorNombre(req, res)
    } catch (error) {
        console.log(error);
    }
});


/**
 * Ruta Lista persoan unica
 */
router.get("/listapersonaunica", async (req, res) => {
    try {
        await callbacks.listaPersonaUnica(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Modificar
 */
router.get("/modificar", async (req, res) => {
    try {
        await callbacks.modificar(req, res)
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
