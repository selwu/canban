import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo"></div>
      <h1 className="navbar__title">CLOUD SYS</h1>
      <Link to="/login" className="navbar__link">
        Войти
      </Link>
      <Link to="/registration" className="navbar__link">
        Регистрация
      </Link>
    </header>
  );
};

export default Navbar;
