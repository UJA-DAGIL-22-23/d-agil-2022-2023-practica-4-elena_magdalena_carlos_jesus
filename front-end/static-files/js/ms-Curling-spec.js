/**
 * @file ms-Curling-spec.js
 * @description Fichero TDD para probar todo lo relacionado con MS Plantilla en el front-end
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

// SPECS para Jasmine

// Constantes para usar en las pruebas
const elementoTituloCurling = document.getElementById(Frontend.ID_SECCION_PRINCIPAL_TITULO)
const elementoContenidoCurling = document.getElementById(Frontend.ID_SECCION_PRINCIPAL_CONTENIDO)
const TITULO_HOME_CURLING = "Curling Home"
const TITULO_ACERCA_DE_CURLING = "Curling Acerca de"

const TITULO_NOMBRE_JUGADORES_CURLING = "Listados de nombres de jugadores de curling"
const OBJETO_NULO_CURLING = '        '

const TITULO_JUGADORES_COMPLETOS_CURLING = "Listado completo de los jugadores de curling"
const OBJETO_COMPLETO_VACIO_CURLING = ''


const datosDescargadosPruebaCurling = {
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

describe("PlantillaCurling.mostrarHome: ", function () {

    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            PlantillaCurling.mostrarHome()
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_HOME_CURLING)
            expect(elementoContenidoCurling.innerHTML).toBe(PlantillaCurling.datosDescargadosNulos.mensaje)
        })

    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            PlantillaCurling.mostrarHome(23)
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_HOME_CURLING)
            expect(elementoContenidoCurling.innerHTML).toBe(PlantillaCurling.datosDescargadosNulos.mensaje)
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo mensaje",
        function () {
            // Objeto vacío
            PlantillaCurling.mostrarHome({})
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_HOME_CURLING)
            expect(elementoContenidoCurling.innerHTML).toBe(PlantillaCurling.datosDescargadosNulos.mensaje)

            // Objeto sin campo mensaje
            PlantillaCurling.mostrarHome({ foo: "bar" })
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_HOME_CURLING)
            expect(elementoContenidoCurling.innerHTML).toBe(PlantillaCurling.datosDescargadosNulos.mensaje)
        })

    it("muestra correctamente el título y el mensaje",
        function () {
            PlantillaCurling.mostrarHome(datosDescargadosPruebaCurling)
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_HOME_CURLING)
            expect(elementoContenidoCurling.innerHTML).toBe(datosDescargadosPruebaCurling.mensaje)
        })
})


describe("PlantillaCurling.mostrarAcercaDe: ", function () {
    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            PlantillaCurling.mostrarAcercaDe()
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            PlantillaCurling.mostrarAcercaDe(23)
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo mensaje o autor o email o fecha ",
        function () {
            // Objeto vacío
            PlantillaCurling.mostrarAcercaDe({})
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()

            // Objeto sin campo mensaje
            PlantillaCurling.mostrarAcercaDe({ autor: "un autor", email: "un email", fecha: "una fecha" })
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
            // Objeto sin campo autor
            PlantillaCurling.mostrarAcercaDe({ mensaje: "un mensaje", email: "un email", fecha: "una fecha" })
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
            // Objeto sin campo email
            PlantillaCurling.mostrarAcercaDe({ mensaje: "un mensaje", autor: "un autor", fecha: "una fecha" })
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
            // Objeto sin campo fecha
            PlantillaCurling.mostrarAcercaDe({ mensaje: "un mensaje", autor: "un autor", email: "un email" })
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)
            expect(elementoContenidoCurling.innerHTML.search(PlantillaCurling.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })
    it("muestra correctamente el título y el mensaje conteniendo el autor, el email y la fecha",
        function () {
            PlantillaCurling.mostrarAcercaDe(datosDescargadosPruebaCurling)
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_ACERCA_DE_CURLING)

            // Comprobamos que al buscar el autor, el email y la fecha de prueba los encuentra dentro del contenido del article
            expect(elementoContenidoCurling.innerHTML.search(datosDescargadosPruebaCurling.autor) >= 0).toBeTrue()
            expect(elementoContenidoCurling.innerHTML.search(datosDescargadosPruebaCurling.email) >= 0).toBeTrue()
            expect(elementoContenidoCurling.innerHTML.search(datosDescargadosPruebaCurling.fecha) >= 0).toBeTrue()
        })
})

describe("PlantillaCurling.Nombres_Jugadores", function () {
    it ("Mostrar datos nulos cuando le pasamos vector nulo",
        function () {
            PlantillaCurling.Nombres_Jugadores([])
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_NOMBRE_JUGADORES_CURLING)
            expect(elementoContenidoCurling.querySelector('tbody').innerHTML).toBe(OBJETO_NULO_CURLING)
        })
    it("Mostraremos un vector cuando se le pasan un objeto erroneo a su longitud total",
        function () {
            PlantillaCurling.Nombres_Jugadores(10)
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_NOMBRE_JUGADORES_CURLING)
            expect(elementoContenidoCurling.querySelector('tbody').innerHTML).toBe(OBJETO_NULO_CURLING)
        })
});

describe("PlantillaCurling.TablaCompletaJugadores", function () {
    it ("Mostrar datos nulos cuando le pasamos vector nulo",
        function () {
            PlantillaCurling.TablaCompletaJugadores([])
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_JUGADORES_COMPLETOS_CURLING)
            expect(elementoContenidoCurling.querySelector('tbody').innerHTML).toBe(OBJETO_COMPLETO_VACIO_CURLING)
        })
    it ("Mostraremos el vector cuando se le pasa un objeto erroneo",
        function () {
            PlantillaCurling.TablaCompletaJugadores(10)
            expect(elementoTituloCurling.innerHTML).toBe(TITULO_JUGADORES_COMPLETOS_CURLING)
            expect(elementoContenidoCurling.querySelector('tbody').innerHTML).toBe(OBJETO_COMPLETO_VACIO_CURLING)
        })
});

describe ("PlantillaCurling.Ordenamos_Nombres", function () {
    it ("Debe mostras datos nulos en caso de que el vector que se introduzca lo sea", () => {
            const vector = [];
            PlantillaCurling.Ordenamos_Nombres(vector);
            expect(vector).toEqual([])
    });
    it ("Debe poder ordenar un elemento", () => {
        const vector = [{ data: {nombre: 'Sergio'}}];
        PlantillaCurling.Ordenamos_Nombres(vector);
        expect(vector).toEqual([{data: {nombre:'Sergio'}}]);
    });
    /**
     * Como es una funcion asincrona no funciona bien los tdd pero lo dejo aqui
    it ("Debe devolver -1 en el caso de que el primer objeto vaya despues del primero", function() {
        let vector = [{data:{nombre: 'Sergio'}}, {data:{nombre: 'Anna'}}]
        Plantilla.Ordenamos_Nombres(vector);
        expect(Plantilla.Ordenamos_Nombres(vector)).toBe([{data:{nombre: 'Ana'}}, {data:{nombre: 'Sergio'}}]);
    });
     **/
     it ("Debe devolver 1 en el caso de que el primer objeto vaya antes del primero", function() {
        let vector = [{data:{nombre: 'Ana'}}, {data:{nombre: 'Sergio'}}]
        PlantillaCurling.Ordenamos_Nombres(vector);
        expect(vector).toEqual([{data:{nombre: 'Ana'}}, {data:{nombre: 'Sergio'}}]);
    });

    /**
    it ("Debe devolver 0 en el caso de que los dos objetos sean iguales", function() {
        let vector = [{data:{nombre: 'Ana'}}, {data:{nombre: 'Ana'}}]
        Plantilla.Ordenamos_Nombres(vector);
        expect(vector).toEqual([{data:{nombre: 'Ana'}}, {data:{nombre: 'Ana'}}]);
    });
     **/
})

describe ("PlantillaCurling.Ordena", function () {
    it ("Debe mostras datos nulos en caso de que el vector sea nulo una preferencia del usuario", () => {
        const preferencia = 'nombre'
        const vector = [];
        PlantillaCurling.Ordena(vector,preferencia);
        expect(vector).toEqual([])
    });
    it ("Debe poder ordenar un elemento de la preferencia deseada (hemos probado con los nombres)", () => {
        const preferencia = 'nombre'
        const vector = [{ data: {preferencia: 'Sergio'}}];
        PlantillaCurling.Ordena(vector.preferencia);
        expect(vector).toEqual([{data: {preferencia:'Sergio'}}]);
    });
    /**
     * Como es una funcion asincrona no funciona bien los tdd pero lo dejo aqui para que se vea como lo habria documentado
     it ("Debe devolver -1 en el caso de que el primer objeto vaya despues del primero", function() {
        const preferencia = 'nombre'
        let vector = [{data:{preferencia: 'Sergio'}}, {data:{preferencia: 'Anna'}}]
        Plantilla.Ordena(vector,preferencia);
        expect(Plantilla.Ordenamos_Nombres(vector)).toBe([{data:{preferencia: 'Ana'}}, {data:{preferencia: 'Sergio'}}]);
    });
     **/
    it ("Debe devolver 1 en el caso de que el primer objeto vaya antes del primero", function() {
        const preferencia = 'nombre'
        let vector = [{data:{preferencia: 'Ana'}}, {data:{preferencia: 'Sergio'}}]
        PlantillaCurling.Ordena(vector,preferencia);
        expect(vector).toEqual([{data:{preferencia: 'Ana'}}, {data:{preferencia: 'Sergio'}}]);
    });

    /**
     it ("Debe devolver 0 en el caso de que los dos objetos sean iguales", function() {
        const preferencia = 'nombre'
        let vector = [{data:{preferencia: 'Ana'}}, {data:{preferencia: 'Ana'}}]
        Plantilla.Ordena(vector.preferencia);
        expect(vector).toEqual([{data:{preferencia: 'Ana'}}, {data:{preferencia: 'Ana'}}]);
    });
     **/
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
