import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const Nav = () => {
  const location = useLocation();

  return (
    <nav className="main-nav">
      
      <ul> 
        <li className="estilo-admin">----OPCIONES ADMINISTRATIVAS --- </li>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/tiendavirtual">Volver a Tienda </Link>
        </li>
        <li className={location.pathname === '/crear-producto' ? 'active' : ''}>
          <Link to="/crear-producto">Crear Producto</Link>
        </li>
        <li className={location.pathname === '/lista-productos' ? 'active' : ''}>
          <Link to="/lista-productos">Lista de  Productos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;