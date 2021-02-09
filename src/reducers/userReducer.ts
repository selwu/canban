const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setUser = (user: any) => ({ type: SET_USER, payload: user });
export const userLogout = () => ({ type: LOGOUT });
