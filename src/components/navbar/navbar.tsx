import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
// import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../reducers/userReducer';
import { RootState } from '../../utils/types';

const Navbar = () => {
  // const isAuth = useSelector((state: RootState) => state.user.isAuth);
  // const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);


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
      {!loggedIn && (
        <Link to="/login" className="navbar__link">
          Войти
        </Link>
      )}
      {!loggedIn && (
        <Link to="/registration" className="navbar__link">
          Регистрация
        </Link>
       )} 
       {loggedIn && (
        <div className="navbar__link" onClick={logoutHandler}>
          Выход
        </div>
      )} 
    </header>
  );
};

export default Navbar;
