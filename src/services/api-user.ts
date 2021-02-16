import axios from 'axios';
import { BASE_URL } from '../constants';

class ApiUser {
  registration = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${BASE_URL}users/registration`, {
        email,
        password,
      });
      alert(res.data.message);
      return res.data;
    } catch (e) {
      console.log(e.response);
    }
  };

  login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${BASE_URL}users/login`, {
        email,
        password,
      });
      return res.data;
    } catch (e) {
      console.error(e.response);
    }
  };

  auth = async () => {
    try {
      const res = await axios.get(`${BASE_URL}users/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.data;
    } catch (e) {
      localStorage.removeItem('token');
      console.error(e.response);
    }
  };
}

export const apiUser = new ApiUser();
