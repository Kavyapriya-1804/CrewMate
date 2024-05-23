import { CONFIGS } from '../config';

/**
 * contants for api
 */

const ApiConstants = {
  API_URL: "http://127.0.0.1:5000",
  API_HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  },
};

export default ApiConstants;