import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://news-ffcf3.firebaseio.com/'
});

export default instance;
