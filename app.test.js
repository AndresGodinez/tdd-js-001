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
    })

    it('POST /validation service with charge', () => {
        return request(app)
            .post('/validation/')
            .send({warranty: 0})
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    expect(response.body)
                        .toEqual(expect.objectContaining({
                                value: '151'
                            })
                        )
                }
            )
    })

    it('POST /validation warranty', () => {
        return request(app)
            .post('/validation/')
            .send({warranty: 1})
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    expect(response.body)
                        .toEqual(expect.objectContaining({
                                value: '101'
                            })
                        )
                }
            )
    })

    it('POST /validation extended warranty', () => {
        return request(app)
            .post('/validation/')
            .send({warranty: 2})
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    expect(response.body)
                        .toEqual(expect.objectContaining({
                                value: '111'
                            })
                        )
                }
            )
    })

    it('POST /validation extended warranty and warranty', () => {
        return request(app)
            .post('/validation/')
            .send({warranty: 3})
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    expect(response.body)
                        .toEqual(expect.objectContaining({
                                value: '101'
                            })
                        )
                }
            )
    })

    it('POST /get csrf token', () => {
        return request(app)
            .post('/protection/form')
            .send()
            .expect('Content-Type', /json/)
            .expect(200)
            .then(
                (response) => {
                    console.log({response});

                    
                    expect(response.body)
                        .toEqual(expect.objectContaining({
                                value: '1'
                            })
                        )
                }
            )
    });

})
