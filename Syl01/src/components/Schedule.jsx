import React, { useState } from 'react';
import './Schedule.css';    
import cattienda from '../components/Categories';


const Schedule = () => {
  
  // Definir las categorias disponibles
  const [selectedCatt, setselectedCatt] = useState('knail');

  return (
    
    <div className="catservicios-container">
    <h1 className="paratitulos"> Servicios disponibles para agendar </h1>
    <table className="catservicios-table">
     
      <tbody>
        {/* Primera fila con imágenes */}

        <tr>
          <td>1</td>
          <td>2</td>


        </tr>

        {/* Segunda fila con botones */}
        <tr>    
          <td> <button className="boton-servicios" onClick={() => setselectedCatt('extsoftgel')}> Extensiones Soft Gel</button> </td>
          <td> <button className="boton-servicios" onClick={() => setselectedCatt('semipermanente')}>Esmaltado Semipermanente</button></td>

        </tr>
      </tbody>
    </table>

    
    <table className="catservicios-table">
      <tbody>
      <tr>
            <div className="CATEGORIA-content">
              <p>{cattienda[selectedCatt]}</p>
            </div>
      </tr>
      </tbody>
    </table>
    
  </div>
    
    
  );
}

export default Schedule;
