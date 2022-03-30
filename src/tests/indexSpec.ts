import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test my endpoint', () => {
  it('get the response statuscode', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('process an image', async () => {
    const imageResponse = await request.get(
      '/api?name=aaaaaaaa&width=700&height=700'
    );
    expect(imageResponse.status).toBe(200);
  });
});

import path from 'path';
import fsExtra from 'fs-extra';

const validImageName = 'default';
const notExistsResizedImagePath = path.join(
  __dirname + `./../../resized/${validImageName}.jpg`
);
const existResizedImagePath = path.join(
  __dirname + `./../../resized/${validImageName}-w200-h200.jpg`
);

describe('check for the image', () => {
  it('if it is successful image will be exists ..', async () => {
    const result = await fsExtra.existsSync(existResizedImagePath);
    expect(result).toBeTruthy();
  });

  it('if it is not successful image will not be exist ..', async () => {
    const result = await fsExtra.existsSync(notExistsResizedImagePath);
    expect(result).toBeFalsy();
  });
});
