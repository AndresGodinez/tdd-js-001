const request = require('supertest');
const app = require('./app');
describe('Kata test', () => {
    it('should GET -> fizz buzz', function () {
        return request(app)
            .get('/kata')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then(response => {
                expect(response.body)
                    .toEqual(expect.arrayContaining([
                        expect.objectContaining({
                            result: 'test'
                        })
                    ]))
            })
    });
});
