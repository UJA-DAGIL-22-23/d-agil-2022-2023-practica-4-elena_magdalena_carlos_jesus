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
const TITULO_NOMBRES = "Listado de nombres de los jugadores de Golf"
const TITULO_LISTADO = "Listado de jugadores"
const TITULO_MUESTRA_JUGADOR = "Mostrar un jugador"
const TITULO_ANIADE_JUGADOR = "Añadir un jugador"

const datosDescargadosPrueba = {
    mensaje: "Mensaje de prueba descargado",
    autor: "Prueba de autor",
    email: "Prueba de email",
    fecha: "00/00/0000"
}

// Ejemplo de conjunto de jugadores
var jugadoresPrueba = {"data":[{"ref":{"@ref":{"id":"358541978933133516","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1679858016750000,"data":{"nombre":"Tiger","apellidos":"Woods","fecha_nac":{"dia":10,"mes":7,"anio":1976},"anio_gana_premio":[1998,1999],"num_campeonatos":8}},{"ref":{"@ref":{"id":"358544014023065805","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1679858006640000,"data":{"nombre":"John","apellidos":"Rahm","fecha_nac":{"dia":11,"mes":4,"anio":1974},"anio_gana_premio":[1997,2000],"num_campeonatos":6}},{"ref":{"@ref":{"id":"358544207663595725","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1679857997780000,"data":{"nombre":"Severiano","apellidos":"Ballesteros","fecha_nac":{"dia":2,"mes":3,"anio":1985},"anio_gana_premio":[2003,2004,2002],"num_campeonatos":5}},{"ref":{"@ref":{"id":"358544323752493261","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1679857988925000,"data":{"nombre":"Sergio","apellidos":"García","fecha_nac":{"dia":21,"mes":9,"anio":1980},"anio_gana_premio":[2008,2007],"num_campeonatos":10}},{"ref":{"@ref":{"id":"358544436411498701","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1679857978780000,"data":{"nombre":"Dustin","apellidos":"Johnson","fecha_nac":{"dia":13,"mes":5,"anio":1945},"anio_gana_premio":[1976,1977,1978,1979],"num_campeonatos":9}},{"ref":{"@ref":{"id":"358544534712352973","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1679857968515000,"data":{"nombre":"Rary","apellidos":"Mcllroy","fecha_nac":{"dia":18,"mes":10,"anio":1964},"anio_gana_premio":[1981,1985],"num_campeonatos":6}},{"ref":{"@ref":{"id":"358544661327904973","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1678193684810000,"data":{"nombre":"Phil","apellidos":"Mickelus","fecha_nac":{"dia":7,"mes":11,"anio":1975},"anio_gana_premio":[1988,1990],"num_campeonatos":4}},{"ref":{"@ref":{"id":"358544775008223437","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1678193793220000,"data":{"nombre":"Jack","apellidos":"Nickalaus","fecha_nac":{"dia":21,"mes":3,"anio":1994},"anio_gana_premio":[2010,2011],"num_campeonatos":8}},{"ref":{"@ref":{"id":"358544947023970508","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1678193957270000,"data":{"nombre":"Arnold","apellidos":"Palmer","fecha_nac":{"dia":17,"mes":2,"anio":2001},"anio_gana_premio":[2015,2016],"num_campeonatos":10}},{"ref":{"@ref":{"id":"358545011239813324","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1678194018510000,"data":{"nombre":"Justin","apellidos":"Thomas","fecha_nac":{"dia":17,"mes":6,"anio":1937},"anio_gana_premio":[1951,1954],"num_campeonatos":8}},{"ref":{"@ref":{"id":"358545085482139853","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1678194089310000,"data":{"nombre":"Lee","apellidos":"Westwoods","fecha_nac":{"dia":13,"mes":7,"anio":1962},"anio_gana_premio":[2018,2019],"num_campeonatos":10}},{"ref":{"@ref":{"id":"358545183252414669","collection":{"@ref":{"id":"jugadores","collection":{"@ref":{"id":"collections"}}}}}},"ts":1678194182555000,"data":{"nombre":"Ben","apellidos":"Hogan","fecha_nac":{"dia":11,"mes":19,"anio":1937},"anio_gana_premio":[1949,1958],"num_campeonatos":15}}]}

// Vectores de los resultados esperados en los tests
var jugadoresSinOrdenar = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
var jugadoresOrdenadosNombre = [ { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } } ]
var jugadoresOrdenadosApellidos = [ { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } } ]
var jugadoresOrdenadosFechaNac = [ { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } } ]
var jugadoresOrdenadosAniosGana = [ { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } } ]
var jugadoresOrdenadosNumCamp = [ { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } } ]

// Respuesta al actualizar los datos del primer jugador en jugadoresPrueba
var jugadorActualizadoPrueba = `
    <tr title="358541978933133516">
        <td>358541978933133516</td>
        <td>Tiger</td>
        <td>Woods</td>
        <td>10/7/1976</td>
        <td>1998,1999</td>
        <td>8</td>
        <td>
                    <div><a href="javascript:Plantilla.mostrar('358541978933133516')" class="opcion-secundaria mostrar">Mostrar</a></div>
        </td>
    </tr>
    `;

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

describe("Plantilla.mostrarNombres: ", function () {

    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            Plantilla.mostrarNombres()
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })
    
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            Plantilla.mostrarNombres(23)
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo data",
        function () {
            // Objeto vacío
            Plantilla.mostrarNombres({})
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()

            // Objeto sin campo data
            Plantilla.mostrarNombres({ foo: "bar" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra correctamente el título y el mensaje",
        function () {
            Plantilla.mostrarNombres({ data: ["Tiger", "Tails"] })
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search({ data: ["Tiger", "Tails"] }) >= 0).toBeTrue()
        })
})

describe("Plantilla.mostrarNombresOrdenados: ", function () {

    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            Plantilla.mostrarNombresOrdenados()
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })
    
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            Plantilla.mostrarNombresOrdenados(23)
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo data",
        function () {
            // Objeto vacío
            Plantilla.mostrarNombresOrdenados({})
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()

            // Objeto sin campo data
            Plantilla.mostrarNombresOrdenados({ foo: "bar" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra correctamente el título y el mensaje",
        function () {
            Plantilla.mostrarNombresOrdenados({ data: ["BBB", "AAA"] })
            expect(elementoTitulo.innerHTML).toBe(TITULO_NOMBRES)
            expect(elementoContenido.innerHTML.search({ data: ["AAA", "BBB"] }) >= 0).toBeTrue()
        })
})

describe("Plantilla.sustituyeTags: ", function () {

    it("actualiza correctamente los datos de un jugador en base a una plantilla",
        function () {
            expect(Plantilla.sustituyeTags(Plantilla.tablaJugadores.cuerpo, jugadoresPrueba.data[0])).toEqual(jugadorActualizadoPrueba)
        })
    
})

describe("Plantilla.actualiza: ", function () {

    it("actualiza correctamente los datos de un jugador",
        function () {
            expect(Plantilla.tablaJugadores.actualiza(jugadoresPrueba.data[0])).toEqual(jugadorActualizadoPrueba)
        })
    
})

describe("Plantilla.imprimeMuchosJugadores: ", function () {

    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            Plantilla.imprimeMuchosJugadores()
            expect(elementoTitulo.innerHTML).toBe(TITULO_LISTADO)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })
    
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            Plantilla.imprimeMuchosJugadores(23)
            expect(elementoTitulo.innerHTML).toBe(TITULO_LISTADO)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo data",
        function () {
            // Objeto vacío
            Plantilla.imprimeMuchosJugadores({})
            expect(elementoTitulo.innerHTML).toBe(TITULO_LISTADO)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()

            // Objeto sin campo data
            Plantilla.imprimeMuchosJugadores({ foo: "bar" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_LISTADO)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra correctamente el título y el mensaje",
        function () {
            Plantilla.imprimeMuchosJugadores(jugadoresPrueba)
            expect(elementoTitulo.innerHTML).toBe(TITULO_LISTADO)
            expect(elementoContenido.innerHTML.search(jugadoresPrueba) >= 0).toBeTrue()
        })
})

describe("Plantilla.ordenaJugadores: ", function () {

    it("no cambia el orden si no se le indica ningún criterio",
        function () {
            let vectorJugadores = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
            Plantilla.ordenaJugadores(vectorJugadores, NINGUNO)
            expect(vectorJugadores).toEqual(jugadoresSinOrdenar)
        })

    it("ordena el vector por el campo nombre",
        function () {
            let vectorJugadores = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
            Plantilla.ordenaJugadores(vectorJugadores, ORDENAR_NOMBRE)
            expect(vectorJugadores).toEqual(jugadoresOrdenadosNombre)
        })

    it("ordena el vector por el campo apellidos",
        function () {
            let vectorJugadores = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
            Plantilla.ordenaJugadores(vectorJugadores, ORDENAR_APELLIDOS)
            expect(vectorJugadores).toEqual(jugadoresOrdenadosApellidos)
        })

    it("ordena el vector por el campo fecha nacimiento",
        function () {
            let vectorJugadores = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
            Plantilla.ordenaJugadores(vectorJugadores, ORDENAR_FECHA_NAC)
            expect(vectorJugadores).toEqual(jugadoresOrdenadosFechaNac)
        })

    it("ordena el vector por el campo años gana premios",
        function () {
            let vectorJugadores = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
            Plantilla.ordenaJugadores(vectorJugadores, ORDENAR_ANIOS_GANA_PREMIOS)
            expect(vectorJugadores).toEqual(jugadoresOrdenadosAniosGana)
        })

    it("ordena el vector por el campo número de campeonatos",
        function () {
            let vectorJugadores = [ { "ref": { "@ref": { "id": "358541978933133516", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858016750000, "data": { "nombre": "Tiger", "apellidos": "Woods", "fecha_nac": { "dia": 10, "mes": 7, "anio": 1976 }, "anio_gana_premio": [ 1998, 1999 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544014023065805", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679858006640000, "data": { "nombre": "John", "apellidos": "Rahm", "fecha_nac": { "dia": 11, "mes": 4, "anio": 1974 }, "anio_gana_premio": [ 1997, 2000 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544207663595725", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857997780000, "data": { "nombre": "Severiano", "apellidos": "Ballesteros", "fecha_nac": { "dia": 2, "mes": 3, "anio": 1985 }, "anio_gana_premio": [ 2003, 2004, 2002 ], "num_campeonatos": 5 } }, { "ref": { "@ref": { "id": "358544323752493261", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857988925000, "data": { "nombre": "Sergio", "apellidos": "García", "fecha_nac": { "dia": 21, "mes": 9, "anio": 1980 }, "anio_gana_premio": [ 2008, 2007 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358544436411498701", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1679857978780000, "data": { "nombre": "Dustin", "apellidos": "Johnson", "fecha_nac": { "dia": 13, "mes": 5, "anio": 1945 }, "anio_gana_premio": [ 1976, 1977, 1978, 1979 ], "num_campeonatos": 9 } }, { "ref": { "@ref": { "id": "358544534712352973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376804750000, "data": { "nombre": "Rary", "apellidos": "Mcllroy", "fecha_nac": { "dia": 18, "mes": 10, "anio": 1964 }, "anio_gana_premio": [ 1981 ], "num_campeonatos": 6 } }, { "ref": { "@ref": { "id": "358544661327904973", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376859235000, "data": { "nombre": "Phil", "apellidos": "Mickelus", "fecha_nac": { "dia": 7, "mes": 11, "anio": 1975 }, "anio_gana_premio": [ 1990 ], "num_campeonatos": 4 } }, { "ref": { "@ref": { "id": "358544775008223437", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193793220000, "data": { "nombre": "Jack", "apellidos": "Nickalaus", "fecha_nac": { "dia": 21, "mes": 3, "anio": 1994 }, "anio_gana_premio": [ 2010, 2011 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358544947023970508", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678193957270000, "data": { "nombre": "Arnold", "apellidos": "Palmer", "fecha_nac": { "dia": 17, "mes": 2, "anio": 2001 }, "anio_gana_premio": [ 2015, 2016 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545011239813324", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194018510000, "data": { "nombre": "Justin", "apellidos": "Thomas", "fecha_nac": { "dia": 17, "mes": 6, "anio": 1937 }, "anio_gana_premio": [ 1951, 1954 ], "num_campeonatos": 8 } }, { "ref": { "@ref": { "id": "358545085482139853", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1678194089310000, "data": { "nombre": "Lee", "apellidos": "Westwoods", "fecha_nac": { "dia": 13, "mes": 7, "anio": 1962 }, "anio_gana_premio": [ 2018, 2019 ], "num_campeonatos": 10 } }, { "ref": { "@ref": { "id": "358545183252414669", "collection": { "@ref": { "id": "jugadores", "collection": { "@ref": { "id": "collections" } } } } } }, "ts": 1680376047980000, "data": { "nombre": "Ben", "apellidos": "Hogan", "fecha_nac": { "dia": 11, "mes": 12, "anio": 1937 }, "anio_gana_premio": [ 1949, 1958 ], "num_campeonatos": 15 } } ]
            Plantilla.ordenaJugadores(vectorJugadores, ORDENAR_NUM_CAMPEONATOS)
            expect(vectorJugadores).toEqual(jugadoresOrdenadosNumCamp)
        })        
})

describe("Plantilla.imprimeUnJugador: ", function () {

    it("muestra datos nulos cuando le pasamos un valor nulo",
        function () {
            Plantilla.imprimeUnJugador()
            expect(elementoTitulo.innerHTML).toBe(TITULO_MUESTRA_JUGADOR)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })
    
    it("muestra datos nulos cuando le pasamos un valor que no es un objeto",
        function () {
            Plantilla.imprimeUnJugador(23)
            expect(elementoTitulo.innerHTML).toBe(TITULO_MUESTRA_JUGADOR)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra datos nulos cuando le pasamos un objeto que no tiene campo data",
        function () {
            // Objeto vacío
            Plantilla.imprimeUnJugador({})
            expect(elementoTitulo.innerHTML).toBe(TITULO_MUESTRA_JUGADOR)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()

            // Objeto sin campo data
            Plantilla.imprimeUnJugador({ foo: "bar" })
            expect(elementoTitulo.innerHTML).toBe(TITULO_MUESTRA_JUGADOR)
            expect(elementoContenido.innerHTML.search(Plantilla.datosDescargadosNulos.mensaje) >= 0).toBeTrue()
        })

    it("muestra correctamente el título y el mensaje",
        function () {
            Plantilla.imprimeUnJugador(jugadoresPrueba.data[2])
            expect(elementoTitulo.innerHTML).toBe(TITULO_MUESTRA_JUGADOR)
            expect(elementoContenido.innerHTML.search(jugadoresPrueba[2]) >= 0).toBeTrue()
        })
})

describe("Plantilla.aniadeJugador: ", function () {

    it("muestra correctamente el formulario",
        function () {
            Plantilla.aniadeJugador()
            expect(elementoTitulo.innerHTML).toBe(TITULO_ANIADE_JUGADOR)
            expect(elementoContenido.innerHTML.search('formularioNuevoJugador') >= 0).toBeTrue()
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
