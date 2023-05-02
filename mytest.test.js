import app from './app.js'
import request from 'supertest';


describe("get /pokemon",()=>{
	test('GET pokemon', async() => {

		const response = await request(app).get('/pokemon/bagon').send();
		expect(response.statusCode).toBe(200)
		
	  });
})

