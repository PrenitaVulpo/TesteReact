import axios from 'axios';

const api = axios.create({
  baseURL: 'http://paguru-challenge.herokuapp.com/api/v1/',
  headers: { Authorization: 'token 8e81fe11efe2e9f25c29f2304971e633fbf1d405'}
});

export default api;