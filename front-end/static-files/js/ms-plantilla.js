/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Plantilla = {};

Plantilla.jieneteSeleccionado = null

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

Plantilla.plantillaTags = {
    "ID": "### ID ###",
    "NOMBRE_JINETE": "### NOMBRE_JINETE ###",
    "NOMBRE": "### NOMBRE ###",
    "APELLIDOS": "### APELLIDOS ###",
    "ALTURA_JINETE": "### ALTURA_JINETE ###",
    "DATOS_CABALLO": "### DATOS_CABALLO ###",
    "NOMBRE_CABALLO": "### NOMBRE_CABALLO ###",
    "EDAD": "### EDAD ###",
    "SEXO": "### SEXO ###",
    "FECHA_NACIMIENTO": "### FECHA_NACIMIENTO ###",
    "DIA": "### DIA ###",
    "MES": "### MES ###",
    "AÑO": "### AÑO ###",
    "NOMBRE_CLUB_ACTUAL": "### NOMBRE_CLUB_ACTUAL ###",
    "DIRECCION_CLUB": "### DIRECCION_CLUB ###",
    "CALLE": "### CALLE ###",
    "NUMERO": "### NUMERO ###",
    "LOCALIDAD": "### LOCALIDAD ###",
    "PROVINCIA": "### PROVINCIA ###",
    "PAIS": "### PAIS ###",
    "TIPO_COMPETICION": "### TIPO_COMPETICION ###",
    "AÑOS_FEDERADO": "### AÑOS_FEDERADO ###",
    "NUMERO_PARTICIPACIONES": "### NUMERO_PARTICIPACIONES ###",
    "NUMERO_TORNEOS_GANADOS": "### NUMERO_TORNEOS_GANADOS ###"
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
        alert("Error: No se han podido acceder al API Gateway")
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

/***************************************************************************************************/

Plantilla.jineteComoTabla = function (jinete) {
    return Plantilla.plantillaTablaJinetes.cabecera
        + Plantilla.plantillaTablaJinetes.actualiza(jinete)
        + Plantilla.plantillaTablaJinetes.pie;
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Imprime los datos de una jinete como una tabla dentro de un formulario usando la plantilla del formulario.
 * @param {jinete} jinete Objeto con los datos de la jinete
 * @returns Una cadena con la tabla que tiene ya los datos actualizados
 */
Plantilla.jineteComoFormulario = function (jinete) {
    return Plantilla.plantillaFormularioJinete.actualiza( jinete );
}

/***************************************************************************************************/


Plantilla.plantillaFormularioJinete = {}

Plantilla.plantillaFormularioJinete.formulario = `
<form method='post' action=''>
<table width="100%" class="listado_jinetes">
    <thead>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Altura</th>      
        <th>Datos del caballo</th>
        <th>Fecha de nacimiento</th>
        <th>Nombre del club</th>
        <th>Dirección</th>
        <th>Tipo de competicion</th>
        <th>Anios federado</th>
        <th>Número de participaciones</th> 
        <th>Número de torneos ganados</th> 

    </thead>
    <tbody>
        <tr title="${Plantilla.plantillaTags.ID}">
            <td><input type="text" class="form-persona-elemento disabled" disabled id="form-persona-id" required value="${Plantilla.plantillaTags.ID}" name="id_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable"  id="form-persona-nombre"  value="${Plantilla.plantillaTags.NOMBRE}" name="nombre_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable"  id="form-persona-apellidos"  value="${Plantilla.plantillaTags.APELLIDOS}" name="apellidos_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable"  id="form-persona-altura_jinete"  value="${Plantilla.plantillaTags.ALTURA_JINETE}" name="altura_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-datos_caballo" required value="${Plantilla.plantillaTags.DATOS_CABALLO}" name="datos_caballo"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-fecha_nacimiento" required value="${Plantilla.plantillaTags.FECHA_NACIMIENTO}" name="fecha_nacimiento"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-nombre_club_actual" required value="${Plantilla.plantillaTags.NOMBRE_CLUB_ACTUAL}" name="nombre_club_actual"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-direccion_club" required value="${Plantilla.plantillaTags.DIRECCION_CLUB}" name="direccion_club"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-tipo_competicion" required value="${Plantilla.plantillaTags.TIPO_COMPETICION}" name="tipo_competicion"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-años_federado" required value="${Plantilla.plantillaTags.AÑOS_FEDERADO}" name="años_federado"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-numero_participaciones" required value="${Plantilla.plantillaTags.NUMERO_PARTICIPACIONES}" name="numero_participaciones"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-numero_torneos_ganados" required value="${Plantilla.plantillaTags.NUMERO_TORNEOS_GANADOS}" name="numero_torneos_ganados"/></td>
        </tr>
    </tbody>
</table>
</form>`;

/***************************************************************************************************/

// Plantilla para poner los datos de varios jinetes dentro de una tabla
Plantilla.plantillaTablaJinetes = {}

/**
 *  CABECERA DE LA TABLA DE LOS NOMBRES DE JINETES
 * Muestra los nombres de los campos sobre la información que vamos a representar de los jinetes
 * @type {string}
 */
Plantilla.plantillaTablaJinetes.cabecera = `<table width="100%" class="listado_jinetes">
    <thead>
        <th width="5%">ID</th>
        <th width="15%">Nombre</th>
        <th width="10%">Apellidos</th>  
        <th width="5%">Acción</th>     

    </thead>
    <tbody> `;


/**
 * CABECERA DE LA TABLA DATOS DE JINETES
 * Muestra los nombres de los campos sobre la información que vamos a representar de los jinetes
 * @type {string}
 */
Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos = `<table width="100%" class="listado_jinetes">
    <thead>
        <th width="5%">ID</th>
        <th width="15%">Nombre</th>
        <th width="10%">Apellidos</th>
        <th width="10%">Altura</th>      
        <th width="25%">Datos del caballo</th>
        <th width="25%">Fecha de nacimiento</th>
        <th width="15%">Nombre del club</th>
        <th width="10%">Dirección</th>
        <th width="10%">Tipo de competicion</th>
        <th width="5%">Anios federado</th>
        <th width="5%">Número de participaciones</th> 
        <th width="5%">Número de torneos ganados</th> 
        <th width="5%">Acción</th>   

    </thead>
    <tbody> `;

/**
 * * CUERPO DE LA TABLA DEL NOMBRE DE LOS JINETES
 * Muestra la información de cada plantilla en un elemento TR con sus correspondientes TD
 * @param {plantilla} p Datos del plantilla a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el plantilla.
 */
Plantilla.plantillaTablaJinetes.cuerpo =
    `<tr title="${Plantilla.plantillaTags.ID}">
    <td>${Plantilla.plantillaTags.ID}</td>
    <td>${Plantilla.plantillaTags.NOMBRE}</td>
    <td>${Plantilla.plantillaTags.APELLIDOS}</td>
    
    <td>
        <div><a href="javascript:Plantilla.mostrar('${Plantilla.plantillaTags.ID}')" className="opcion-secundaria mostrar">Mostrar</a></div>    
    </td>
    
</tr> `;

/**
 * CUERPO DE LA TABLA DE TODOS LOS JINETES
 * Muestra la información de cada plantilla en un elemento TR con sus correspondientes TD
 * @param {plantilla} p Datos del plantilla a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el plantilla.
 */
Plantilla.plantillaTablaJinetes.cuerpoJinetesTodos=
    `<tr title="${Plantilla.plantillaTags.ID}">
    <td>${Plantilla.plantillaTags.ID}</td>
    <td>${Plantilla.plantillaTags.NOMBRE}</td>
    <td>${Plantilla.plantillaTags.APELLIDOS}</td>
    <td>${Plantilla.plantillaTags.ALTURA_JINETE}</td>
    <td>${Plantilla.plantillaTags.DATOS_CABALLO}</td>     
    <td>${Plantilla.plantillaTags.FECHA_NACIMIENTO}</td>   
    <td>${Plantilla.plantillaTags.NOMBRE_CLUB_ACTUAL}</td>   
    <td>${Plantilla.plantillaTags.DIRECCION_CLUB }</td>   
    <td>${Plantilla.plantillaTags.TIPO_COMPETICION }</td>   
    <td>${Plantilla.plantillaTags.AÑOS_FEDERADO}"</td>
    <td>${Plantilla.plantillaTags["NUMERO_PARTICIPACIONES"]}</td>
    <td>${Plantilla.plantillaTags["NUMERO_TORNEOS_GANADOS"]}</td>
    
    <td>
        <div><a href="javascript:Plantilla.mostrar('${Plantilla.plantillaTags.ID}')" className="opcion-secundaria mostrar">Mostrar</a></div>    
    </td>
    
</tr> `;


/**
 * PIE DE LAS TABLAS
 * @returns {string}
 */Plantilla.plantillaTablaJinetes.pie = `</tbody> </table>`;

/***************************************************************************************************/

/**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la Jinete que se le pasa
 * @param {String} plantilla Cadena conteniendo HTMLen la que se desea cambiar los campos de la plantilla por datos
 * @param {jinete} jinete Objeto con los datos del jinete que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados
 */
Plantilla.sustituyeTags = function (plantilla, jinetes) {
    return plantilla
        .replace(new RegExp(Plantilla.plantillaTags.ID, 'g'), jinetes.ref['@ref'].id)
        .replace(new RegExp(Plantilla.plantillaTags.NOMBRE  , 'g'), jinetes.data.nombre_jinete.nombre )
        .replace(new RegExp(Plantilla.plantillaTags.APELLIDOS  , 'g'), jinetes.data.nombre_jinete.apellidos )
        .replace(new RegExp(Plantilla.plantillaTags.ALTURA_JINETE  , 'g'), jinetes.data.altura_jinete + " cm" )
        .replace(new RegExp(Plantilla.plantillaTags.DATOS_CABALLO  , 'g'), jinetes.data.datos_caballo.nombre_caballo + " Edad: " + jinetes.data.datos_caballo.edad  + " Sexo: "+ jinetes.data.datos_caballo.sexo )
        .replace(new RegExp(Plantilla.plantillaTags.FECHA_NACIMIENTO  , 'g'), jinetes.data.fecha_nacimiento.dia + "/" + jinetes.data.fecha_nacimiento.mes + "/" + jinetes.data.fecha_nacimiento.año)
        .replace(new RegExp(Plantilla.plantillaTags.NOMBRE_CLUB_ACTUAL  , 'g'), jinetes.data.nombre_club_actual )
        .replace(new RegExp(Plantilla.plantillaTags.DIRECCION_CLUB , 'g'), jinetes.data.direccion_club.calle + ", " + jinetes.data.direccion_club.numero + ", " + jinetes.data.direccion_club.localidad + ", " + jinetes.data.direccion_club.provincia + ", " + jinetes.data.direccion_club.pais)
        .replace(new RegExp(Plantilla.plantillaTags.TIPO_COMPETICION , 'g'), jinetes.data.tipo_competicion)
        .replace(new RegExp(Plantilla.plantillaTags.AÑOS_FEDERADO, 'g'), jinetes.data.años_federado)
        .replace(new RegExp(Plantilla.plantillaTags.NUMERO_PARTICIPACIONES, 'g'), jinetes.data.numero_particiapciones_torneo)
        .replace(new RegExp(Plantilla.plantillaTags.NUMERO_TORNEOS_GANADOS, 'g'), jinetes.data.numero_torneos_ganados)


}

/***************************************************************************************************/

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Actualiza el cuerpo de la tabla con los daos de la Jinete que se le pasa
 * @param {jinete} jinete Objeto con los datos de la Jinete que queremos escribir el TR
 * @returns La plantilla des cuerpo de la tabla con los datos actualizados
 */
Plantilla.plantillaTablaJinetes.actualizaNombres = function (jinetes) {
    return Plantilla.sustituyeTags(this.cuerpo, jinetes)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Actualiza el cuerpo de la tabla con los daos de la Jinete que se le pasa
 * @param {jinete} jinete Objeto con los datos de la Jinete que queremos escribir el TR
 * @returns La plantilla des cuerpo de la tabla con los datos actualizados
 */
Plantilla.plantillaTablaJinetes.actualiza = function (jinete) {
    return Plantilla.sustituyeTags(this.cuerpoJinetesTodos, jinete)
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Actualiza el formulario con los datos de la Jinete que se le pasa
 * @param {Jinete} Jinete Objeto con los datos de la Jinete que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados
 */
Plantilla.plantillaFormularioJinete.actualiza = function (jinete) {
    return Plantilla.sustituyeTags(this.formulario, jinete);
}


/***************************************************************************************************/


/**
 * Función que recupera todos los jinetes llamando al MS Plantilla
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    //mostrar todos los jinetes que se han descargado
    let vectorJinetes = null
    if (response) {
        vectorJinetes = await response.json()
        callBackFn(vectorJinetes.data)
    }
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función que recuperar todas las jinetes llamando al MS jinetes.
 * Posteriormente, llama a la función callBackFn para trabajar con los datos recuperados.
 * @param {String} idJinete Identificador de la jinete a mostrar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recuperaUnJinete = async function (idJinete, callBackFn) {
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getPorId/" + idJinete
        const response = await fetch(url);
        if (response) {
            const jinete = await response.json()
            callBackFn(jinete)
        }
    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 3
 * Función que recupera todos los jinetes llamando al MS Plantilla
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recuperaAlfabeticamente = async function (callBackFn) {
    let response = null
    // Intento conectar el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    //mostrar todos los jinetes que se han descargado
    let vectorJinetes = null
    if (response){

        vectorJinetes = await response.json()

        vectorJinetes.data.sort((a,b)=>{
            //Si el elemento A va después alfabeticamente que B, devolverá -1
            if (a.data.nombre_jinete.nombre < b.data.nombre_jinete.nombre){return -1;} // A va después alfabeticamente que B
            if (a.data.nombre_jinete.nombre > b.data.nombre_jinete.nombre){return  1;} // B va después alfabeticamente que A
            return 0;   //Ambos datos son "iguales" en orden alfabético
        });

        callBackFn(vectorJinetes.data)
    }
}


/***************************************************************************************************/
/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Función para mostrar en jinete todos los nombres de los jinetes
 * que se han recuperado de la BBDD
 * @param {vector_de_jinetes} vector
 */
Plantilla.imprimeNombres = function (vector) {
    //console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Plantilla.plantillaTablaJinetes.cabecera
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualizaNombres(e))
    }
    msj += Plantilla.plantillaTablaJinetes.pie

    // Borrar toda la información de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listados de nombres de todos los jinetes" , msj)
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función para mostrar en pantalla todos los Jinetes que se han recuperado de la BBDD.
 * @param {Vector_de_jinetes} vector Vector con los datos de los jinetes a mostrar
 */
Plantilla.imprimeMuchosJinetes = function (vector) {
    //console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));
    }
    msj += Plantilla.plantillaTablaJinetes.pie

    // Borrar toda la información de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listados de los datos de todos los jinetes" , msj)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función para mostrar en pantalla los detalles de una jinete que se ha recuperado de la BBDD por su id
 * @param {jinete} jinete Datos de la jinete a mostrar
 */
Plantilla.imprimeUnJinete = function (jinete) {
    if (!jinete || typeof jinete !== "object") {
        elementoTitulo.innerHTML = "Mostrar datos de un jinete";
    } else{
        let msj = Plantilla.jineteComoFormulario(jinete);
        Frontend.Article.actualizarBoton("Mostrar datos de un jinete", msj)
        Plantilla.almacenaDatos(jinete)
    }
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Almacena los datos de la jinete que se está mostrando
 * @param {jinete} jinete Datos de la jinete a almacenar
 */
Plantilla.almacenaDatos = function (jinete) {
    Plantilla.jieneteSeleccionado = jinete;
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 5
 * Función para mostrar en pantalla todos los Jinetes que se han recuperado de la BBDD.
 * @param {Vector_de_jinetes} vector Vector con los datos de los jinetes a mostrar
 */
//BUSQUEDA POR APELLIDOS
Plantilla.imprimePorApellido = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.nombre_jinete.apellidos < b.data.nombre_jinete.apellidos) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.nombre_jinete.apellidos > b.data.nombre_jinete.apellidos) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));
    }
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por APELLIDOS" , msj)
}

//BUSQUEDA POR ALTURA
Plantilla.imprimePorAltura = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.altura_jinete < b.data.altura_jinete) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.altura_jinete > b.data.altura_jinete) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por ALTURA" , msj)
}

//BUSQUEDA POR NOMBRE DEL CABALLO
Plantilla.imprimePorCaballo = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.datos_caballo.nombre_caballo < b.data.datos_caballo.nombre_caballo) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.datos_caballo.nombre_caballo > b.data.datos_caballo.nombre_caballo) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por NOMBRE DEL CABALLO" , msj)
}

//BUSQUEDA POR AÑO DE NACIMIENTO
Plantilla.imprimePorAño = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.fecha_nacimiento.año < b.data.fecha_nacimiento.año  ) {
                    return -1;
            } //A va después alfabeticamente que B
            if (a.data.fecha_nacimiento.año >b.data.fecha_nacimiento.año) {
                    return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por AÑO DE NACIMIENTO" , msj)
}

//BUSQUEDA POR NOMBRE DEL CLUB
Plantilla.imprimePorClub = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.nombre_club_actual < b.data.nombre_club_actual) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.nombre_club_actual > b.data.nombre_club_actual) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por NOMBRE DEL CLUB" , msj)
}

//BUSQUEDA POR DIRECCION DEL CLUB
Plantilla.imprimePorDireccionClub = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.direccion_club.calle < b.data.direccion_club.calle) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.direccion_club.calle > b.data.direccion_club.calle) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por DIRECCION DEL CLUB" , msj)
}

//BUSQUEDA POR TIPO DE COMPETICION
Plantilla.imprimePorCompeticion = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.tipo_competicion < b.data.tipo_competicion) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.tipo_competicion > b.data.tipo_competicion) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por TIPO COMPETICION" , msj)
}

//BUSQUEDA POR AÑOS FEDERADO
Plantilla.imprimePorFederado = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.años_federado < b.data.años_federado) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.años_federado > b.data.años_federado) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por AÑOS FEDERADO" , msj)
}

//BUSQUEDA POR NUMERO DE PARTICIPACIONES
Plantilla.imprimePorParticipaciones = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.numero_particiapciones_torneo < b.data.numero_particiapciones_torneo) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.numero_particiapciones_torneo > b.data.numero_particiapciones_torneo) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por PARTICIPACIONES" , msj)
}

//BUSQUEDA POR NUMERO DE TORNEOS GANADOS
Plantilla.imprimePorGanado = function (vector) {
    if (vector && Array.isArray(vector)) {
        vector.sort(function (a, b) {
            if (a.data.numero_torneos_ganados < b.data.numero_torneos_ganados) {
                return -1;
            } // A va después alfabeticamente que B
            if (a.data.numero_torneos_ganados > b.data.numero_torneos_ganados) {
                return 1;
            } // B va después alfabeticamente que A
            return 0;
        });
    }
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));}
    msj += Plantilla.plantillaTablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por TORNEOS GANADOS" , msj)
}

/***************************************************************************************************/

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



/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Función principal para recuperar las jinetes desde el MS, y posteriormente imprimirlas
 */
Plantilla.nombrarJinetes = function () {
    Plantilla.recupera(Plantilla.imprimeNombres);
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */

Plantilla.listarJinetes = function () {
    Plantilla.recupera(Plantilla.imprimeMuchosJinetes);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función principal para mostrar los datos de una jinete desde el MS y, posteriormente, imprimirla.
 * @param {String} idJinete Identificador de la jinete a mostrar
 */
Plantilla.mostrar = function (idJinete) {
    this.recuperaUnJinete(idJinete, this.imprimeUnJinete);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 3
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */
Plantilla.listarJinetesAlafetico = function () {
    Plantilla.recuperaAlfabeticamente(Plantilla.imprimeNombres);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 5
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */
//ORDENADO POR APELLIDOS
Plantilla.listarPorApellido = function () {
    Plantilla.recupera(Plantilla.imprimePorApellido);
}

//ORDENADO POR ALTURA DEL JINETE
Plantilla.listarPorAltura = function () {
    Plantilla.recupera(Plantilla.imprimePorAltura);
}


//ORDENADO POR ORDEN ALFABETICO NOMBRE DEL CABALLO
Plantilla.listarPorCaballo = function () {
    Plantilla.recupera(Plantilla.imprimePorCaballo);
}

//ORDENADO POR AÑO DE NACIMIENTO
Plantilla.listarPorAño = function () {
    Plantilla.recupera(Plantilla.imprimePorAño);
}

//ORDENADO POR ORDEN ALFABETICO DEL NOMBRE DEL CLUB
Plantilla.listarPorClub = function () {
    Plantilla.recupera(Plantilla.imprimePorClub);
}

//ORDENADO POR ORDEN ALFABETICO DE LA DIRECCION DEL CLUB
Plantilla.listarPorDireccionClub = function () {
    Plantilla.recupera(Plantilla.imprimePorDireccionClub);
}

//ORDENADO POR ORDEN ALFABETICO DEL TIPO DE COMPETICION
Plantilla.listarPorCompeticion = function () {
    Plantilla.recupera(Plantilla.imprimePorCompeticion);
}

//ORDENADO POR ORDEN ALFABETICO DEL TIPO DE COMPETICION
Plantilla.listarPorAniosFederado = function () {
    Plantilla.recupera(Plantilla.imprimePorFederado);
}

//ORDENADO POR NUMERO DE TORNEOS PARTICIPADOS
Plantilla.listarPorParticipaciones = function () {
    Plantilla.recupera(Plantilla.imprimePorParticipaciones);
}

//ORDENADO POR NUMERO DE TORNEOS GANADOS
Plantilla.listarPorGanados = function () {
    Plantilla.recupera(Plantilla.imprimePorGanado);
}





/***************************************************************************************************/


/**
 * Oculta todas las opciones secundarias
 * @returns El propio objeto para encadenar llamadas
 */
Plantilla.ocultarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", false)
    return this
}

/**
 * Muestra todas las opciones secundarias
 * @returns El propio objeto para encadenar llamadas
 */
Plantilla.mostrarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", true)
    return this
}


/**
 * Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Plantilla.mostrarOcionesTerciariasEditar = function () {
    this.opcionesMostrarOcultar("opcion-terciaria editar", true)
    return this
}


/**
 * Oculta las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Plantilla.ocultarOcionesTerciariasEditar = function () {
    this.opcionesMostrarOcultar("opcion-terciaria editar", false)
    return this
}

/*********************************************************************************************/

/**
 * Función que permite modificar los datos de una Jinete
 */
Plantilla.editar = function () {
    this.ocultarOpcionesSecundarias()
    this.mostrarOcionesTerciariasEditar()
    this.habilitarCamposEditables()
}

/**
 * Establece disable = true en los campos editables
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Plantilla.deshabilitarCamposEditables = function () {
    Plantilla.habilitarDeshabilitarCamposEditables(true)
    return this
}


/**
 * Establece disable = false en los campos editables
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Plantilla.habilitarCamposEditables = function () {
    Plantilla.habilitarDeshabilitarCamposEditables(false)
    return this
}


/*********************************************************************************************/

/**
 * ????Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Plantilla.opcionesMostrarOcultar = function (classname, mostrando) {
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
 * Establece disable = habilitando en los campos editables
 * @param {boolean} Deshabilitando Indica si queremos deshabilitar o habilitar los campos
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Plantilla.habilitarDeshabilitarCamposEditables = function (deshabilitando) {
    deshabilitando = (typeof deshabilitando === "undefined" || deshabilitando === null) ? true : deshabilitando
    for (let campo in Plantilla.form) {
        document.getElementById(Plantilla.form[campo]).disabled = deshabilitando
    }
    return this
}
