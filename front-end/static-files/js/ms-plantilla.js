/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Plantilla = {};

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNoNulos = {
    mensaje: "Datos Descargados válidos",
    autor: "Carlos Soto Torres",
    email: "cst@gmail.com",
    fecha: ""
}


/**
 * Función que descarga la info MS Plantilla al llamar a una de sus rutas
 * @param {string} ruta Ruta a descargar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.descargarRuta = async function (ruta, callBackFn) {
    let response = null

    // Intento conectar con el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + ruta
        response = await fetch(url)

    } catch (error) {
        //alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro la info que se han descargado
    let datosDescargados = null
    if (response) {
        datosDescargados = await response.json()
        callBackFn(datosDescargados)
    }
}


/**
 * Función principal para mostrar los datos enviados por la ruta "home" de MS Plantilla
 */
Plantilla.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Home", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS Plantilla
 */
Plantilla.mostrarAcercaDe = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene los campos mensaje, autor, o email
    if (typeof datosDescargados.mensaje === "undefined" ||
        typeof datosDescargados.autor === "undefined" ||
        typeof datosDescargados.email === "undefined" ||
        typeof datosDescargados.fecha === "undefined"
    ) datosDescargados = this.datosDescargadosNulos

    const mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    Frontend.Article.actualizar("Plantilla Acerca de", mensajeAMostrar)
}
/**
 * Función que recuperar todos los proyectos llamando al MS Proyectos
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recupera = async function (callBackFn,nombre) {
    let response = null

    // Intento conectar con el microservicio proyectos
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/listaNombres"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los proyectos que se han descargado
    let vectorProyectos = null
    if (response) {
        vectorProyectos = await response.json()
        callBackFn(vectorProyectos.data,nombre)
    }
}



/**
 * Función principal para mostrar los datos enviados por la ruta "lista nombres" de MS Plantilla
 */
Plantilla.mostrarListaNombres = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Lista Nombres", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "lista nombres alfabeticos" de MS Plantilla
 */
Plantilla.mostrarListaNombresAlfabeticos = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Lista Nombres Alfabeticos", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "lista datos" de MS Plantilla
 */
Plantilla.mostrarListaDatos = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Lista Datos", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "lista datos especificos" de MS Plantilla
 */
Plantilla.mostrarListaDatosEsp = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Lista Datos Específicos", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "lista persona unica" de MS Plantilla
 */
Plantilla.mostrarListaPersonaUnica = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Lista Datos Específicos", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "mostrarmodificar" de MS Plantilla
 */
Plantilla.mostrarModificar = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Modificar", datosDescargados.mensaje)
}

/**
 * Función principal para responder al evento de elegir la opción "Home"
 */
Plantilla.procesarHome = function () {
    this.descargarRuta("/plantilla/", this.mostrarHome);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
Plantilla.procesarAcercaDe = function () {
    this.descargarRuta("/plantilla/acercade", this.mostrarAcercaDe);
}




/// Nombre de los campos del formulario para editar una persona
Plantilla.form = {
    NOMBRE: "form-persona-nombre",
}

/// Objeto para almacenar los datos de la persona que se está mostrando
Plantilla.personaMostrada = null

// Tags que voy a usar para sustituir los campos
Plantilla.plantillaTags = {
    "ID": "### ID ###",
    "NOMBRE": "### NOMBRE ###",
    "DATE": "### DATE ###",
    "DIRECCION": "### DIRECCION ###",
    "AÑO PARTICIPACION": "### AÑO PARTICIPACION ###",
    "NUM PARTICIPACIONES": "### NUM PARTICIPACIONES ###",
    "NUM CATEGORIAS": "### NUM CATEGORIAS ###",
    "NUM PARTICIPANTES": "### NUM PARTICIPANTES ###",
    "NUM PISTAS": "### NUM PISTAS ###",
}
/// Plantilla para poner los datos de varias personas dentro de una tabla
Plantilla.plantillaTablaPersonas = {}


// Cabecera de la tabla
Plantilla.plantillaTablaPersonas.cabecera = `<table width="100%" class="listado-personas">
                    <thead>
                        <th width="10%">Id</th>
                        <th width="20%">Name</th>
                        <th width="20%">Date</th>
                        <th width="10%">Direccion</th>
                        <th width="15%">Año participacion</th>
                        <th width="15%">Num Participaciones</th>
                        <th width="15%">Num Categorias</th>
                        <th width="15%">Num Participantes</th>
                        <th width="15%">Num Pistas</th>
                        <th width="15%">Acciones</th>

                    </thead>
                    <tbody>
    `;

// Elemento TR que muestra los datos de una persona
Plantilla.plantillaTablaPersonas.cuerpo = `
    <tr title="${Plantilla.plantillaTags.ID}">
        <td>${Plantilla.plantillaTags.ID}</td>
        <td>${Plantilla.plantillaTags.NOMBRE}</td>
        <td>${Plantilla.plantillaTags.DATE}</td>
        <td>${Plantilla.plantillaTags.DIRECCION}</td>
        <td>${Plantilla.plantillaTags["AÑO PARTICIPACION"]}</td>
        <td>${Plantilla.plantillaTags["NUM PARTICIPACIONES"]}</td>
        <td>${Plantilla.plantillaTags["NUM CATEGORIAS"]}</td>
        <td>${Plantilla.plantillaTags["NUM PARTICIPANTES"]}</td>
        <td>${Plantilla.plantillaTags["NUM PISTAS"]}</td>
        <td>
                    <div>
                    <a href="javascript:Plantilla.procesarSiguiente('${Plantilla.plantillaTags.ID}')" class="opcion-secundaria mostrar">Mostrar</a>
                    <a href="javascript:Plantilla.procesarModificar('${Plantilla.plantillaTags.ID}')" class="opcion-secundaria mostrar">Modificar</a>
                    <a href="javascript:Plantilla.siguiente('${Plantilla.plantillaTags.ID}')" class="opcion-secundaria mostrar">Siguiente</a>
                    <a href="javascript:Plantilla.anterior('${Plantilla.plantillaTags.ID}')" class="opcion-secundaria mostrar">Anterior</a>
                    </div>
        </td>
    </tr>
    `;

// Pie de la tabla
Plantilla.plantillaTablaPersonas.pie = `        </tbody>
             </table>
             `;

             /**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la persona que se le pasa
 * @param {String} Plantilla Cadena conteniendo HTML en la que se desea cambiar lso campos de la plantilla por datos
 * @param {Persona} Persona Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */           
Plantilla.sustituyeTags = function (plantilla, persona) {
    return plantilla
        .replace(new RegExp(Plantilla.plantillaTags.ID, 'g'), persona.ref['@ref'].id)
        .replace(new RegExp(Plantilla.plantillaTags.NOMBRE, 'g'), persona.data.Nombre)
        .replace(new RegExp(Plantilla.plantillaTags.DATE, 'g'), persona.data.Date.Date+"/"+persona.data.Date.Mes+"/"+persona.data.Date.Año)
        .replace(new RegExp(Plantilla.plantillaTags.DIRECCION, 'g'), persona.data.Direccion.Direccion+","+persona.data.Direccion.Localidad+","+persona.data.Direccion.Provincia+","+persona.data.Direccion.Pais)
        .replace(new RegExp(Plantilla.plantillaTags["AÑO PARTICIPACION"], 'g'), persona.data.anio_participacion)
        .replace(new RegExp(Plantilla.plantillaTags["NUM PARTICIPACIONES"], 'g'), persona.data.num_participaciones)
        .replace(new RegExp(Plantilla.plantillaTags["NUM CATEGORIAS"], 'g'), persona.data.num_categorias)
        .replace(new RegExp(Plantilla.plantillaTags["NUM PARTICIPANTES"], 'g'), persona.data.num_participantes)
        .replace(new RegExp(Plantilla.plantillaTags["NUM PISTAS"], 'g'), persona.data.num_pistas)
}

/**
 * Actualiza el cuerpo de la tabla con los datos de la persona que se le pasa
 * @param {Persona} Persona Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */
Plantilla.plantillaTablaPersonas.actualiza = function (persona) {
    return Plantilla.sustituyeTags(this.cuerpo, persona)
}











// Tags que voy a usar para sustituir los campos
Plantilla.plantillaTagsNombre = {
    "ID": "### ID ###",
    "NOMBRE": "### NOMBRE ###",
}
/// Plantilla para poner los datos de varias personas dentro de una tabla
Plantilla.plantillaTablaPersonasNombre = {}


// Cabecera de la tabla
Plantilla.plantillaTablaPersonasNombre.cabecera = `<table width="100%" class="listado-personas">
                    <thead>
                        <th width="10%">Id</th>
                        <th width="20%">Name</th>
                        <th width="15%">Acciones</th>

                    </thead>
                    <tbody>
    `;

// Elemento TR que muestra los datos de una persona
Plantilla.plantillaTablaPersonasNombre.cuerpo = `
    <tr title="${Plantilla.plantillaTagsNombre.ID}">
        <td>${Plantilla.plantillaTagsNombre.ID}</td>
        <td>${Plantilla.plantillaTagsNombre.NOMBRE}</td>
        <td>
                    <div>
                    <a href="javascript:Plantilla.procesarSiguiente('${Plantilla.plantillaTagsNombre.ID}')" class="opcion-secundaria mostrar">Mostrar</a>
                    </div>
        </td>
    </tr>
    `;

// Pie de la tabla
Plantilla.plantillaTablaPersonasNombre.pie = `        </tbody>
             </table>
             `;

             /**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la persona que se le pasa
 * @param {String} Plantilla Cadena conteniendo HTML en la que se desea cambiar lso campos de la plantilla por datos
 * @param {Persona} Persona Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */           
Plantilla.sustituyeTagsNombre = function (plantilla, persona) {
    return plantilla
        .replace(new RegExp(Plantilla.plantillaTagsNombre.ID, 'g'), persona.ref['@ref'].id)
        .replace(new RegExp(Plantilla.plantillaTagsNombre.NOMBRE, 'g'), persona.data.Nombre)
}

/**
 * Actualiza el cuerpo de la tabla con los datos de la persona que se le pasa
 * @param {Persona} Persona Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */
Plantilla.plantillaTablaPersonasNombre.actualizaNombre = function (persona) {
    return Plantilla.sustituyeTagsNombre(this.cuerpo, persona)
}

Plantilla.imprimeTodosOrdenados = function(vector){

    function compararPorNombre(a, b) {
        if (a.data.Nombre.toUpperCase() < b.data.Nombre.toUpperCase()) {
          return -1;
        }
        if (a.data.Nombre.toUpperCase() > b.data.Nombre.toUpperCase()) {
          return 1;
        }
        return 0;
      }
        vector.sort(compararPorNombre);
      
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => msj += Plantilla.plantillaTablaPersonas.actualiza(e))
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeTodos = function(vector){
      
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => msj += Plantilla.plantillaTablaPersonas.actualiza(e))
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeSoloNombre = function(vector,nombre){
      
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => {
        if(e.data.Nombre.toUpperCase().includes(nombre.toUpperCase())){
            msj += Plantilla.plantillaTablaPersonas.actualiza(e)
        }
    })
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeSoloParticipaciones = function(vector,nombre){
      
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => {
        if(e.data.num_participaciones<=nombre){
            msj += Plantilla.plantillaTablaPersonas.actualiza(e)
        }
    })
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeSoloFecha = function(vector,nombre){
    
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => {
        var fecha = new Date(e.data.Date.Año, e.data.Date.Mes-1,e.data.Date.Date);
        if(fecha < nombre){
            msj += Plantilla.plantillaTablaPersonas.actualiza(e);
        }
    });
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeSoloDireccion = function(vector,nombre){
      
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => {
        if(e.data.Direccion.Provincia.toUpperCase()==(nombre.toUpperCase())){
            msj += Plantilla.plantillaTablaPersonas.actualiza(e)
        }
    })
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}
Plantilla.imprimeSoloDireccionPais = function(vector,nombre){
      
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    vector.forEach(e => {
        if(e.data.Direccion.Pais.toUpperCase()==(nombre.toUpperCase())){
            msj += Plantilla.plantillaTablaPersonas.actualiza(e)
        }
    })
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprime = function(persona){
    let msj = Plantilla.plantillaTablaPersonas.cabecera
    msj += Plantilla.plantillaTablaPersonas.actualiza(persona);
    msj += Plantilla.plantillaTablaPersonas.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeNombre = function(vector){ 
    let msj = Plantilla.plantillaTablaPersonasNombre.cabecera
    vector.forEach(e => msj += Plantilla.plantillaTablaPersonasNombre.actualizaNombre(e))
    msj += Plantilla.plantillaTablaPersonasNombre.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}

Plantilla.imprimeNombreOrdenados = function(vector){ 
      
    function compararPorNombre(a, b) {
        if (a.data.Nombre.toUpperCase() < b.data.Nombre.toUpperCase()) {
          return -1;
        }
        if (a.data.Nombre.toUpperCase() > b.data.Nombre.toUpperCase()) {
          return 1;
        }
        return 0;
      }
        vector.sort(compararPorNombre);
             

    let msj = Plantilla.plantillaTablaPersonasNombre.cabecera
    vector.forEach(e => msj += Plantilla.plantillaTablaPersonasNombre.actualizaNombre(e))
    msj += Plantilla.plantillaTablaPersonasNombre.pie
    Frontend.Article.actualizar("Plantilla ListaNombres", msj)
}



/**
 * Función que recuperar todas las personas llamando al MS Personas
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */

Plantilla.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar con el microservicio personas
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/listaNombres"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todas las personas que se han descargado
    let vectorPersonas = null
    if (response) {
        vectorPersonas = await response.json()
        callBackFn(vectorPersonas.data)
    }
}
/**
 * Función que recuperar todas las personas llamando al MS Personas. 
 * Posteriormente, llama a la función callBackFn para trabajar con los datos recuperados.
 * @param {String} idPersona Identificador de la persona a mostrar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recuperaUnaPersona = async function (idPersona, callBackFn) {
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getPorId/" + idPersona
        const response = await fetch(url);
        if (response) {
            const persona = await response.json()
            callBackFn(persona)
        }
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
    }
}

/**
 * Función que recuperar todas las personas llamando al MS Personas. 
 * Posteriormente, llama a la función callBackFn para trabajar con los datos recuperados.
 * @param {String} idPersona Identificador de la persona a mostrar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recuperaUnaPersonaNombre = async function (nombre, callBackFn) {
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getPorNombre/" + nombre
        const response = await fetch(url);
        if (response) {
            const persona = await response.json()
            callBackFn(persona)
        }
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
    }
}



/**
 * Función principal para responder al evento de elegir la opción "siguiente"
 */
Plantilla.siguiente = async function (idPersona) {
    let response = null

    // Intento conectar con el microservicio personas
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/listaNombres"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todas las personas que se han descargado
    let vectorPersonas = null
    let siguiente= false
    if (response) {
        vectorPersonas = await response.json()
        vectorPersonas.data.forEach(e => {
            if(siguiente==true){
               this.recuperaUnaPersona(e.ref['@ref'].id,this.imprime)
               siguiente =false
            }
            if(e.ref['@ref'].id == idPersona){
                siguiente=true   
            }
        });
    }
}
/**
 * Función principal para responder al evento de elegir la opción "anterior"
 */
Plantilla.anterior = async function (idPersona) {
    let response = null

    // Intento conectar con el microservicio personas
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/listaNombres"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todas las personas que se han descargado
    let vectorPersonas = null
    let anterior= false
    let personaAnterior = null
    if (response) {
        vectorPersonas = await response.json()
        vectorPersonas.data.forEach(e => {
            if(e.ref['@ref'].id != idPersona){
                personaAnterior=e
            }else{
                this.recuperaUnaPersona(personaAnterior.ref['@ref'].id,this.imprime)
            }
        });
    }
}

/**
 * Función principal para responder al evento de elegir la opción "Lista Nombres"
 */
Plantilla.procesarListaNombres = function () {
    this.recupera(this.imprimeNombre)
}

/**
 * Función principal para responder al evento de elegir la opción "Lista Nombres Alfabeticos"
 */
Plantilla.procesarListaNombresAlfabeticos = function () {
    this.recupera(this.imprimeNombreOrdenados)
}

/**
 * Función principal para responder al evento de elegir la opción "Lista Datos"
 */
Plantilla.procesarListaDatos = function () {
    this.recupera(this.imprimeTodos)
}

/**
 * Función principal para responder al evento de elegir la opción "Lista Datos ordenados"
 */
Plantilla.procesarListaDatosOrdenados = function () {
    this.recupera(this.imprimeTodosOrdenados)
}

/**
 * Función principal para responder al evento de elegir la opción "siguiente "
 */
Plantilla.procesarSiguiente = function (idPersona) {
    this.recuperaUnaPersona(idPersona,this.imprime);
}

/**
 * Función principal para responder al evento de elegir la opción "procesar nombre"
 */
Plantilla.procesarNombre = function (nombre) {
    this.recupera(function(vector) {
      Plantilla.imprimeSoloNombre(vector, nombre);
    });
  };

  /**
 * Función principal para responder al evento de elegir la opción "procesar fecha"
 */
Plantilla.procesarFecha = function (nombre) {
    var fecha = new Date(Date.parse(nombre));
    this.recupera(function(vector) {
      Plantilla.imprimeSoloFecha(vector, fecha);
    });
  };

  /**
 * Función principal para responder al evento de elegir la opción "procesar participaciones"
 */
Plantilla.procesarParticipaciones = function (nombre) {
    this.recupera(function(vector) {
      Plantilla.imprimeSoloParticipaciones(vector, nombre);
    });
  };

  /**
 * Función principal para responder al evento de elegir la opción "procesar direccion"
 */
Plantilla.procesarDireccion = function (nombre) {
    this.recupera(function(vector) {
      Plantilla.imprimeSoloDireccion(vector, nombre);
    });
  };

    /**
 * Función principal para responder al evento de elegir la opción "procesar pais"
 */
Plantilla.procesarDireccionPais = function (nombre) {
    this.recupera(function(vector) {
      Plantilla.imprimeSoloDireccionPais(vector, nombre);
    });
  };
/**
 * Oculta todas las opciones secundarias
 * @returns El propio objeto para encadenar llamadas
 */
Plantilla.ocultarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", false)
    return this
}
/**
 * ????Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Personas, para concatenar llamadas
 */
Plantilla.opcionesprocesarModificar = function (classname, mostrando) {
    let opciones = document.getElementsByClassName(classname)
    let claseQuitar = mostrando ? Frontend.CLASS_OCULTAR : Frontend.CLASS_MOSTRAR
    let claseAniadir = !mostrando ? Frontend.CLASS_OCULTAR : Frontend.CLASS_MOSTRAR

    for (let i = 0; i < opciones.length; ++i) {
        Frontend.quitarClase(opciones[i], claseQuitar)
            .aniadirClase(opciones[i], claseAniadir)
    }
    return this
}

/**
 * Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Personas, para concatenar llamadas
 */
Plantilla.mostrarOcionesTerciariasEditar = function () {
    this.opcionesMostrarOcultar("opcion-terciaria editar", true)
    return this
}

/**
 * Establece disable = habilitando en los campos editables
 * @param {boolean} Deshabilitando Indica si queremos deshabilitar o habilitar los campos
 * @returns El propio objeto Personas, para concatenar llamadas
 */
Plantilla.habilitarDeshabilitarCamposEditables = function (deshabilitando) {
    deshabilitando = (typeof deshabilitando === "undefined" || deshabilitando === null) ? true : deshabilitando
    for (let campo in Plantilla.form) {
        document.getElementById(Plantilla.form[campo]).disabled = deshabilitando
    }
    return this
}
/**
 * Establece disable = false en los campos editables
 * @returns El propio objeto Personas, para concatenar llamadas
 */
Plantilla.habilitarCamposEditables = function () {
    Plantilla.habilitarDeshabilitarCamposEditables(false)
    return this
}


/**
 * Función principal para responder al evento de elegir la opción "Modificar"
 */

Plantilla.procesarModificar = function (classname,mostrando) {
    let opciones = document.getElementsByClassName(classname)
    let claseQuitar = mostrando ? Frontend.CLASS_OCULTAR : Frontend.CLASS_MOSTRAR
    let claseAniadir = !mostrando ? Frontend.CLASS_OCULTAR : Frontend.CLASS_MOSTRAR

    for (let i = 0; i < opciones.length; ++i) {
        Frontend.quitarClase(opciones[i], claseQuitar)
            .aniadirClase(opciones[i], claseAniadir)
    }
    return this
}

/**
 * Oculta todas las opciones secundarias
 * @returns El propio objeto para encadenar llamadas
 */
Plantilla.ocultarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", false)
    return this
}

Plantilla.mostrarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", true)
    return this
}

/**
 * Oculta las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Personas, para concatenar llamadas
 */
Plantilla.ocultarOcionesTerciariasEditar = function () {
    this.opcionesMostrarOcultar("opcion-terciaria editar", false)
    return this
}
/**
 * Función que permite modificar los datos de una persona
 */
Plantilla.procesarModificar = function () {
    this.ocultarOpcionesSecundarias()
    this.mostrarOcionesTerciariasModificar()
    this.habilitarCamposEditables()    
    
}

    // this.ocultarOpcionesSecundarias()
    // this.mostrarOcionesTerciariasEditar()
    
    // this.habilitarCamposEditables()
    /*
    
    */

