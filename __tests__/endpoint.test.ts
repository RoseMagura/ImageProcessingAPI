import app from '../src/index';
import supertest from 'supertest';
import fs = require('fs');
import { process_image } from '../src/handle_sharp';

const request = supertest(app);
// Test get '/'
it('Checking endpoint basic access', async (done) => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Post image name and size through curl or Postman');
    done();
});

// Check 404 error code
it('Checking that entering undefined endpoint gives 404', async (done) => {
    const res = await request.get('/randomEndpoint');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Page Not Found');
    done();
});

// Test successful post
it('Checking that posting runs succesfully', async (done) => {
    // Delete pre-processed image if exists
    if (fs.existsSync('./src/views/processed_images/palmtunnel300x500.jpg')) {
        fs.unlinkSync('./src/views/processed_images/palmtunnel300x500.jpg');
    }
    const res = await request.post('/?name=palmtunnel&width=300&height=500');
    expect(res.status).toBe(200);
    expect(res.text).toBe(
        'Successfully processed image. Check views/processed_images'
    );
    done();
});

// Test image processing
it('Checking that image is correctly processed', () => {
    const result = process_image('palmtunnel', '300', '300');
    if (result) {
        console.log('correctly processed');
    }
    expect(
        fs.existsSync('./src/views/processed_images/palmtunnel300x300.jpg')
    ).toBe(true);
});

// Test unsuccessful post (image not found)
it('Checking that using wrong image name is correctly handled', async (done) => {
    const res = await request.post('/?name=randomImage&width=300&height=500');
    expect(res.status).toBe(200);
    expect(res.text).toBe('File not found. Please double-check spelling.');
    done();
});
