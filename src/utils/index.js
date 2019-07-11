import moment from 'moment';
import { TEMP_TYPES } from '../constants';

export const isMobile = (size) => size < 767;
//  export const isTablet = (size) => size > 767 && size < 1024;
//  export const isDesktop = (size) => size > 1024;

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_DISPLAY_FORMAT = 'MMMM Do YYYY';
const DATE_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'HH:mm:ss';
const TIME_DISPLAY_FORMAT = 'hh:mm A';

export const transformWeatherData = (response) => {

  const weatherData = {};

  if (!response || !response.list) {
    return weatherData;
  }

  response.list.forEach((weatherDataByDate) => {
    const parsedDate = moment(weatherDataByDate.dt_txt, DATE_TIME_FORMAT);
    const date = parsedDate.format(DATE_FORMAT);
    if (!weatherData[date]) {
      weatherData[date] = {
        displayDate: parsedDate.format(DATE_DISPLAY_FORMAT),
        weatherByHours: []
      };
    }
    weatherData[date].weatherByHours.push({
      hour: parsedDate.format(TIME_DISPLAY_FORMAT),
      [TEMP_TYPES.CELCIUS]: convertKelvinToCelsius(weatherDataByDate.main.temp),
      [TEMP_TYPES.KELVIN]: weatherDataByDate.main.temp,
      [TEMP_TYPES.FAHRENHEIT]: convertKelvinToFahrenheit(weatherDataByDate.main.temp)
    });
  });

  Object.keys(weatherData).forEach((key) => {
    let celciusSum = 0, fahrenheitSum = 0;
    weatherData[key].weatherByHours.forEach((hourTemp) => {
      celciusSum += hourTemp[TEMP_TYPES.CELCIUS];
      fahrenheitSum += hourTemp[TEMP_TYPES.FAHRENHEIT];
    });
    weatherData[key][TEMP_TYPES.CELCIUS] = ((celciusSum) / weatherData[key].weatherByHours.length).toFixed(2);
    weatherData[key][TEMP_TYPES.FAHRENHEIT] = ((fahrenheitSum) / weatherData[key].weatherByHours.length).toFixed(2);
  });

  return weatherData;
};

export const convertKelvinToCelsius = (kelvin) => {
  if (kelvin < 0) {
    throw new Error('below absolute zero (0 K)');
  } else {
    return parseFloat((kelvin - 273.15).toFixed(2));
  }
};

export const convertKelvinToFahrenheit = (kelvin) => {
  if (kelvin < 0) {
    throw new Error('below absolute zero (0 K)');
  } else {
    return parseFloat(Math.floor(convertKelvinToCelsius(kelvin) * (9 / 5) + 32).toFixed(2));
  }
};
