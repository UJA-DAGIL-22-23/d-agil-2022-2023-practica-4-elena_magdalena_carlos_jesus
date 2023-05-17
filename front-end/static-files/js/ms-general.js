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
    this.descargarRuta("/general/", this.mostrarHome);
}

PlantillaTrabajoGeneral.mostrarAcercaDeGeneral = function (datosDescargados){
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    if (typeof datosDescargados.mensaje === "undefined" ||
        typeof datosDescargados.autor === "undefined" ||
        typeof datosDescargados.email === "undefined" ||
        typeof datosDescargados.fecha === "undefined"
    )datosDescargados = this.datosDescargadosNulos

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

PlantillaTrabajoGeneral.procesarHome = function () {
    this.descargarRuta("/plantillaCurling/", this.mostrarHome);
}