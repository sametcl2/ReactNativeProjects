const apiURL = 'https://ibb-acikveri-api.herokuapp.com/';

import {create} from 'apisauce';

// define the api
const api = create({
  baseURL: apiURL,
  headers: {},
});
