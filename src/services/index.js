import axios from 'axios';

export const getWeather = (url) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url,
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
