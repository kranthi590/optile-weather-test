import { transformWeatherData, convertKelvinToCelsius, convertKelvinToFahrenheit } from './index';
import mockJson from '../mock-data/response.json';
import weatherDataJson from '../mock-data/weather-data.json';

describe('Test Suite for utils', () => {

  it('Should return empty json object if response is invalid', () => {
    expect(transformWeatherData()).toEqual([]);
  });

  it('Should return valid array in expected format', () => {
    expect(transformWeatherData(mockJson)).toEqual(weatherDataJson);
  });

  it('Should get value in fahrenheit', () => {
    expect(convertKelvinToFahrenheit(300)).toEqual(80);
  });

  it('Should throw error when empty param is passed to convertKelvinToFahrenheit', () => {
    try {
      convertKelvinToFahrenheit(-300);
    } catch (error) {
      expect(error.message).toEqual('below absolute zero (0 K)');
    }
  });

  it('Should get value in Celsius', () => {
    expect(convertKelvinToCelsius(300)).toEqual(26.85);
  });

  it('Should throw error when empty param is passed to convertKelvinToCelsius', () => {
    try {
      convertKelvinToCelsius(-300);
    } catch (error) {
      expect(error.message).toEqual('below absolute zero (0 K)');
    }
  });

});
