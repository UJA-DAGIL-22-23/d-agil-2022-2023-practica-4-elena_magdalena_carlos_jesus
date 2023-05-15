/**
 * @file proxy-routes.js
 * @description Objeto que almacena las rutas que deben ser consideradas por el proxy.
 * Cualquier URL que empiece por /personas es derivada al ms de personas; igual para /proyectos, etc.
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const ROUTES = [
    {
<<<<<<< HEAD
        url: '/patinaje',
=======
        url: '/golf',
>>>>>>> e60caf1585687bb2dfc40396eabf8786d4afdfb0
        proxy: {
            target: "http://localhost:8002",
            changeOrigin: true,
            pathRewrite: {
<<<<<<< HEAD
                [`^/patinaje`]: '',
            },
        }
    },
    {
        url: '/golf',
=======
                [`^/golf`]: '',
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

    {
        url: '/hipica',
>>>>>>> e60caf1585687bb2dfc40396eabf8786d4afdfb0
        proxy: {
            target: "http://localhost:8004",
            changeOrigin: true,
            pathRewrite: {
<<<<<<< HEAD
                [`^/golf`]: '',
=======
                [`^/hipica`]: '',
>>>>>>> e60caf1585687bb2dfc40396eabf8786d4afdfb0
            },
        }
    }
]

exports.routes = ROUTES;