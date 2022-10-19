import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.covid19api.com/summary',
});

const fetchAllApi = () => API.get();

export default fetchAllApi;
