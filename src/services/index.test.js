import { getWeather } from '../services';

describe('Test Suite for services', () => {
  it('Should get 200 status from API', async () => {
    const response = await getWeather();
    expect(response).toBeDefined();
  });
});
