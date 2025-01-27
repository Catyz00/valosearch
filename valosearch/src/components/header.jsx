import React, { useState } from "react";
import "./styles.css";

const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false); // Controla a visibilidade do menu
  const [isHamburguerActive, setIsHamburguerActive] = useState(false); // Controla o estado do ícone do hambúrguer

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
    setIsHamburguerActive(!isHamburguerActive);
  };

  return (
    <header className="header">
      {/* Ícone de hambúrguer */}
      <div
        className={`Hamburguer ${isHamburguerActive ? "active" : ""}`}
        onClick={toggleNavBar}
      >
        <div className={`linha ${isHamburguerActive ? "linhaX" : ""}`}></div>
        <div className={`linha ${isHamburguerActive ? "linhaX" : ""}`}></div>
        <div className={`linha ${isHamburguerActive ? "linhaX" : ""}`}></div>
      </div>

      {/* Barra de navegação */}
      <nav className={`navbar ${isNavBarVisible ? "navbarOn" : "navbarOff"}`}>
        <ul className="navlista">
          <li>
            <a href="#home" className="home links">
              HOME
            </a>
          </li>
          <li>
            <a href="#funcoes" className="funcoes links">
              FUNÇÕES
            </a>
          </li>
          <li>
            <a href="#sobre" className="sobre links">
              SOBRE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
