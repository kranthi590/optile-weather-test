import axios from 'axios';

export const getWeather = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};
