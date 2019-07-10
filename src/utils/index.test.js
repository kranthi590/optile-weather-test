import { API_URL } from '../constants';
import {httpHandler} from './index';

describe('Test Suite for utils', () => {

  it('Should get data from API', async () => {
    const options = {
      url: API_URL,
      method: 'GET'
    };
    const response = httpHandler(options);
    expect(response).toBeDefined();
  });

});


