const request = require('supertest');
const { startServer } = require('./app'); 

describe('GET /', () => {
 let server;

 beforeAll(() => {
    server = startServer(3003); // Inicia el servidor antes de los tests
 });

 afterAll(done => {
    server.close(done); // Detener el servidor después de los tests
 });

 it("Enviando respuesta desde node", async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Enviando respuesta desde node');
 });
});