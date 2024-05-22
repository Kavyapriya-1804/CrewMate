import Axios from 'axios';
import ApiConstants from '../constants/apiConstants';
/**
 * ApiClientHelper is used to create axios instance with base url for reusing purpose
 */
const ApiClientHelper = Axios.create({
  baseURL: ApiConstants.API_URL,
  headers: ApiConstants.API_HEADERS,
});

export default ApiClientHelper;
