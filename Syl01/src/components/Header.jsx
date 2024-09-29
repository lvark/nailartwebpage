import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // logo

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (

    <header>
      {/* Contenedor del logo */}

      <div className="logo-container">
        <img src={logo} alt="Salon Logo" className="logo" />
      </div>

      {/* Barra de navegación */}
      <nav className={isMobile ? "nav mobile" : "nav"}>
        <ul className="nav-links"> 
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/store">TIENDA</Link></li>
          <li><Link to="/schedule">AGENDA</Link></li>
          <li><Link to="/faq">DUDAS</Link></li>
          <li><Link to="/policies">POLITICAS</Link></li>
          <li><Link to="/contact">CONTACTO</Link></li>
        </ul>
      </nav>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>} {/* X para cerrar, ☰ para abrir */}
      </button>
    </header>
  );
}
export default Header;
