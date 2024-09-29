import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp , FaInstagram, FaTiktok   } from 'react-icons/fa'; // Importar íconos de React Icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna de Dirección */}
        <div className="footer-column">
          
          <h2> Nail Art Studio</h2>
          <p>Dirección: Calle Pepito Diagonal Perez, Medellín - Colombia</p>
          <p>Email: contacto@nailartstudio.com</p>
          <p>Teléfono: (123) 456-7890</p>
        </div>

        {/* Columna de Redes Sociales */}
        <div className="footer-column">
          <div className="social-links">
            {/* Enlace a la pestaña de información sobre el nail artist */}
            <Link to="/nail-artist" className="nail-artist-link">Sobre la Nail Artist</Link>
              <a href="https://www.instagram.com/syvinails" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok  className="social-icon" /> Tiktok
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp  className="social-icon" /> WhatsApp
            </a>

            

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NAIL ART STUDIO . Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
