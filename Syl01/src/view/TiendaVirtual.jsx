import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import Nav from '../Components/Nav';
import {FaShoppingCart} from 'react-icons/fa'; // Importar íconos de React Icons


const TiendaVirtual = ({ productos, carrito, agregarAlCarrito, vaciarAlCarrito, eliminarDelCarrito }) => {

    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className='principal'>
            <Nav />
            <div className="container-tienda">
             
                <div >
                    <input
                        type="text"
                        placeholder="Buscar productos"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="buscador-input"
                    />
                </div>

                <div className="productos-grid">
                    {productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
                        <ProductCard
                            key={producto.id}
                            producto={producto}
                            onAgregarAlCarrito={agregarAlCarrito}
                        />
                    )) : (
                        <p> No se encontro este producto </p>
                    )}
                </div>

                <div className="carrito">
                    <FaShoppingCart size={30} color="#d93672" />
                    <h2> TU CARRITO DE COMPRAS </h2>  
                    <div className="boton-agregar">
                        <span>{carrito.length} artículos</span>
                        <button className='boton-eliminar' onClick={vaciarAlCarrito}>Vaciar</button>
                    </div>
                    <ul className="cart-container">
                        {carrito.map((item, index) => (
                            <div key={index} className="carrito-item">
                                <img
                                    src={item.imagen}
                                    alt={item.nombre}
                                    className="carrito-item-imagen"
                                />
                                <span>{item.nombre} - ${item.precio}</span>
                                <button className='boton-eliminar' onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                            </div>
                        ))}
                    </ul>
                    <p className="carrito-total">
                        TOTAL: $ {carrito.reduce((sum, item) => sum + item.precio, 0)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TiendaVirtual;