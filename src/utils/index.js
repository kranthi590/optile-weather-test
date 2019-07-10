import axios from 'axios';

export const httpHandler = (options = {}) => {
  return new Promise((resolve, reject) => {
    if (!options.url) {
      throw new Error('URL_MISSING');
    }
    axios({
      method: options.method || 'GET',
      url: options.url,
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
