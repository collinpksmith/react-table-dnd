import axios from 'axios';

// let baseURL = '/api/v1';
let baseURL = process.env.REACT_APP_API_URL + '/api/v1';
if (process.env.NODE_ENV === 'development') {
  baseURL = process.env.REACT_APP_API_URL + '/api/v1';
}
const instance = axios.create({
  baseURL,
});
export default instance;
