import React from 'react';
import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Texto que colocaremos en el header que será 'About The US'" />
    </header>
  );
}

export default Header;