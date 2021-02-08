import axios from 'axios';
import { emit } from 'cluster';
import { setUser } from '../reducers/userReducer';

export const registration = async (email: string, password: string) => {
  try {
    const res = await axios.post(`http://localhost:5000/users/registration`, {
      email,
      password,
    });
    alert(res.data.message);
  } catch (e) {
    console.log(e.response);
  }
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/login`, {
        email,
        password,
      });
      // dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token);
      console.log(res.data);
    } catch (e) {
      console.log(e.response);
    }
  };
};
