import axios from 'axios';

const productionUrl = ' http://localhost:3000/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
