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

     it('Devuelve MS Plantilla Lista Nombres', (done) => {
      supertest(app)
        .get('/listanombres')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
        assert(res.body.hasOwnProperty('data'));
        assert(res.body.data.length === 10);

        })
        .end((error) => { error ? done.fail(error) : done() })
    });

    it('Devuelve MS Plantilla Lista Nombres Alfabeticos', (done) => {
      supertest(app)
        .get('/listanombresalfabeticos')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('data'));
          assert(res.body.data.length === 10);
          // Verificar que los nombres están ordenados alfabéticamente
          const nombres = res.body.data.map(obj => obj.Nombre);
          const sortedNombres = [...nombres].sort();
          assert.deepStrictEqual(nombres, sortedNombres);

        })
        .end((error) => { error ? done.fail(error) : done() })
    });

    it('Devuelve MS Plantilla Lista Datos', (done) => {
      supertest(app)
        .get('/listadatos')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('data'));
          assert(res.body.data.length === 10);

        })
        .end((error) => { error ? done.fail(error) : done() })
    });

    it('Devuelve MS Plantilla Lista Datos Ordenados', (done) => {
      supertest(app)
        .get('/listadatosordenados')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('data'));
          assert(res.body.data.length === 10);
          // Verificar que los nombres están ordenados alfabéticamente
          const nombres = res.body.data.map(obj => obj.Nombre);
          const sortedNombres = [...nombres].sort();
          assert.deepStrictEqual(nombres, sortedNombres);

        })
        .end((error) => { error ? done.fail(error) : done() })
    });

    /*
    it('Devuelve MS Plantilla Modificar', (done) => {
      supertest(app)
        .get('/listanombresalfabeticos')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.hasOwnProperty('mensaje'));
          assert(res.body.mensaje === "Microservicio MS Plantilla: modificar");

        })
        .end((error) => { error ? done.fail(error) : done() })
    });
    */

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
          //console.log( res.body ); // Para comprobar qué contiene exactamente res.body
          assert(res.body.data[0].data.hasOwnProperty('Nombre'));
          assert(res.body.data[0].data.Nombre === "Carlos Soto Torres");

        })
        .end((error) => { error ? done.fail(error) : done(); }
        );
    });

  }) 
  
});


