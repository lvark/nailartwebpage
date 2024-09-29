// HomeSlider1.jsx
import React, { useState, useEffect } from 'react';
import './HomeSlider1.css'; // Archivo CSS para los estilos del slider
import ns1 from '../assets/nailstudio1.jpeg'; // foto nail studio1
import ns2 from '../assets/nailstudio2.jpeg'; // foto nail studio2
import ns3 from '../assets/nailstudio3.jpeg'; // foto nail studio3

const images1 = [ns1, ns2, ns3];

function HomeSlider1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images1.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3000 ms (3 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="slider1">
      <img src={images1[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="slider-image1" />
    </div>
  );
}

export default HomeSlider1;

 
