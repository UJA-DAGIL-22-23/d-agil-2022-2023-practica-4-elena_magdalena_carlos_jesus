"use strict";

//-------------------------------------------------------------------
//---------------HISTORIA  6 ----------------------------------------

let PlantillaTrabajoGeneral = {};

PlantillaTrabajoGeneral.datosDescargadosNulos = {
    mensaje: "Datos Descargados No Validos",
    autor: " ",
    email: " ",
    fecha: " "
}

PlantillaCurling.descargarRuta = async function (callBackFn) {
    let response_Curling = null
    let response_Golf = null
    let response_Hipica = null

    // Intento conectar con el microservicio Plantilla
    try {
        const url_Curling = Frontend.API_GATEWAY + "/plantillaCurling/acercaDe"
        const url_Golf = Frontend.API_GATEWAY + "/golf/acercaDe"
        const url_Hipica = Fontend.API_GATEWAY + "/hipica/acercaDe"

        response_Curling = await fetch(url_Curling)
        response_Golf = await fetch(url_Golf)
        response_Hipica = await fetch (url_Hipica)
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro la info que se han descargado
    let acercaDeCurling = null
    let acercaDeGolf = null
    let acercaDeHipica = null

    if (response_Curling && response_Golf && response_Hipica) {
        acercaDeCurling = await response_Curling.json()
        acercaDeGolf = await response_Golf.json()
        acercaDeHipica = await response_Hipica.json()

        callBackFn(acercaDeCurling, acercaDeGolf, acercaDeHipica)
    }

}

PlantillaTrabajoGeneral.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Curling Home", datosDescargados.mensaje)
}

PlantillaTrabajoGeneral.procesarHome = function () {
    this.descargarRuta("/plantillaTrabajoGeneral/", this.mostrarHome);
}

PlantillaTrabajoGeneral.mostrarAcercaDeGeneral = function (datosCurling, datosGolf, datosHipica){
    datosCurling = datosCurling || this.datosDescargadosNulos
    datosGolf = datosGolf || this.datosDescargadosNulos
    datosHipica = datosHipica || this.datosDescargadosNulos

    let datosDescargados = general.datosDescargadosNulos;
    let aux = true;



    if (typeof datosCurling !== "object") datosCurling = this.datosDescargadosNulos

    if (typeof datosCurling.mensaje === "undefined" ||
        typeof datosCurling.autor === "undefined" ||
        typeof datosCurling.email === "undefined" ||
        typeof datosCurlings.fecha === "undefined"
    ){
        datosCurling = this.datosDescargadosNulos;
        aux = false
    }

    if (typeof datosGolf !== "object") datosGolf = this.datosDescargadosNulos

    if (typeof datosGolf.mensaje === "undefined" ||
        typeof datosGolf.autor === "undefined" ||
        typeof datosGolf.email === "undefined" ||
        typeof datosGolf.fecha === "undefined"
    ){
        datosGolf = this.datosDescargadosNulos;
        aux = false
    }

    if (typeof datosHipica !== "object") datosHipica = this.datosDescargadosNulos

    if (typeof datosHipica.mensaje === "undefined" ||
        typeof datosHipica.autor === "undefined" ||
        typeof datosHipica.email === "undefined" ||
        typeof datosHipica.fecha === "undefined"
    ){
        datosHipica = this.datosDescargadosNulos;
        aux = false
    }

    if (aux){
        datosDescargados.mensaje = "Acerca de general";
        datosDescargados.autor = datosCurling.autor + ", " + datosGolf.autor + ", " + datosHipica.autor;
        datosDescargados.email = datosCurling.email + ", " + datosGolf.email + ", " + datosHipica.email;
        datosDescargados.fecha = datosCurling.fecha + ", " + datosGolf.fecha + ", " + datosHipica.fecha;
    }

    const mensajeAMostrar = `<div>
     <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    Frontend.Article.actualizar("Mostrar Acerca de general", mensajeAMostrar)
}

PlantillaTrabajoGeneral.procesarAcercaDe = function () {
    this.descargarRuta("/plantillaTrabajoGeneral/acercade", this.mostrarAcercaDe);
}