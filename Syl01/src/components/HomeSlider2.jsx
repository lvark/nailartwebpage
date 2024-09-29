import React, { useState, useEffect } from 'react';
import './HomeSlider2.css'; // Archivo CSS para los estilos del slider


import pro1 from '../assets/promo1.jpeg'; // foto nail studio1
import pro2 from '../assets/promo2.jpg'; // foto nail studio2
import pro3 from '../assets/promo3.png'; // foto nail studio3
import pro4 from '../assets/promo4.jpg'; // foto nail studio3



const images2 = [pro1,pro2,pro3,pro4];

function HomeSlider2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images2.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3000 ms (3 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="slider2">
      <img src={images2[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="slider-image2" />
    </div>
  );
}

export default HomeSlider2;

