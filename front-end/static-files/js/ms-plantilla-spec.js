/**
 * @file ms-plantilla-spec.js
 * @description Fichero TDD para probar todo lo relacionado con MS Plantilla en el front-end
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

// SPECS para Jasmine

// Constantes para usar en las pruebas
const elementoTitulo = document.getElementById(Frontend.ID_SECCION_PRINCIPAL_TITULO)
const elementoContenido = document.getElementById(Frontend.ID_SECCION_PRINCIPAL_CONTENIDO)
const TITULO_HOME = "Plantilla Home"
const TITULO_ACERCA_DE = "Plantilla Acerca de"
const TITULO_IMPRIME_NOMBRES_JINETES = "Listados de nombres de todos los jinetes"
const TITULO_IMPRIME_DATOS_JINETES = "Listados de los datos de todos los jinetes"
const TITULO_IMPRIME_DATOS_UN_JINETE = "Mostrar datos de un jinete"
const OBJETO_NULO = ' '
const OBJETO_VACIO_TODOS = ' '
const JINETE_APELLIDOS = "Listado de los jinetes Ordenador por APELLIDOS"
const JINETE_ALTURA = "Listado de los jinetes Ordenador por ALTURA"
const JINETE_CABALLO = "Listado de los jinetes Ordenador por NOMBRE DEL CABALLO"
const JINETE_NACIMIENTO = "Listado de los jinetes Ordenador por AÑO DE NACIMIENTO"
const JINETE_CLUB = "Listado de los jinetes Ordenador por NOMBRE DEL CLUB"
const JINETE_DIRECCION_CLUB = "Listado de los jinetes Ordenador por DIRECCION DEL CLUB"
const JINETE_COMPETICION = "Listado de los jinetes Ordenador por TIPO COMPETICION"
const JINETE_FEDERADO = "Listado de los jinetes Ordenador por AÑOS FEDERADO"
const JINETE_PARTICIPACIONES = "Listado de los jinetes Ordenador por PARTICIPACIONES"
const JINETE_TORNEOS_GANADOS = "Listado de los jinetes Ordenador por TORNEOS GANADOS"



const datosDescargadosPrueba = {
    mensaje: "Mensaje de prueba descargado",
    autor: "Prueba de autor",
    email: "Prueba de email",
    fecha: "00/00/0000"
}



// Función para esperar y dar tiempo a que responda el microservicio
function esperar(ms) {
    var inicio = new Date().getTime();
    var fin = 0;
    while ((fin - inicio) < ms) {
        fin = new Date().getTime();
    }
}



// SPECS a probar

describe("Plantilla.mostrarHome: ", function () {

    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            Plantilla.mostrarHome()
            expect(elementoTitulo.innerHTML).toBe(TITULO_HOME)
            expect(elementoContenido.innerHTML).toBe(Plantilla.datosDescargadosNulos.mensaje)
        })

    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            Plantilla.mostrarHome(23)
            expect(elementoTitulo.innerHTML).toBe(TITULO_HOME)
            expect(elementoContenido.innerHTML).toBe(Plantilla.datosDescargadosNulos.mensaje)
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo mensaje",
        function () {
            // Objeto vacío
            Plantilla.mostrarHome({})
            expect(elementoTitulo.innerHTML).toBe(TITULO_HOME)
            expect(elementoContenido.innerHTML).toBe(Plantilla.datosDescargadosNulos.mensaje)

            // Objeto sin campo mensaje
            Plantilla.mostrarHome({ foo: "bar" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_HOME)
            expect(elementoContenido.innerHTML).toBe(Plantilla.datosDescargadosNulos.mensaje)
        })

    it("muestra correctamente el título y el mensaje",
        function () {
            Plantilla.mostrarHome(datosDescargadosPrueba)
            expect(elementoTitulo.innerHTML).toBe(TITULO_HOME)
            expect(elementoContenido.innerHTML).toBe(datosDescargadosPrueba.mensaje)
        })
})


describe("Plantilla.mostrarAcercaDe: ", function () {
    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            Plantilla.mostrarAcercaDe()
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            Plantilla.mostrarAcercaDe(23)
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo mensaje o autor o email o fecha ",
        function () {
            // Objeto vacío
            Plantilla.mostrarAcercaDe({})
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()

            // Objeto sin campo mensaje
            Plantilla.mostrarAcercaDe({ autor: "un autor", email: "un email", fecha: "una fecha" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
            // Objeto sin campo autor
            Plantilla.mostrarAcercaDe({ mensaje: "un mensaje", email: "un email", fecha: "una fecha" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
            // Objeto sin campo email
            Plantilla.mostrarAcercaDe({ mensaje: "un mensaje", autor: "un autor", fecha: "una fecha" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
            // Objeto sin campo fecha
            Plantilla.mostrarAcercaDe({ mensaje: "un mensaje", autor: "un autor", email: "un email" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })
    it("muestra correctamente el título y el mensaje conteniendo el autor, el email y la fecha",
        function () {
            Plantilla.mostrarAcercaDe(datosDescargadosPrueba)
            expect(elementoTitulo.innerHTML).toBe(TITULO_ACERCA_DE)

            // Comprobamos que al buscar el autor, el email y la fecha de prueba los encuentra dentro del contenido del article
            expect(elementoContenido.innerHTML.search(datosDescargadosPrueba.autor) >= 0).toBeTrue()
            expect(elementoContenido.innerHTML.search(datosDescargadosPrueba.email) >= 0).toBeTrue()
            expect(elementoContenido.innerHTML.search(datosDescargadosPrueba.fecha) >= 0).toBeTrue()
        })
})


/*
IMPORTANTE
==========

Las pruebas TDD que se encargan de probar las conexiones con el microservicio desde el cliente son difíciles de probar 
dado que requieren solucionar temas de sincronización. 
Esto afecta a los métodos:
 - Plantilla.descargarRuta
 - Plantilla.procesarAcercaDe
 - Plantilla.procesarHome

 Las soluciones propuestas en distintos sitios web no han producido el resultado esperado, 
 por tanto: para esta práctica, se pueden dejar SIN HACER.

 */


//TDD PARA HU 2
describe("Plantilla.imprimeNombres: ", function() {
    it("muestra datos nulos cuando le pasamos un valor nulo", function() {
        Plantilla.imprimeNombres([])
        expect(elementoTitulo.innerHTML).toBe(TITULO_IMPRIME_NOMBRES_JINETES)
       expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_NULO)
    })


    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimeNombres(12)
       expect(elementoTitulo.innerHTML).toBe(TITULO_IMPRIME_NOMBRES_JINETES)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_NULO)
        })
})

//TDD PARA HU 4

describe("Plantilla.imprimeMuchosJinetes: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimeMuchosJinetes([])
        expect(elementoTitulo.innerHTML).toBe(TITULO_IMPRIME_DATOS_JINETES)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimeMuchosJinetes(12)
        expect(elementoTitulo.innerHTML).toBe(TITULO_IMPRIME_DATOS_JINETES)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

//TDD PARA HU 6
describe("Plantilla.imprimeUnJinete: " , function() {
    it("Mostrar datos nulos cuando le pasamos un valor nulo", function() {
            let jinete = null;
            Plantilla.imprimeUnJinete(jinete);
            expect(elementoTitulo.innerHTML).toBe(TITULO_IMPRIME_DATOS_UN_JINETE);
        })
})

//TDD PARA HU 5
describe("Plantilla.imprimePorApellido: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorApellido([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_APELLIDOS)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorApellido(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_APELLIDOS)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorAltura: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorAltura([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_ALTURA)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorAltura(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_ALTURA)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorCaballo: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorCaballo([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_CABALLO)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorCaballo(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_CABALLO)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorAño: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorAño([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_NACIMIENTO)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorAño(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_NACIMIENTO)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorClub: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorClub([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_CLUB)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorClub(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_CLUB)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorDireccionClub: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorDireccionClub([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_DIRECCION_CLUB)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorDireccionClub(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_DIRECCION_CLUB)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorCompeticion: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorCompeticion([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_COMPETICION)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorCompeticion(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_COMPETICION)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorFederado: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorFederado([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_FEDERADO)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorFederado(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_FEDERADO)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorParticipaciones: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorParticipaciones([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_PARTICIPACIONES)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorParticipaciones(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_PARTICIPACIONES)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})

describe("Plantilla.imprimePorGanado: ", function() {
    it("Mostrar datos nulos cuando le pasamos vector nulo", function() {
        Plantilla.imprimePorGanado([])
        expect(elementoTitulo.innerHTML).toBe(JINETE_TORNEOS_GANADOS)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto", function() {
        Plantilla.imprimePorGanado(12)
        expect(elementoTitulo.innerHTML).toBe(JINETE_TORNEOS_GANADOS)
        expect(elementoContenido.querySelector('tbody').innerHTML).toBe(OBJETO_VACIO_TODOS)
    })
})


//EXPECTS PARA LAS TABLAS
describe("Plantilla.plantillaTablaJinetes.pie ", function () {
    it("debería devolver las etiquetas HTML para el pie de tabla cuando se le pasa un valor nulo", function() {
        expect(Plantilla.plantillaTablaJinetes.pie).not.toBe(null);
    });
    it("debería devolver las etiquetas HTML para el pie de tabla cuando se le pasa un valor vacío", function() {
        expect(Plantilla.plantillaTablaJinetes.pie).not.toBe("");
    });
    it("debería devolver las etiquetas HTML para el pie de tabla",
        function () {
            expect(Plantilla.plantillaTablaJinetes.pie).toBe("</tbody> </table>");
        });
});

describe("Plantilla.plantillaTablaJinetes.cabecera", function() {
    it('existe la función cabecera', () => {
        expect(Plantilla.plantillaTablaJinetes.cabecera).toBeDefined();
    });
});

describe("Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos", function() {
    it('existe la función cabeceraJinetesTodos', () => {
        expect(Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos).toBeDefined();
    });
});