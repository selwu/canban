import axios from 'axios';

export const getFiles = async (dirId: any) => {
  return async (dispatch: any) => {
    try {
      const res = await axios.get(`http://localhost:5000/files${dirId ? '?parent=' + dirId : ''}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(res.data);
    } catch (e) {
      console.error(e.data.message);
    }
  };
};
