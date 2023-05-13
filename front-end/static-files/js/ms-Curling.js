/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let PlantillaCurling = {};

// Plantilla de datosDescargados vacíos
PlantillaCurling.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

PlantillaCurling.plantillaCurlingTags = {
    "ID": "### ID ###",
    "NOMBRE_COMPLETO": "### NOMBRE_COMPLETO ###",
    "NOMBRE": "### NOMBRE ###",
    "APELLIDO": "### APELLIDO ###",
    "FECHA_NACIMIENTO": "### FECHA_NACIMIENTO ###",
    "PARTICIPACION_JUEGOS_OLIMPICOS": "### PARTICIPACION_JUEGOS_OLIMPICOS ###",
    "EQUIPO": "### EQUIPO ###",
    "CATEGORIAS_JUGADAS": "### CATEGORIAS_JUGADAS ###",
    "VICTORIAS": "### VICTORIAS ###",
    "DERROTAS": "### DERROTAS ###"
}


PlantillaCurling.descargarRuta = async function (ruta, callBackFn) {
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
PlantillaCurling.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Curling Home", datosDescargados.mensaje)
}


/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS Plantilla
 */
PlantillaCurling.mostrarAcercaDe = function (datosDescargados) {
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
    Frontend.Article.actualizar("Curling Acerca de", mensajeAMostrar)
}



/**
 * Función principal para responder al evento de elegir la opción "Home"
 */
PlantillaCurling.procesarHome = function () {
    this.descargarRuta("/plantillaCurling/", this.mostrarHome);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
PlantillaCurling.procesarAcercaDe = function () {
    this.descargarRuta("/plantillaCurling/acercade", this.mostrarAcercaDe);
}


/*
   Aqui vamos a implementar las funciones necesarias para la segunda historia de usuario
   Queremos imprimer por pantalla los nombres de los jugadores
 */

/**
 * @brief Creare la tabla para la primera Historia de Usuario, enseñaremos los nombres de los jugadores de nuestra base
 *        de datos
 * @constructor creamos la tabla que veremos en la pagina
 */
PlantillaCurling.TablaNombres = {}
PlantillaCurling.TablaNombres.CabeceraJugadores =
     `<table width="100%" class="Estilo_Nombres"> 
        <thead>           
            <th>NOMBRE</th>
            <th>APELLIDO</th>   
            <th>BOTON</th>                               
        </thead>
            <tbody>`;
PlantillaCurling.TablaNombres.CuerpoJugadores = `
            <tr title="${PlantillaCurling.plantillaCurlingTags.ID}">
                <td>${PlantillaCurling.plantillaCurlingTags.NOMBRE}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.APELLIDO}</td>
                 <td><div><a href="javascript:PlantillaCurling.mostrarUnJugador('${PlantillaCurling.plantillaCurlingTags.ID}')"
                            class="opcion-secundaria mostrar">Mostrar</a>
                     
                    </div>
                </td>
            </tr>`;
PlantillaCurling.TablaNombres.pie = `        </tbody>
</table>
`;

PlantillaCurling.sustituyeTags = function (plantilla_, jugador_Cu) {
    return plantilla_
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.ID, 'g'), jugador_Cu.ref['@ref'].id)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.NOMBRE, 'g'), jugador_Cu.data.nombre_jugador.nombre)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.APELLIDO, 'g'), jugador_Cu.data.nombre_jugador.apellido)
}
PlantillaCurling.TablaNombres.actualiza = function (curling) {
    return PlantillaCurling.sustituyeTags(this.CuerpoJugadores, curling)
}



PlantillaCurling.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + "/plantillaCurling/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    let vector = null
    if (response) {
        vector = await response.json()
        callBackFn(vector.data)
    }
}

/***
 * @param vector
 * @constructor
 */
PlantillaCurling.Nombres_Jugadores = function (vector){
    let msj = PlantillaCurling.TablaNombres.CabeceraJugadores
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += PlantillaCurling.TablaNombres.actualiza(e))
    }
    msj += PlantillaCurling.TablaNombres.pie
    Frontend.Article.actualizar("Listados de nombres de jugadores de curling" , msj)
}

PlantillaCurling.listarNombresCurling = function(){
    PlantillaCurling.recupera(PlantillaCurling.Nombres_Jugadores);
}

//-------------------------------
//Cuarta Historia de Usuario

PlantillaCurling.TablaCompleta = {}
PlantillaCurling.TablaCompleta.CabeceraCompleta =`
    <table class ="Estilo_Completo">
       <thead>
           <th>Nombre</th>
           <th>Apellido</th>
           <th>Fecha_Nacimiento</th>
           <th>Participacion Juegos Olimpicos</th>
           <th>Equipo</th>
           <th>Categorias Jugadas</th>
           <th>Victorias</th>
           <th>Derrotas</th> 
           <th>Boton</th>
        </thead>
       <tbody>`;
PlantillaCurling.TablaCompleta.CuerpoCompleto = `<tbody>
            <tr title="${PlantillaCurling.plantillaCurlingTags.ID}">
                <td>${PlantillaCurling.plantillaCurlingTags.NOMBRE}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.APELLIDO}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.FECHA_NACIMIENTO}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.PARTICIPACION_JUEGOS_OLIMPICOS}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.EQUIPO}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.CATEGORIAS_JUGADAS}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.VICTORIAS}</td>
                <td>${PlantillaCurling.plantillaCurlingTags.DERROTAS}</td>
                <td>
                    <div><a href="javascript:PlantillaCurling.editar()" class="opcion-secundaria mostrar">Editar</a></div></td>
            </tr>`;
PlantillaCurling.TablaCompleta.pieC =  `</tbody> </table>`;

PlantillaCurling.sustituyeTagsCompletos = function (plantilla_, jugador_Cu) {
    return plantilla_
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.ID, 'g'), jugador_Cu.ref['@ref'].id)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.NOMBRE  , 'g'), jugador_Cu.data.nombre_jugador.nombre )
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.APELLIDO  , 'g'), jugador_Cu.data.nombre_jugador.apellido )
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.FECHA_NACIMIENTO, 'g'), jugador_Cu.data.fecha_nacimiento.dia + "/" + jugador_Cu.data.fecha_nacimiento.mes )
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.PARTICIPACION_JUEGOS_OLIMPICOS, 'g'), jugador_Cu.data.participacion_juegos_olimpicos)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.EQUIPO, 'g'), jugador_Cu.data.equipo)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.CATEGORIAS_JUGADAS, 'g'), jugador_Cu.data.categorias_jugadas)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.VICTORIAS, 'g'), jugador_Cu.data.victorias)
        .replace(new RegExp(PlantillaCurling.plantillaCurlingTags.DERROTAS, 'g'), jugador_Cu.data.derrotas)
}
PlantillaCurling.TablaCompleta.actualiza_2 = function (curling) {
    return PlantillaCurling.sustituyeTagsCompletos(this.CuerpoCompleto, curling)
}

/***
 * @param vec_4
 * @constructor
 */
PlantillaCurling.TablaCompletaJugadores = function (vec_4){
    let x = PlantillaCurling.TablaCompleta.CabeceraCompleta
    if (vec_4 && Array.isArray(vec_4)){
         vec_4.forEach(e => x += PlantillaCurling.TablaCompleta.actualiza_2(e))
    }
    x += PlantillaCurling.TablaCompleta.pieC
    Frontend.Article.actualizar("Listado completo de los jugadores de curling" , x)
}

PlantillaCurling.listadoCompleto = function (){
    PlantillaCurling.recupera(PlantillaCurling.TablaCompletaJugadores);
}

//-------------------------------------------------
//---------Historia de usuario 3-------------------


PlantillaCurling.Ordenamos_Nombres = async function (callbackFn){
    let response = null;
    try {
        const url = Frontend.API_GATEWAY + "/plantillaCurling/getTodos"
        response = await fetch(url)
    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    let nombre_Curling = null;
    if (response){
        nombre_Curling = await response.json()
        nombre_Curling.data.sort((a,b)=>{
            //Devuelve -1 si el a esta despues del b
            if (a.data.nombre_jugador.nombre < b.data.nombre_jugador.nombre){
                return -1;
            }
            //Devuelve 1 si el a esta antes que el b
            if (a.data.nombre_jugador.nombre > b.data.nombre_jugador.nombre){
                return 1;
            }
            //Devuelve 0 si son iguales
            return 0;
        });
    callbackFn(nombre_Curling.data)
    }
}

PlantillaCurling.listaOrdenada = function(){
    PlantillaCurling.Ordenamos_Nombres(PlantillaCurling.Nombres_Jugadores);
}

//----------------------------------------------------------
//-------------HISTORIA DE USUARIO 5------------------------

PlantillaCurling.Ordena = async function (callbackFn, preferencia) {
    let response = null;
    try {
        const url = Frontend.API_GATEWAY + "/plantillaCurling/getTodos"
        response = await fetch(url)
    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    let vector_objetos = null;
    if (response) {
        vector_objetos = await response.json()
        if (preferencia == 'nombre') {
            vector_objetos.data.sort((a, b) => {
                if (a.data.nombre_jugador.nombre < b.data.nombre_jugador.nombre) {
                    return -1;
                }
                if (a.data.nombre_jugador.nombre > b.data.nombre_jugador.nombre) {
                    return 1;
                }
                return 0;
            });
        }
        if (preferencia == 'apellido'){
            vector_objetos.data.sort((a, b) => {
                if (a.data.nombre_jugador.apellido < b.data.nombre_jugador.apellido) {
                    return -1;
                }
                if (a.data.nombre_jugador.apellido > b.data.nombre_jugador.apellido) {
                    return 1;
                }
                return 0;
            });
        }
        if (preferencia == 'fecha_nacimiento'){
            vector_objetos.data.sort((a, b) => {
                if (a.data.fecha_nacimiento.dia != b.data.fecha_nacimiento.dia){
                    return a.data.fecha_nacimiento.dia - b.data.fecha_nacimiento.dia;
                } if (a.data.fecha_nacimiento.dia == b.data.fecha_nacimiento.dia){
                    if (a.data.fecha_nacimiento.mes != b.data.fecha_nacimiento.mes){
                        return a.data.fecha_nacimiento.mes - b.data.fecha_nacimiento.mes;
                    }
                }
            });
        }
        if (preferencia == 'categorias_jugadas'){
            vector_objetos.data.sort((a, b) => {
                if (a.data.categorias_jugadas < b.data.categorias_jugadas) {
                    return -1;
                }
                if (a.data.categorias_jugadas> b.data.categorias_jugadas) {
                    return 1;
                }
                return 0;
            });
        }
        if (preferencia == 'victorias'){
            vector_objetos.data.sort((a, b) => {
                return a.data.victorias - b.data.victorias;
            });
        }
        if (preferencia == 'derrotas'){
            vector_objetos.data.sort((a, b) => {
                return a.data.derrotas - b.data.derrotas;
            });
        }
        callbackFn(vector_objetos.data)
    }
}

PlantillaCurling.listaOrdenadaC = function(preferencia){
    PlantillaCurling.Ordena(PlantillaCurling.TablaCompletaJugadores, preferencia);
}

//------------------------------------------------------
//-------------Historia Usuario 6-----------------------
PlantillaCurling.jugadorMostrado = null
PlantillaCurling.formulario_form = {
    ID: "form-jugador-id",
    NOMBRE: "form-jugador-nombre",
    APELLIDOS: "form-jugador-apellido",
    FECHA_NACIMIENTO: "form-jugador-fecha_nacimiento",
    PARTICIPACION_JUEGOS_OLIMPICOS: "form-jugador-participacion_juegos_olimpicos",
    EQUIPO: "form-jugador-equipo",
    CATEGORIAS_JUGADAS: "form-jugador-categorias_jugadas",
    VICTORIAS: "form-jugador-victorias",
    DERROTAS: "form-jugador-derrotas"
}
PlantillaCurling.plantillaFormularioJugadorCurling = {}
PlantillaCurling.plantillaFormularioJugadorCurling.formulario = `
<table  class="listado_jugadores">
    <thead>
        <th>ID</th>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>FECHA_NACIMIENTO</th>      
        <th>PARTICIPACION JUEGOS OLIMPICOS</th>
        <th>EQUIPO</th>
        <th>CATEGORIAS_JUGADAS</th>
        <th>VICTORIAS</th>
        <th>DERROTAS</th>
    </thead>
    <tbody>
        <tr title="${PlantillaCurling.plantillaCurlingTags.ID}">
            <td><input type="text" class="form-jugador-elemento disabled" disabled id="form-jugdor-id" required value="${PlantillaCurling.plantillaCurlingTags.ID}" name="id_jugador"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-nombre" required value="${PlantillaCurling.plantillaCurlingTags.NOMBRE}" name="nombre_jugador"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-apellidos" required value="${PlantillaCurling.plantillaCurlingTags.APELLIDOS}" name="apellidos_JUGADOR"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-fecha_nacimiento" required value="${PlantillaCurling.plantillaCurlingTags.FECHA_NACIMIENTO}" name="fecha_nacimiento_jugador"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-participacion_juegos_olimpicos" required value="${PlantillaCurling.plantillaCurlingTags.PARTICIPACION_JUEGOS_OLIMPICOS}" name="participacion_juegos_olimpicos"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-equipo" required value="${PlantillaCurling.plantillaCurlingTags.EQUIPO}" name="equipo"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-categorias_jugadas" required value="${PlantillaCurling.plantillaCurlingTags.CATEGORIAS_JUGADAS}" name="categorias_jugadas"/></td>
            <td><input type="text" class="form-jugadorelemento editable" disabled id="form-jugador-victorias required value="${PlantillaCurling.plantillaCurlingTags.VICTORIAS}" name="victorias"/></td>
            <td><input type="text" class="form-jugador-elemento editable" disabled id="form-jugador-derrotas" required value="${PlantillaCurling.plantillaCurlingTags.DERROTAS}" name="derrotas"/></td>
        </tr>
    </tbody>
</table>
</form>`;

PlantillaCurling.recuperaUnJugador = async function (idJugador, callBackFn) {
    try {
        const url = Frontend.API_GATEWAY + "/plantillaCurling/getPorId/" + idJugador
        const response = await fetch(url);
        if (response) {
            const jugador = await response.json()
            callBackFn(jugador)
        }
    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }
}

PlantillaCurling.plantillaFormularioJugadorCurling.actualiza_3 = function (jugador) {
    return PlantillaCurling.sustituyeTags(this.formulario, jugador);
}
PlantillaCurling.JugadorCurlingComoFormulario = function (jugador) {
    return PlantillaCurling.plantillaFormularioJugadorCurling.actualiza_3( jugador );
}
PlantillaCurling.imprimeUnJugador = function (jugador) {
    let msj = PlantillaCurling.JugadorCurlingComoFormulario(jugador);
    Frontend.Article.actualizarBoton("Mostrar datos de un jugador", msj)
    PlantillaCurling.almacenaJugadorCurling(jugador)
}
PlantillaCurling.almacenaJugadorCurling = function (jugador) {
    PlantillaCurling.jugadorMostrado = jugador;
}
PlantillaCurling.mostrar = function (idJugador) {
    this.recuperaUnJugador(idJugador, this.imprimeUnJugador);
}
PlantillaCurling.jugadorComoTabla = function (jugador) {
    return PlantillaCurling.TablaNombres.CabeceraJugadores
        + PlantillaCurling.TablaNombres.actualiza(jugador)
        + PlantillaCurling.TablaNombres.pie;
}

//--------------------------------------------------
//------------------Historia de Usuario 13-----------

PlantillaCurling.PermiteModificar = function (permiso){
    permiso = (typeof permiso === "undefined" || permiso === null)?true : permiso
    for (let nombre in PlantillaCurling.form){
        document.getElementById(PlantillaCurling.form(nombre)).disabled = permiso
    }
    return this
}

PlantillaCurling.ImpideModificar = function (){
    PlantillaCurling.PermiteModificar(true)
    return this
}
PlantillaCurling.PermiteModificar = function(){
    PlantillaCurling.PermiteModificar(false)
    return this
}

PlantillaCurling.opcionesAMostrar = function (classname, mostrar){
    let opciones = document.getElementsByClassName(classname)
    let claseQuitar = mostrar ? Frontend.CLASS_OCULTAR : Frontend.CLASS_MOSTRAR
    let claseSumar = mostrar ? Frontend.CLASS_OCULTAR : Frontend.CLASS_MOSTRAR
    for (let i = 0; i < opciones.length; i++){
        Frontend.borrar(opciones[i], claseQuitar).sumarTitulo(opciones[i],claseSumar)
    }
    return this
}

PlantillaCurling.ocultarOpcionesSecundarias = function () {
    this.opcionesAMostrar("opcion-secundaria", false)
    return this
}
PlantillaCurling.mostrarOpcionesSecundarias = function () {
    this.opcionesAMostrar("opcion-secundaria", true)
    return this
}
PlantillaCurling.mostrarOcionesTerciariasEditar = function () {
    this.opcionesAMostrar("opcion-terciaria editar", true)
    return this
}
PlantillaCurling.ocultarOcionesTerciariasEditar = function () {
    this.opcionesAMostrar("opcion-terciaria editar", false)
    return this
}

PlantillaCurling.editar = function () {
    this.ocultarOpcionesSecundarias()
    this.mostrarOcionesTerciariasEditar()
    this.PermiteModificar()
}
PlantillaCurling.cancelar = function () {
    this.almacenaJugadorCurling(this.recuperarDatos ())
    this.ImpideModificar()
    this.ocultarOcionesTerciariasEditar()
    this.mostrarOpcionesSecundarias()
}
PlantillaCurling.guardar = async function () {
    try {
        let url = Frontend.API_GATEWAY + "/plantillaCurling/setTodo/"
        let id_Curling = document.getElementById("form-jugador-id").value
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                "id_jugador": id_Curling,
                "nombre_jugador": document.getElementById("form-jugador-nombre").value,
                "apellidos_jugador": document.getElementById("form-jugador-apellidos").value,
                "f_nac_deportista": document.getElementById("form-deportista-fecha_nacimiento").value,
                "participacion_juegos_olimpicos": document.getElementById("form-jugador-participacion_juegos_olimpicos").value,
                "equipo": document.getElementById("form-jugador-equipo").value,
                "categorias_jugadas": document.getElementById("form-jugador-categorias_jugadas").value,
                "victorias": document.getElementById("form-jugador-victorias").value,
                "derrotas": document.getElementById("form-jugador-derrotas").value,
            }),
        })
        PlantillaCurling.mostrar(id_Curling)
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway " + error)
    }
}
PlantillaCurling.recuperarDatos = function () {
    return this.jugadorMostrado;
}

