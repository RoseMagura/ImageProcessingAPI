import app from '../src/index';
import supertest from 'supertest';

const request = supertest(app);
// it('Checking endpoint basic access', async (done) => {
//   const res = await request.get('/');
//   expect(res.status).toBe(200);
//   expect(res.text).toBe('Post image name and size through curl or Postman');
//   done();
// });

// // Check 404 error code
// it('Checking that entering undefined endpoint gives 404', async (done) => {
//     const res = await request.get('/randomEndpoint');
//     expect(res.status).toBe(404);
//     expect(res.text).toBe('Page Not Found');
//     done();
// });

// TODO: Test successful post
it('Checking that posting succesfully processes image', async (done) => {
    const res = await request.post('/?name=palmtunnel&width=300&height=500');
    expect(res.status).toBe(200);

})

// TODO: Test image processing 

// Test unsuccessful post (image not found)
