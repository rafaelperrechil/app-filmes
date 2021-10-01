import axios from "axios";

export const key = '91937e5fff1ce57112476186262258d3';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3';
});

export default api;