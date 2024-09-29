import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Policies from './components/Policies';
import NailArtist from './components/NailArtist'; // Importa el componente de Nail Artist


import Footer from './components/Footer'; // Importa el Footer


function App() {
  return (
    <Router>
      <Header />
      <div id="root">
      <div className="content"> {/* Contenedor para el contenido principal */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policies" element={<Policies />} />
        {/* Nueva ruta para la pestaña del Nail Artist */}
        <Route path="/nail-artist" element={<NailArtist />} />
      </Routes>
      </div>
      <Footer /> {/*  el Footer aquí */} 
      </div>
    </Router>
  );
}

export default App;
