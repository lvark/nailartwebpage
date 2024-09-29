import React from 'react';
import './Home.css'; // Asegúrate de que la ruta sea correcta
import promo1 from '../assets/sale.png'; // logo
import HomeSlider1 from './HomeSlider1'; // Importa el componente Slider
import HomeSlider2 from './HomeSlider2';
 
const Home = () => {
  return (

      <div className="table-containerdescuentos">
      <table className="my-tabledescuentos"> 
        <tbody>
          <tr>
            <td className="celda1-1"> 
             <div className="sale-container"> <img src={promo1} alt="Salon Logo" className="my-image" />
             </div>
            </td>

            <td className="celda1-2">
              <div className="sale-container"> <HomeSlider2/>   
              </div>
            </td>
          </tr>
          <tr>

            <td className="celda2-1"> 
             <div className="sale-container"> <HomeSlider1 />   
             </div>
            </td>

            <td className="celda2-2">
              <div> <h2> NAIL ART STUDIO</h2>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
      
      {/* Otros contenidos de tu página */}
    </div>

     

  );
};

export default Home;