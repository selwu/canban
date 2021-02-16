import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
// import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../reducers/userReducer';
import { RootState } from '../../utils/types';

const Navbar = () => {
  // const isAuth = useSelector((state: RootState) => state.user.isAuth);
  // const dispatch = useDispatch();

  const logoutHandler = () => {
    // dispatch(userLogout());
    localStorage.removeItem('token');
  };

  // useEffect(() => {
  //   console.log(isAuth);
  // }, [isAuth]);

  return (
    <header className="navbar">
      <div className="navbar__logo"></div>
      <h1 className="navbar__title">CLOUD SYS</h1>
      {/* {!isAuth && (
        <Link to="/login" className="navbar__link">
          Войти
        </Link>
      )}
      {!isAuth && (
        <Link to="/registration" className="navbar__link">
          Регистрация
        </Link>
      )}
      {isAuth && (
        <div className="navbar__link" onClick={logoutHandler}>
          Выход
        </div>
      )} */}
    </header>
  );
};

export default Navbar;
