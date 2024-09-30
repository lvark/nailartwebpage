import React from 'react';
import './Home.css'; // Asegúrate de que la ruta sea correcta
import paso1 from '../assets/paso1.jpg'; // logo
import paso2 from '../assets/paso2.jpg'; // logo
import paso3 from '../assets/paso3.jpg'; // logo
function Faq() {
 

  
    return (
  
        <div className="table-containerdescuentos">
        <table className="my-tabledescuentos"> 
          <tbody>
            <tr>
               <img src={paso1} alt="Salon Logo"   />
              <img src={paso2} alt="Salon Logo"   /> 
              <img src={paso3} alt="Salon Logo"   /> 
            </tr>
             
           
             </tbody>
        </table>
        
        {/* Otros contenidos de tu página */}
      </div>
    );
  };
  



export default Faq;
