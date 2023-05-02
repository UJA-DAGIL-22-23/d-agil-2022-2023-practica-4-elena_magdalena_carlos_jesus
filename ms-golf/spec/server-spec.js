/**
 * @file server-spec.js
 * @description Fichero con la especificación de las pruebas TDD para server.js del MS MS Plantilla
 *              Este fichero DEBE llamarse server-spec.js
 *              Este fichero DEBE ubicarse en el subdirectorio spec/
 * @author Víctor M. Rivas Santos <vrivas@ujaen.es>
 * @date 03-Feb-2023
 */


const supertest = require('supertest');
const assert = require('assert')
const app = require('../server');

/**
 * Test para las rutas "estáticas": / y /acerdade
 */
describe('Servidor PLANTILLA:', () => {
  describe('Rutas / y /acercade', () => {
    it('Devuelve MS Plantilla Home Page', (done) => {
      supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('mensaje'));
          assert(res.body.mensaje === "Microservicio MS Plantilla: home");

        })
        .end((error) => { error ? done.fail(error) : done() })
    });
    it('Devuelve MS Plantilla Acerca De', (done) => {
      supertest(app)
        .get('/acercade')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('mensaje'));
          assert(res.body.mensaje === "Microservicio MS Plantilla: acerca de");

        })
        .end((error) => { error ? done.fail(error) : done() })
    });
  })

  /**
   * Tests para acceso a la BBDD
   */
  describe('Acceso a BBDD:', () => {
    it('Devuelve ¿¿¿ VALOR ESPERADO ??? al consultar mediante test_db', (done) => {
      supertest(app)
        .get('/test_db')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( res.body.data[0] ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data[0].data.hasOwnProperty('num_campeonatos'));
          assert(res.body.data[0].data.num_campeonatos === 8);

        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });

    it('Devuelve un vector de tamaño 12 al consultar mediante getNombres', (done) => {
      supertest(app)
        .get('/getNombres')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          // console.log( res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data.length === 12);
        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });

    it('Devuelve un vector de tamaño 12 al consultar mediante getTodos', (done) => {
      supertest(app)
        .get('/getTodos')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          // console.log( res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data.length === 12);
        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });

    it('Devuelve un jugador al consultar mediante getPorId', (done) => {
      supertest(app)
        .get('/getPorId/358544323752493261') // Utilizamos un id de uno de los jugadores
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          // console.log( res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data.nombre === 'Sergio'); // Este jugador debería de llamarse Sergio
        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });

    it('Devuelve nombre cambiado al recuperar los datos del jugador con id 358541978933133516 mediante setNombre', (done) => {
      const NOMBRE_TEST= 'Tiger'
      const jugador = {
        id_jugador: '358541978933133516',
        nombre_jugador: NOMBRE_TEST,  
      };
      supertest(app)
        .post('/setNombre')
        .send(jugador)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "Server-spec , /setNombre res.body", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data.hasOwnProperty('nombre'));
          assert(res.body.data.nombre === NOMBRE_TEST);
        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });

    /*
      IMPORTANTE: Este test introduce un nuevo jugador en la base de datos por tanto, está comentado para que no provoque errores
      en el resto de test definidos

    it('Devuelve nuevo jugador creado mediante nuevoJugador', (done) => {
      const jugador = {
        nombre_jugador: "Prueba",
        apellidos_jugador: "Prueba",
        fechanac_jugador: "14/3/1942",
        anioganapremio_jugador: "1991,2006",
        numcampeonatos_jugador: 3
      };
      supertest(app)
        .post('/nuevoJugador')
        .send(jugador)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "Server-spec , /setNombre res.body", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data.hasOwnProperty('nombre'));
          assert(res.body.data.nombre === "Prueba");
        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });
    */

    /*
      IMPORTANTE: Este test elimina un jugador en la base de datos por tanto, está comentado para que no provoque errores
      en el resto de test definidos

    it('Elimina jugado mediante eliminaJugador', (done) => {
      const jugador = {
        id_jugador: '358541978933133588'
      };
      supertest(app)
        .post('/eliminaJugador')
        .send(jugador)
        .expect(200)
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });
    */

  })  
});


