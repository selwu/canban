import axios from 'axios';
import { BASE_URL } from '../constants';

class ApiFiles {
  getFiles = async (dirId: any) => {
    try {
      const res = await axios.get(`${BASE_URL}files${dirId ? '?parent=' + dirId : ''}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.error(e.data.message);
    }
  };
}

export const apiFiles = new ApiFiles();
