/**
 * @file Hipica.js
 * @description Funciones para el procesamiento de la info enviada por el MS hipica
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Hipica = {};

Hipica.jieneteSeleccionado = null

// hipica de datosDescargados vacíos
Hipica.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

Hipica.hipicaTags = {
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
 * Función que descarga la info MS hipica al llamar a una de sus rutas
 * @param {string} ruta Ruta a descargar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Hipica.descargarRuta = async function (ruta, callBackFn) {
    let response = null

    // Intento conectar con el microservicio hipica
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
 * Función principal para mostrar los datos enviados por la ruta "home" de MS hipica
 */
Hipica.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("hipica Home", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS hipica
 */
Hipica.mostrarAcercaDe = function (datosDescargados) {
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
    Frontend.Article.actualizar("hipica Acerca de", mensajeAMostrar)
}

/*********************************/

Hipica.jineteComoTabla = function (jinete) {
    return Hipica.tablaJinetes.cabecera
        + Hipica.tablaJinetes.actualiza(jinete)
        + Hipica.tablaJinetes.pie;
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Imprime los datos de una jinete como una tabla dentro de un formulario usando la hipica del formulario.
 * @param {jinete} jinete Objeto con los datos de la jinete
 * @returns Una cadena con la tabla que tiene ya los datos actualizados
 */
Hipica.jineteComoFormulario = function (jinete) {
    return Hipica.formularioJinete.actualiza( jinete );
}

/*********************************/


Hipica.formularioJinete = {}

Hipica.formularioJinete.formulario = `
<form method='post' action=''>
<table width="100%" class="listado-personas">
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
        <tr title="${Hipica.hipicaTags.ID}">
            <td><input type="text" class="form-persona-elemento disabled" disabled id="form-persona-id" required value="${Hipica.hipicaTags.ID}" name="id_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-nombre" required value="${Hipica.hipicaTags.NOMBRE}" name="nombre_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-apellidos" required value="${Hipica.hipicaTags.APELLIDOS}" name="apellidos_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-altura_jinete" required value="${Hipica.hipicaTags.ALTURA_JINETE}" name="altura_jinete"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-datos_caballo" required value="${Hipica.hipicaTags.DATOS_CABALLO}" name="datos_caballo"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-fecha_nacimiento" required value="${Hipica.hipicaTags.FECHA_NACIMIENTO}" name="fecha_nacimiento"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-nombre_club_actual" required value="${Hipica.hipicaTags.NOMBRE_CLUB_ACTUAL}" name="nombre_club_actual"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-direccion_club" required value="${Hipica.hipicaTags.DIRECCION_CLUB}" name="direccion_club"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-tipo_competicion" required value="${Hipica.hipicaTags.TIPO_COMPETICION}" name="tipo_competicion"/></td>
            
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-numero_participaciones" required value="${Hipica.hipicaTags.NUMERO_PARTICIPACIONES}" name="numero_participaciones"/></td>
            <td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-numero_torneos_ganados" required value="${Hipica.hipicaTags.NUMERO_TORNEOS_GANADOS}" name="numero_torneos_ganados"/></td>
        </tr>
    </tbody>
</table>
</form>`;

//<td><input type="text" class="form-persona-elemento editable" disabled id="form-persona-años_federado" required value="${Hipica.hipicaTags.AÑOS_FEDERADO}" name="años_federado"/></td>
/*********************************/
// hipica para poner los datos de varios jinetes dentro de una tabla
Hipica.tablaJinetes = {}

/**
 *  CABECERA DE LA TABLA DE LOS NOMBRES DE JINETES
 * Muestra los nombres de los campos sobre la información que vamos a representar de los jinetes
 * @type {string}
 */
Hipica.tablaJinetes.cabecera = `<table width="100%" class="listado-personas">
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
Hipica.tablaJinetes.cabeceraJinetesTodos = `<table width="100%" class="listado-personas">
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
 * Muestra la información de cada hipica en un elemento TR con sus correspondientes TD
 * @param {hipica} p Datos del hipica a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el hipica.
 */
Hipica.tablaJinetes.cuerpo =
    `<tr title="${Hipica.hipicaTags.ID}">
    <td>${Hipica.hipicaTags.ID}</td>
    <td>${Hipica.hipicaTags.NOMBRE}</td>
    <td>${Hipica.hipicaTags.APELLIDOS}</td>
    
    <td>
        <div><a href="javascript:Hipica.mostrar('${Hipica.hipicaTags.ID}')" className="opcion-secundaria mostrar">Mostrar</a></div>    
    </td>
    
</tr> `;

/**
 * CUERPO DE LA TABLA DE TODOS LOS JINETES
 * Muestra la información de cada hipica en un elemento TR con sus correspondientes TD
 * @param {hipica} p Datos del hipica a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el hipica.
 */
Hipica.tablaJinetes.cuerpoJinetesTodos=
    `<tr title="${Hipica.hipicaTags.ID}">
    <td>${Hipica.hipicaTags.ID}</td>
    <td>${Hipica.hipicaTags.NOMBRE}</td>
    <td>${Hipica.hipicaTags.APELLIDOS}</td>
    <td>${Hipica.hipicaTags.ALTURA_JINETE}</td>
    <td>${Hipica.hipicaTags.DATOS_CABALLO}</td>     
    <td>${Hipica.hipicaTags.FECHA_NACIMIENTO}</td>   
    <td>${Hipica.hipicaTags.NOMBRE_CLUB_ACTUAL}</td>   
    <td>${Hipica.hipicaTags.DIRECCION_CLUB }</td>   
    <td>${Hipica.hipicaTags.TIPO_COMPETICION }</td>   
    
    <td>${Hipica.hipicaTags["NUMERO_PARTICIPACIONES"]}</td>
    <td>${Hipica.hipicaTags["NUMERO_TORNEOS_GANADOS"]}</td>
    
    <td>
        <div><a href="javascript:Hipica.mostrar('${Hipica.hipicaTags.ID}')" className="opcion-secundaria mostrar">Mostrar</a></div>    
    </td>
    
</tr> `;
//<td>${Hipica.hipicaTags.AÑOS_FEDERADO}"</td>

/**
 * PIE DE LAS TABLAS
 * @returns {string}
 */Hipica.tablaJinetes.pie = `</tbody> </table>`;

/*********************************/

/**
 * Actualiza el cuerpo de la hipica deseada con los datos de la Jinete que se le pasa
 * @param {String} hipica Cadena conteniendo HTMLen la que se desea cambiar los campos de la hipica por datos
 * @param {jinete} jinete Objeto con los datos del jinete que queremos escribir en el TR
 * @returns La hipica del cuerpo de la tabla con los datos actualizados
 */
Hipica.sustituyeTags = function (hipica, jinetes) {
    return hipica
        .replace(new RegExp(Hipica.hipicaTags.ID, 'g'), jinetes.ref['@ref'].id)
        .replace(new RegExp(Hipica.hipicaTags.NOMBRE  , 'g'), jinetes.data.nombre_jinete.nombre )
        .replace(new RegExp(Hipica.hipicaTags.APELLIDOS  , 'g'), jinetes.data.nombre_jinete.apellidos )
        .replace(new RegExp(Hipica.hipicaTags.ALTURA_JINETE  , 'g'), jinetes.data.altura_jinete + " cm" )
        .replace(new RegExp(Hipica.hipicaTags.DATOS_CABALLO  , 'g'), jinetes.data.datos_caballo.nombre_caballo + " Edad: " + jinetes.data.datos_caballo.edad  + " Sexo: "+ jinetes.data.datos_caballo.sexo )
        .replace(new RegExp(Hipica.hipicaTags.FECHA_NACIMIENTO  , 'g'), jinetes.data.fecha_nacimiento.dia + "/" + jinetes.data.fecha_nacimiento.mes )
        .replace(new RegExp(Hipica.hipicaTags.NOMBRE_CLUB_ACTUAL  , 'g'), jinetes.data.nombre_club_actual )
        .replace(new RegExp(Hipica.hipicaTags.DIRECCION_CLUB , 'g'), jinetes.data.direccion_club.calle + ", " + jinetes.data.direccion_club.numero + ", " + jinetes.data.direccion_club.localidad + ", " + jinetes.data.direccion_club.provincia + ", " + jinetes.data.direccion_club.pais)
        .replace(new RegExp(Hipica.hipicaTags.TIPO_COMPETICION , 'g'), jinetes.data.tipo_competicion)

        .replace(new RegExp(Hipica.hipicaTags.NUMERO_PARTICIPACIONES, 'g'), jinetes.data.numero_particiapciones_torneo)
        .replace(new RegExp(Hipica.hipicaTags.NUMERO_TORNEOS_GANADOS, 'g'), jinetes.data.numero_torneos_ganados)


}
//"/" + jinetes.data.fecha_nacimiento.año
//.replace(new RegExp(Hipica.hipicaTags.AÑOS_FEDERADO, 'g'), jinetes.data.años_federado)
/*********************************/

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Actualiza el cuerpo de la tabla con los daos de la Jinete que se le pasa
 * @param {jinete} jinete Objeto con los datos de la Jinete que queremos escribir el TR
 * @returns La hipica des cuerpo de la tabla con los datos actualizados
 */
Hipica.tablaJinetes.actualizaNombres = function (jinetes) {
    return Hipica.sustituyeTags(this.cuerpo, jinetes)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Actualiza el cuerpo de la tabla con los daos de la Jinete que se le pasa
 * @param {jinete} jinete Objeto con los datos de la Jinete que queremos escribir el TR
 * @returns La hipica des cuerpo de la tabla con los datos actualizados
 */
Hipica.tablaJinetes.actualiza = function (jinete) {
    return Hipica.sustituyeTags(this.cuerpoJinetesTodos, jinete)
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Actualiza el formulario con los datos de la Jinete que se le pasa
 * @param {Jinete} Jinete Objeto con los datos de la Jinete que queremos escribir en el TR
 * @returns La hipica del cuerpo de la tabla con los datos actualizados
 */
Hipica.formularioJinete.actualiza = function (jinete) {
    return Hipica.sustituyeTags(this.formulario, jinete);
}


/*********************************/


/**
 * Función que recupera todos los jinetes llamando al MS hipica
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Hipica.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar el microservicio hipica
    try {
        const url = Frontend.API_GATEWAY + "/hipica/getTodos"
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
Hipica.recuperaUnJinete = async function (idJinete, callBackFn) {
    try {
        const url = Frontend.API_GATEWAY + "/hipica/getPorId/" + idJinete
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
 * Función que recupera todos los jinetes llamando al MS hipica
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Hipica.recuperaAlfabeticamente = async function (callBackFn) {
    let response = null
    // Intento conectar el microservicio hipica
    try {
        const url = Frontend.API_GATEWAY + "/hipica/getTodos"
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


/*********************************/
/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Función para mostrar en jinete todos los nombres de los jinetes
 * que se han recuperado de la BBDD
 * @param {vector_de_jinetes} vector
 */
Hipica.imprimeNombres = function (vector) {
    //console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Hipica.tablaJinetes.cabecera
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualizaNombres(e))
    }
    msj += Hipica.tablaJinetes.pie

    // Borrar toda la información de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listados de nombres de todos los jinetes" , msj)
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función para mostrar en pantalla todos los Jinetes que se han recuperado de la BBDD.
 * @param {Vector_de_jinetes} vector Vector con los datos de los jinetes a mostrar
 */
Hipica.imprimeMuchosJinetes = function (vector) {
    //console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));
    }
    msj += Hipica.tablaJinetes.pie

    // Borrar toda la información de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listados de los datos de todos los jinetes" , msj)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función para mostrar en pantalla los detalles de una jinete que se ha recuperado de la BBDD por su id
 * @param {jinete} jinete Datos de la jinete a mostrar
 */
Hipica.imprimeUnJinete = function (jinete) {
    if (!jinete || typeof jinete !== "object") {
        elementoTitulo.innerHTML = "Mostrar datos de un jinete";
    } else{
        let msj = Hipica.jineteComoFormulario(jinete);
        Frontend.Article.actualizarBoton("Mostrar datos de un jinete", msj)
        Hipica.almacenaDatos(jinete)
    }
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Almacena los datos de la jinete que se está mostrando
 * @param {jinete} jinete Datos de la jinete a almacenar
 */
Hipica.almacenaDatos = function (jinete) {
    Hipica.jieneteSeleccionado = jinete;
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 5
 * Función para mostrar en pantalla todos los Jinetes que se han recuperado de la BBDD.
 * @param {Vector_de_jinetes} vector Vector con los datos de los jinetes a mostrar
 */
//BUSQUEDA POR APELLIDOS
Hipica.imprimePorApellido = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));
    }
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por APELLIDOS" , msj)
}

//BUSQUEDA POR ALTURA
Hipica.imprimePorAltura = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por ALTURA" , msj)
}

//BUSQUEDA POR NOMBRE DEL CABALLO
Hipica.imprimePorCaballo = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por NOMBRE DEL CABALLO" , msj)
}

//BUSQUEDA POR AÑO DE NACIMIENTO
/*
Hipica.imprimePorAño = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por AÑO DE NACIMIENTO" , msj)
}
*/


//BUSQUEDA POR NOMBRE DEL CLUB
Hipica.imprimePorClub = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por NOMBRE DEL CLUB" , msj)
}

//BUSQUEDA POR DIRECCION DEL CLUB
Hipica.imprimePorDireccionClub = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por DIRECCION DEL CLUB" , msj)
}

//BUSQUEDA POR TIPO DE COMPETICION
Hipica.imprimePorCompeticion = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por TIPO COMPETICION" , msj)
}

/*
//BUSQUEDA POR AÑOS FEDERADO
Hipica.imprimePorFederado = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por AÑOS FEDERADO" , msj)
}
*/
//BUSQUEDA POR NUMERO DE PARTICIPACIONES
Hipica.imprimePorParticipaciones = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por PARTICIPACIONES" , msj)
}

//BUSQUEDA POR NUMERO DE TORNEOS GANADOS
Hipica.imprimePorGanado = function (vector) {
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
    let msj = Hipica.tablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Hipica.tablaJinetes.actualiza(e));}
    msj += Hipica.tablaJinetes.pie
    Frontend.Article.actualizar("Listado de los jinetes Ordenador por TORNEOS GANADOS" , msj)
}

/*********************************/

/**
 * Función principal para responder al evento de elegir la opción "Home"
 */
Hipica.procesarHome = function () {
    this.descargarRuta("/hipica/", this.mostrarHome);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
Hipica.procesarAcercaDe = function () {
    this.descargarRuta("/hipica/acercade", this.mostrarAcercaDe);
}



/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Función principal para recuperar las jinetes desde el MS, y posteriormente imprimirlas
 */

Hipica.nombrarJinetes = function () {
    Hipica.recupera(Hipica.imprimeNombres);
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */

Hipica.listarJinetes = function () {
    Hipica.recupera(Hipica.imprimeMuchosJinetes);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función principal para mostrar los datos de una jinete desde el MS y, posteriormente, imprimirla.
 * @param {String} idJinete Identificador de la jinete a mostrar
 */
Hipica.mostrar = function (idJinete) {
    this.recuperaUnJinete(idJinete, this.imprimeUnJinete);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 3
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */
Hipica.listarJinetesAlafetico = function () {
    Hipica.recuperaAlfabeticamente(Hipica.imprimeNombres);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 5
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */
//ORDENADO POR APELLIDOS
Hipica.listarPorApellido = function () {
    Hipica.recupera(Hipica.imprimePorApellido);
}

//ORDENADO POR ALTURA DEL JINETE
Hipica.listarPorAltura = function () {
    Hipica.recupera(Hipica.imprimePorAltura);
}


//ORDENADO POR ORDEN ALFABETICO NOMBRE DEL CABALLO
Hipica.listarPorCaballo = function () {
    Hipica.recupera(Hipica.imprimePorCaballo);
}

/*
//ORDENADO POR AÑO DE NACIMIENTO
Hipica.listarPorAño = function () {
    Hipica.recupera(Hipica.imprimePorAño);
}
*/

//ORDENADO POR ORDEN ALFABETICO DEL NOMBRE DEL CLUB
Hipica.listarPorClub = function () {
    Hipica.recupera(Hipica.imprimePorClub);
}

//ORDENADO POR ORDEN ALFABETICO DE LA DIRECCION DEL CLUB
Hipica.listarPorDireccionClub = function () {
    Hipica.recupera(Hipica.imprimePorDireccionClub);
}

//ORDENADO POR ORDEN ALFABETICO DEL TIPO DE COMPETICION
Hipica.listarPorCompeticion = function () {
    Hipica.recupera(Hipica.imprimePorCompeticion);
}

//ORDENADO POR ORDEN ALFABETICO DEL TIPO DE COMPETICION
Hipica.listarPorAniosFederado = function () {
    Hipica.recupera(Hipica.imprimePorFederado);
}

//ORDENADO POR NUMERO DE TORNEOS PARTICIPADOS
Hipica.listarPorParticipaciones = function () {
    Hipica.recupera(Hipica.imprimePorParticipaciones);
}

//ORDENADO POR NUMERO DE TORNEOS GANADOS
Hipica.listarPorGanados = function () {
    Hipica.recupera(Hipica.imprimePorGanado);
}





/*********************************/


/**
 * Oculta todas las opciones secundarias
 * @returns El propio objeto para encadenar llamadas
 */
Hipica.ocultarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", false)
    return this
}

/**
 * Muestra todas las opciones secundarias
 * @returns El propio objeto para encadenar llamadas
 */
Hipica.mostrarOpcionesSecundarias = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", true)
    return this
}


/**
 * Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Hipica.mostrarOcionesTerciariasEditar = function () {
    this.opcionesMostrarOcultar("opcion-terciaria editar", true)
    return this
}


/**
 * Oculta las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Hipica.ocultarOcionesTerciariasEditar = function () {
    this.opcionesMostrarOcultar("opcion-terciaria editar", false)
    return this
}

/*******************************/

/**
 * Función que permite modificar los datos de una Jinete
 */
Hipica.editar = function () {
    this.ocultarOpcionesSecundarias()
    this.mostrarOcionesTerciariasEditar()
    this.habilitarCamposEditables()
}

/**
 * Establece disable = true en los campos editables
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Hipica.deshabilitarCamposEditables = function () {
    Hipica.habilitarDeshabilitarCamposEditables(true)
    return this
}


/**
 * Establece disable = false en los campos editables
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Hipica.habilitarCamposEditables = function () {
    Hipica.habilitarDeshabilitarCamposEditables(false)
    return this
}


/*******************************/

/**
 * ????Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Jinetes, para concatenar llamadas
 */
Hipica.opcionesMostrarOcultar = function (classname, mostrando) {
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
Hipica.habilitarDeshabilitarCamposEditables = function (deshabilitando) {
    deshabilitando = (typeof deshabilitando === "undefined" || deshabilitando === null) ? true : deshabilitando
    for (let campo in Hipica.form) {
        document.getElementById(Hipica.form[campo]).disabled = deshabilitando
    }
    return this
}