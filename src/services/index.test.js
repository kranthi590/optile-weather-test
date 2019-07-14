import { getWeather } from '../services';
import { API_URL } from '../constants';

describe('Test Suite for services', () => {

  it('Should get 200 status from API', async () => {
    const response = await getWeather(API_URL);
    expect(response).toBeDefined();
  });

  it('Should catch error', (done) => {
    getWeather().catch((error) => {
      expect(error).toBeDefined();
      done();
    });
  });
});
