import { API_URL } from '../constants';
import { httpHandler } from './index';

describe('Test Suite for utils', () => {

  const options = {
    url: API_URL,
    method: 'GET'
  };

  it('Should get 200 status from API', async () => {
    const response = await httpHandler(options);
    expect(response).toBeDefined();
  });

  it('Should throw `URL_MISSING` error when url not passed', (done) => {
    httpHandler().catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toBe('URL_MISSING');
      done();
    });
  });

  it('Should reject with error when invalid url is passed', (done) => {
    httpHandler({ url: 'http://locahost:1111' }).catch((error) => {
      expect(error).toBeDefined();
      expect(error.code).toBe('ENOTFOUND');
      done();
    });
  });

});


