import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Store from './components/Store';
import Policies from './components/Policies';
import NailArtist from './components/NailArtist'; // Importa el componente de Nail Artist
import Footer from './components/Footer'; // Importa el Footer
import inicialProductos from './components/bancoimagenes'
 
import TiendaVirtual from './view/TiendaVirtual';
import DetalleProducto from './view/DetalleProducto';
import ListaProductos from './view/ListaProductos';
import Producto from './view/Producto'




const App = () => {
  
  /* Métodos de Productos */
  const [productos, setProductos] = useState(inicialProductos);
  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };
  const editarProducto = (producto) => {
    console.log(producto)
    setProductos(prevProductos => 
      prevProductos.map(item => 
        item.id === producto.id ? { ...producto } : item
      )
    );
  };
  const eliminarProducto = (productoId) => {
    const nuevosProductos = productos.filter(item => item.id !== productoId);
    if (nuevosProductos !== -1) {
      setProductos(nuevosProductos);
    }
  };
  
  /* Métodos del Carrito */
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarAlCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (productoId) => {
    const index = carrito.findIndex(item => item.id === productoId);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };
   

  return (
    <Router>
      <Header />
      <div id="root">
      <div className="content"> {/* Contenedor para el contenido principal */}
      
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        <Route path='/tiendavirtual' element={
          <TiendaVirtual
            carrito={carrito}
            setCarrito={setCarrito}
            agregarAlCarrito={agregarAlCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
            vaciarAlCarrito={vaciarAlCarrito}
            productos={productos} />
        } />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Store" element={<Store />} />                  /*aqui la ruta de store*/
        <Route path="/faq" element={<Faq />} />  
        <Route path="/policies" element={<Policies />} />
        <Route path="/nail-artist" element={<NailArtist />} />

         {/* Rutas de la tienda */}

        <Route path='/producto/:id' element={<DetalleProducto productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/crear-producto' element={<Producto agregarProducto={agregarProducto} />} />
        <Route path='/edit-producto/:id' element={<Producto productos={productos} editarProducto={editarProducto} />} />
        <Route path='/lista-productos' element={<ListaProductos productos={productos} eliminarProducto={eliminarProducto}/>} />
      </Routes>
      </div>
      <Footer /> {/*  el Footer aquí */} 
      </div>
    </Router>
  );
}

export default App;