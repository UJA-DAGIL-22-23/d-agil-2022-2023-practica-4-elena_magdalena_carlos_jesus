/**
 * @file server-spec.js 
 * @description Fichero con la especificación de pruebas para la aplicación API-gateway
 * Este fichero DEBE llamarse server-spec.js
 * Este fichero DEBE ubicarse en el subdirectorio spec/
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const supertest = require('supertest');
const assert = require('assert')
const app = require('../server');

describe('API Gateway: rutas estáticas', () => {
  describe('Rutas estáticas de MS Plantilla', () => {
    it('Devuelve MS Plantilla Home Page', (done) => {
      supertest(app)
        .get('/plantilla/')
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
        .get('/plantilla/acercade')
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
});

describe('BBDD Jugadores', () => {
  it(' > Obtener todos los nombres de los jugadores: debe tener un campo data que es un array de 12 objetos', (done) => {
    supertest(app)
      .get('/plantilla/getNombres')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        // console.log( "Get Todos Nombres Jugadores", res.body ); // Para comprobar qué contiene exactamente res.body
        assert(res.body.data.length === 12);
      })
      .end((error) => { error ? done.fail(error) : done() })
  });

  it(' > Obtener todos los jugadores: debe ser un array de 12 objetos', (done) => {
    supertest(app)
      .get('/plantilla/getTodos')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        // console.log( "Get Todos Jugadores", res.body ); // Para comprobar qué contiene exactamente res.body
        assert(res.body.data.length === 12);
      })
      .end((error) => { error ? done.fail(error) : done() })
  });

  it('Devuelve un jugador al consultar mediante getPorId', (done) => {
    supertest(app)
      .get('/plantilla/getPorId/358544323752493261') // Utilizamos un id de uno de los jugadores
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        // console.log( res.body ); // Para comprobar qué contiene exactamente res.body
        assert(res.body.data.nombre === 'Sergio'); // Este jugador debería de llamarse Sergio
      })
      .end((error) => { error ? done.fail(error) : done(); }
      );
  });
});