import { transformWeatherData } from './index';
import mockJson from '../mock-data/response.json';
import weatherDataJson from '../mock-data/weather-data.json';

describe('Test Suite for utils', () => {
  it('Should return empty json object if response is invalid', () => {
    expect(transformWeatherData()).toEqual({});
  });

  it('Should return valid array in expected format', () => {
    expect(transformWeatherData(mockJson)).toEqual(weatherDataJson);
  });
});
