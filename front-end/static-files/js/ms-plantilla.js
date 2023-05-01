/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

// Constantes
let NINGUNO = 0;
let ORDENAR_ID = 1;
let ORDENAR_NOMBRE = 2;
let ORDENAR_APELLIDOS = 3;
let ORDENAR_FECHA_NAC = 4;
let ORDENAR_ANIOS_GANA_PREMIOS = 5;
let ORDENAR_NUM_CAMPEONATOS = 6;

/// Creo el espacio de nombres
let Plantilla = {};

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

/// Nombre de los campos del formulario para editar una persona
Plantilla.form = {
    NOMBRE: "form-persona-nombre",
}

Plantilla.plantillaTags = {
    "ID": "### ID ###",
    "NOMBRE": "### NOMBRE ###",
    "APELLIDOS": "### APELLIDOS ###",
    "FECHA NACIMIENTO": "### FECHA NACIMIENTO ###",
    "AÑOS GANA PREMIOS": "### AÑOS GANA PREMIOS ###",
    "NÚMERO CAMPEONATOS": "### NÚMERO CAMPEONATOS ###",
}

/// Plantilla para poner los datos de varios jugadores dentro de una tabla
Plantilla.tablaJugadores = {}

// Cabecera de la tabla
Plantilla.tablaJugadores.cabecera = `<table width="100%" class="listado-personas">
                    <thead>
                        <th width="15%">Id <a href="javascript:Plantilla.procesarJugadores(${ORDENAR_ID})" class="opcion-secundaria mostrar">V</a> </th>
                        <th width="10%">Nombre <a href="javascript:Plantilla.procesarJugadores(${ORDENAR_NOMBRE})" class="opcion-secundaria mostrar">V</a> </th>
                        <th width="15%">Apellidos <a href="javascript:Plantilla.procesarJugadores(${ORDENAR_APELLIDOS})" class="opcion-secundaria mostrar">V</a> </th>
                        <th width="15%">Fecha Nacimiento <a href="javascript:Plantilla.procesarJugadores(${ORDENAR_FECHA_NAC})" class="opcion-secundaria mostrar">V</a> </th>
                        <th width="20%">Años gana premios <a href="javascript:Plantilla.procesarJugadores(${ORDENAR_ANIOS_GANA_PREMIOS})" class="opcion-secundaria mostrar">V</a> </th>
                        <th width="15%">Número campeonatos <a href="javascript:Plantilla.procesarJugadores(${ORDENAR_NUM_CAMPEONATOS})" class="opcion-secundaria mostrar">V</a> </th>
                        <th width="10%">Detalles </th>
                    </thead>
                    <tbody>
    `;

// Elemento TR que muestra los datos de un jugador
Plantilla.tablaJugadores.cuerpo = `
    <tr title="${Plantilla.plantillaTags.ID}">
        <td>${Plantilla.plantillaTags.ID}</td>
        <td>${Plantilla.plantillaTags.NOMBRE}</td>
        <td>${Plantilla.plantillaTags.APELLIDOS}</td>
        <td>${Plantilla.plantillaTags["FECHA NACIMIENTO"]}</td>
        <td>${Plantilla.plantillaTags["AÑOS GANA PREMIOS"]}</td>
        <td>${Plantilla.plantillaTags["NÚMERO CAMPEONATOS"]}</td>
        <td>
                    <div><a href="javascript:Plantilla.mostrar('${Plantilla.plantillaTags.ID}')" class="opcion-secundaria mostrar">Mostrar</a></div>
        </td>
    </tr>
    `;

// Pie de la tabla
Plantilla.tablaJugadores.pie = `        </tbody>
             </table>
             `;

/// Formulario para añadir un nuevo jugador
Plantilla.formularioAniadeJugador = `<form method='post' action='' id='formularioNuevoJugador'>
    <table width="100%" class="listado-personas">
        <thead>
            <th width="10%">Nombre</th><th width="15%">Apellidos</th><th width="15%">Fecha Nacimiento</th>
            <th width="20%">Años gana premios</th><th width="15%">Número campeonatos</th><th width="10%">Opciones</th>
        </thead>
        <tbody>
            <tr>
                <td><input type="text" class="form-persona-elemento editable"
                        id="form-persona-nombre" required value="Nombre" 
                        name="nombre_jugador"/></td>
                <td><input type="text" class="form-persona-elemento editable"
                        id="form-persona-apellidos" value="Apellidos" 
                        name="apellidos_jugador"/></td>
                <td><input type="text" class="form-persona-elemento editable"
                        id="form-persona-fechanac" required value="10/10/2010" 
                        name="fechanac_jugador"/></td>
                <td><input type="text" class="form-persona-elemento editable"
                        id="form-persona-anioganapremio" required
                        value="1900,1901" 
                        name="anioganapremio_jugador"/></td>
                <td><input type="number" class="form-persona-elemento editable"
                        id="form-persona-numcampeonatos" required
                        value="0" 
                        name="numcampeonatos_jugador"/></td>
                <td>
                    <div><a href="javascript:Plantilla.aniadirJugador()" class="opcion-secundaria mostrar">Añadir</a></div>
                </td>
            </tr>
        </tbody>
    </table>
</form>
`;

/**
 * Actualiza el cuerpo de la plantilla deseada con los datos del jugador que se le pasa
 * @param {String} Plantilla Cadena conteniendo HTML en la que se desea cambiar los campos de la plantilla por datos
 * @param {Jugador} Jugador Objeto con los datos del jugador que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */           
Plantilla.sustituyeTags = function (plantilla, jugador) {
    let fecha_nac = jugador.data.fecha_nac.dia+"/"+jugador.data.fecha_nac.mes+"/"+jugador.data.fecha_nac.anio
    return plantilla
        .replace(new RegExp(Plantilla.plantillaTags.ID, 'g'), jugador.ref['@ref'].id)
        .replace(new RegExp(Plantilla.plantillaTags.NOMBRE, 'g'), jugador.data.nombre)
        .replace(new RegExp(Plantilla.plantillaTags.APELLIDOS, 'g'), jugador.data.apellidos)
        .replace(new RegExp(Plantilla.plantillaTags["FECHA NACIMIENTO"], 'g'), fecha_nac)
        .replace(new RegExp(Plantilla.plantillaTags["AÑOS GANA PREMIOS"], 'g'), jugador.data.anio_gana_premio)
        .replace(new RegExp(Plantilla.plantillaTags["NÚMERO CAMPEONATOS"], 'g'), jugador.data.num_campeonatos)
}

/**
 * Actualiza el cuerpo de la tabla con los datos del jugador que se le pasa
 * @param {Jugador} Jugador Objeto con los datos del jugador que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados 
 */
Plantilla.tablaJugadores.actualiza = function (jugador) {
    return Plantilla.sustituyeTags(this.cuerpo, jugador)
}

/**
 * Función que descarga la info MS Plantilla al llamar a una de sus rutas
 * @param {string} ruta Ruta a descargar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.descargarRuta = async function (ruta, callBackFn, opcion) {
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
        callBackFn(datosDescargados, opcion)
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
 * Función principal para mostrar los datos enviados por la ruta "getNombres" de MS Plantilla
 */
Plantilla.mostrarNombres = function (datosDescargados) {
    // Mensaje que se enviará para mostrar los datos
    let mensajeAMostrar = ""

    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto  o NO contiene el campo data
    if (typeof datosDescargados !== "object" || typeof datosDescargados.data === "undefined") {
        datosDescargados = this.datosDescargadosNulos
        mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    }

    // Muestro todos los jugadores que se han descargado
    else {
        let numJugador = 1
        mensajeAMostrar = `<a href="javascript:Plantilla.procesarNombresOrdenados()" class="opcion-principal"
        title="Llama a la ruta /getNombres del MS Plantilla">Ordenar alfabéticamente</a><ul>`;
        datosDescargados.data.forEach(element => {
            mensajeAMostrar += `<li><b>Nombre jugador ${numJugador}</b>: ${element}</li>`
            numJugador++
        });
        mensajeAMostrar += `</ul>`;
        datosDescargados = mensajeAMostrar
    }
    Frontend.Article.actualizar("Listado de nombres de los jugadores de Golf", mensajeAMostrar)
}

/**
 * Función principal para mostrar los datos enviados de forma ordenada por la ruta "getNombres" de MS Plantilla
 */
Plantilla.mostrarNombresOrdenados = function (datosDescargados) {
    // Mensaje que se enviará para mostrar los datos
    let mensajeAMostrar = ""

    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto  o NO contiene el campo data
    if (typeof datosDescargados !== "object" || typeof datosDescargados.data === "undefined") {
        datosDescargados = this.datosDescargadosNulos
        mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    }

    // Muestro todos los jugadores que se han descargado de forma ordenada alfabéticamente
    else {
        datosDescargados.data.sort() // Ordenamos los nombres recibidos
        let numJugador = 1
        mensajeAMostrar = `<a href="javascript:Plantilla.procesarNombres()" class="opcion-principal"
        title="Llama a la ruta /getNombres del MS Plantilla">Quitar orden alfabético</a><ul>`;
        datosDescargados.data.forEach(element => {
            mensajeAMostrar += `<li><b>Nombre jugador ${numJugador}</b>: ${element}</li>`
            numJugador++
        });
        mensajeAMostrar += `</ul>`;
        datosDescargados = mensajeAMostrar
    }
    Frontend.Article.actualizar("Listado de nombres de los jugadores de Golf", mensajeAMostrar)
}

/**
 * Función para mostrar en pantalla todos los jugadores que se han recuperado de la BBDD.
 * @param {Vector_de_jugadores} vector Vector con los datos de los jugadores a mostrar
 */

Plantilla.imprimeMuchosJugadores = function (datosDescargados, opOrdenar) {
    // Mensaje que se enviará para mostrar los datos
    let mensajeAMostrar = ""

    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto  o NO contiene el campo data
    if (typeof datosDescargados !== "object" || typeof datosDescargados.data === "undefined") {
        datosDescargados = this.datosDescargadosNulos
        mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    }

    // Muestro todos los jugadores que se han descargado en forma de tabla
    else {
        let vectorJugadores = datosDescargados.data

        Plantilla.ordenaJugadores(vectorJugadores, opOrdenar) // Ordenamos los datos en caso de que sea necesario

        // Compongo el contenido que se va a mostrar dentro de la tabla
        mensajeAMostrar = Plantilla.tablaJugadores.cabecera
        vectorJugadores.forEach(e => mensajeAMostrar += Plantilla.tablaJugadores.actualiza(e))
        mensajeAMostrar += Plantilla.tablaJugadores.pie

    }

    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listado de jugadores", mensajeAMostrar)
}

/**
 * Función que ordena el vector de todos los jugadores dependiendo del parametro indicado
 */
Plantilla.ordenaJugadores = function (vectorJugadores, opOrdenar) {
    switch (opOrdenar) {
        case ORDENAR_ID:
            vectorJugadores.sort((x, y) => x.ref['@ref'].id - y.ref['@ref'].id); // Ordenamos de menor a mayor
            break;
        case ORDENAR_NOMBRE:
            vectorJugadores.sort(function (x, y) { // Ordenamos por orden alfabético
                if (x.data.nombre < y.data.nombre) {
                    return -1;
                }
             
                if (x.data.nombre > y.data.nombre) {
                    return 1;
                }
             
                return 0;
            });
            break;
        case ORDENAR_APELLIDOS:
            vectorJugadores.sort(function (x, y) { // Ordenamos por orden alfabético
                if (x.data.apellidos < y.data.apellidos) {
                    return -1;
                }
             
                if (x.data.apellidos > y.data.apellidos) {
                    return 1;
                }
             
                return 0;
            });
            break;
        case ORDENAR_FECHA_NAC:
            vectorJugadores.sort(function (x, y) { // Ordenamos de más antigua a más moderna
                var fecha1 = new Date();
                var fecha2 = new Date();
                fecha1.setFullYear(x.data.fecha_nac.anio, x.data.fecha_nac.mes, x.data.fecha_nac.dia);
                fecha2.setFullYear(y.data.fecha_nac.anio, y.data.fecha_nac.mes, y.data.fecha_nac.dia);

                if (fecha1 < fecha2) {
                    return -1;
                }
             
                if (fecha1 > fecha2) {
                    return 1;
                }
             
                return 0;
            });
            break;
        case ORDENAR_ANIOS_GANA_PREMIOS:
            vectorJugadores.sort((x, y) => y.data.anio_gana_premio.length - x.data.anio_gana_premio.length); // Ordenamos de mayor a menor cantidad
            break;
        case ORDENAR_NUM_CAMPEONATOS:
            vectorJugadores.sort((x, y) => y.data.num_campeonatos - x.data.num_campeonatos); // Ordenamos de mayor a menor cantidad
            break;
    }
}

/**
 * Función para mostrar en pantalla los detalles de un jugador que se ha recuperado de la BBDD por su id
 * @param {Jugador} jugador Datos del jugador a mostrar
 */

Plantilla.imprimeUnJugador = function (datosDescargados) {
    // Mensaje que se enviará para mostrar los datos
    let mensajeAMostrar = ""

    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto  o NO contiene el campo data
    if (typeof datosDescargados !== "object" || typeof datosDescargados.data === "undefined") {
        datosDescargados = this.datosDescargadosNulos
        mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    }

    // Muestro el jugador con todos sus datos en forma de formulario
    else {
        // console.log(datosDescargados) // Para comprobar los datos que se han descargado
        let fecha_nac = datosDescargados.data.fecha_nac.dia+"/"+datosDescargados.data.fecha_nac.mes+"/"+datosDescargados.data.fecha_nac.anio
        mensajeAMostrar = `<form method='post' action=''>
        <table width="100%" class="listado-personas">
            <thead>
                <th width="15%">Id</th><th width="10%">Nombre</th><th width="15%">Apellidos</th><th width="15%">Fecha Nacimiento</th>
                <th width="20%">Años gana premios</th><th width="15%">Número campeonatos</th><th width="10%">Opciones</th>
            </thead>
            <tbody>
                <tr title="${datosDescargados.ref['@ref'].id}">
                    <td><input type="text" class="form-persona-elemento" disabled id="form-persona-id"
                            value="${datosDescargados.ref['@ref'].id}" 
                            name="id_jugador"/></td>
                    <td><input type="text" class="form-persona-elemento editable" disabled
                            id="form-persona-nombre" required value="${datosDescargados.data.nombre}" 
                            name="nombre_jugador"/></td>
                    <td><input type="text" class="form-persona-elemento editable" disabled
                            id="form-persona-apellidos" value="${datosDescargados.data.apellidos}" 
                            name="apellidos_jugador"/></td>
                    <td><input type="text" class="form-persona-elemento editable" disabled
                            id="form-persona-fechanac" required value="${fecha_nac}" 
                            name="fechanac_jugador"/></td>
                    <td><input type="text" class="form-persona-elemento editable" disabled
                            id="form-persona-anioganapremio" required
                            value="${datosDescargados.data.anio_gana_premio}" 
                            name="anioganapremio_jugador"/></td>
                    <td><input type="number" class="form-persona-elemento editable" disabled
                            id="form-persona-numcampeonatos" required
                            value="${datosDescargados.data.num_campeonatos}" 
                            name="numcampeonatos_jugador"/></td>
                    <td>
                        <div><a href="javascript:Plantilla.editar()" class="opcion-secundaria mostrar">Editar</a></div>
                        <div><a href="javascript:Plantilla.eliminar()" class="opcion-secundaria mostrar">Eliminar</a></div>
                        <div><a href="javascript:Plantilla.guardar()" class="opcion-terciaria editar ocultar">Guardar</a></div>
                        <div><a href="javascript:Plantilla.mostrar('${datosDescargados.ref['@ref'].id}')" class="opcion-terciaria editar ocultar">Cancelar</a></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    `;
    }
    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Mostrar un jugador", mensajeAMostrar)
}

/**
 * Muestra las opciones que tiene el usuario cuando selecciona Editar
 * @returns El propio objeto Personas, para concatenar llamadas
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
 * @returns El propio objeto Plantilla, para concatenar llamadas
 */
Plantilla.habilitarDeshabilitarCamposEditables = function (deshabilitando) {
    deshabilitando = (typeof deshabilitando === "undefined" || deshabilitando === null) ? true : deshabilitando
    for (let campo in Plantilla.form) {
        document.getElementById(Plantilla.form[campo]).disabled = deshabilitando
    }
    return this
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

/**
 * Función principal para responder al evento de elegir la opción "Nombres jugadores"
 */
Plantilla.procesarNombres = function () {
    this.descargarRuta("/plantilla/getNombres", this.mostrarNombres);
}

/**
 * Función principal para responder al evento de elegir la opción "Nombres jugadores" y mostrarlos de forma ordenada
 */
Plantilla.procesarNombresOrdenados = function () {
    this.descargarRuta("/plantilla/getNombres", this.mostrarNombresOrdenados);
}

/**
 * Función principal para responder al evento de elegir la opción "Listar jugadores" y mostrarlos de forma ordenada
 */
Plantilla.procesarJugadores = function (opcion) {
    this.descargarRuta("/plantilla/getTodos", this.imprimeMuchosJugadores, opcion);
}

/**
 * Función principal para mostrar los datos de un jugador desde el MS y, posteriormente, imprimirla.
 * @param {String} idJugador Identificador de la persona a mostrar
 */
Plantilla.mostrar = function (idJugador) {
    this.descargarRuta("/plantilla/getPorId/"+idJugador, this.imprimeUnJugador);
}

/**
 * Función que permite modificar los datos de un jugador
 */
Plantilla.editar = function () {
    this.opcionesMostrarOcultar("opcion-secundaria", false) // Despliega las nuevas opciones tras pulsar editar (tipo secundaria)
    this.opcionesMostrarOcultar("opcion-terciaria editar", true) // Despliega las nuevas opciones tras pulsar editar (tipo terciaria)
    Plantilla.habilitarDeshabilitarCamposEditables(false) // Habilita los campos editables
}

/**
 * Función para guardar los nuevos datos de un jugador
 */
Plantilla.guardar = async function () {
    try {
        let url = Frontend.API_GATEWAY + "/plantilla/setNombre/"
        let id_jugador = document.getElementById("form-persona-id").value
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({
                "id_jugador": id_jugador,
                "nombre_jugador": document.getElementById("form-persona-nombre").value
            }), // body data type must match "Content-Type" header
        })
        /*
        Error: No procesa bien la respuesta devuelta
        if (response) {
            const jugador = await response.json()
            alert(jugador)
        }
        */
        Plantilla.mostrar(id_jugador)
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway " + error)
        //console.error(error)
    }
}

/**
 * * Función para mostrar el formulario para crear un nuevo jugador
 */
Plantilla.aniadeJugador = function () {
    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Añadir un jugador", Plantilla.formularioAniadeJugador)
}

/**
 * Función para guardar los nuevos datos de un jugador recién creado
 */
Plantilla.aniadirJugador = async function () {
    try {
        let url = Frontend.API_GATEWAY + "/plantilla/nuevoJugador/"
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({
                "nombre_jugador": document.getElementById("form-persona-nombre").value,
                "apellidos_jugador": document.getElementById("form-persona-apellidos").value,
                "fechanac_jugador": document.getElementById("form-persona-fechanac").value,
                "anioganapremio_jugador": document.getElementById("form-persona-anioganapremio").value,
                "numcampeonatos_jugador": document.getElementById("form-persona-numcampeonatos").value
            }), // body data type must match "Content-Type" header
        })
        /*
        Error: No procesa bien la respuesta devuelta
        if (response) {
            const jugador = await response.json()
            alert(jugador)
        }
        */
        Plantilla.procesarJugadores();
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway " + error)
        //console.error(error)
    }
}

/**
 * Función para eliminar un jugador con el id indicado
 */
Plantilla.eliminar = async function () {
    try {
        let url = Frontend.API_GATEWAY + "/plantilla/eliminaJugador/"
        let id_jugador = document.getElementById("form-persona-id").value
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({
                "id_jugador": id_jugador
            }), // body data type must match "Content-Type" header
        })
        /*
        Error: No procesa bien la respuesta devuelta
        if (response) {
            const jugador = await response.json()
            alert(jugador)
        }
        */
        Plantilla.procesarJugadores();
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway " + error)
        //console.error(error)
    }
}