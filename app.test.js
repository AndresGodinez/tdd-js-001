const request = require('supertest');
const app = require('./app');
describe('Todos API', () => {
    it('GET /todos -> array todos ', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    expect(response.body)
                        .toEqual(expect.arrayContaining([
                            expect.objectContaining({
                                name: expect.any(String),
                                completed: expect.any(Boolean)
                            })
                        ]))
                }
            )
    })
    it('GET /todos/id -> specific todo item', () => {
        return request(app)
            .get('/todos/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    expect(response.body)
                    expect.objectContaining({
                        name: expect.any(String),
                        completed: expect.any(Boolean)
                    })
                }
            )
    })
    it('GET /todos/id -> 404 if not found', () => {
        return request(app).get('/todos/9').expect(404)
    })
    it('POST /todos -> create todo item', () => {
        return request(app).post('/todos').send({
            name: 'do something'
        }).expect('Content-Type', /json/).expect(201).then((response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    name: 'do something',
                    completed: false
                })
            )
        })
    })
    it('POST /todos --validate body request', function () {
        return request(app).post('/todos').send({name: 123}).expect(422)
    });
})
