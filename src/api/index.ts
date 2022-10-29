import axios from 'axios';
import config from 'react-native-config';
export const api = axios.create({
  baseURL: config.BASE_URL,
});
