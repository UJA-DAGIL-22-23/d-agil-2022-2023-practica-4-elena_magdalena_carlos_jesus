/**
 * @file proxy-routes.js
 * @description Objeto que almacena las rutas que deben ser consideradas por el proxy.
 * Cualquier URL que empiece por /personas es derivada al ms de personas; igual para /proyectos, etc.
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const ROUTES = [
    {
        url: '/golf',
        proxy: {
            target: "http://localhost:8007",
            changeOrigin: true,
            pathRewrite: {
                [`^/golf`]: '',
            },
        }
    },
    {
        url: '/hipica',
        proxy: {
            target: "http://localhost:8004",
            changeOrigin: true,
            pathRewrite: {
                [`^/hipica`]: '',
            },
        }
    },
    {
        url: '/patinaje',
        proxy: {
            target: "http://localhost:8001",
            changeOrigin: true,
            pathRewrite: {
                [`^/patinaje`]: '',
            },
        }
    },
    {
        url: '/plantillaCurling',
        proxy: {
            target: "http://localhost:8003",
            changeOrigin: true,
            pathRewrite: {
                [`^/plantillaCurling`]: '',
            },
        }
    },
];

exports.routes = ROUTES;