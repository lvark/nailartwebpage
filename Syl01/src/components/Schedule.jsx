import React, { useState } from 'react';
import './Schedule.css';    

import esg from '../assets/extsoftgel.jpg'; // logo
import est from '../assets/esmaltado.jpg'; // logo


const Schedule = () => {
  
  // Definir las categorias disponibles
  const [ SelectedSer, setSelectedServ] = useState('extsoftgel');

  const EXTSOFTGEL_SERV= (
    <div>
      <p>
      Las extensiones de uñas con soft gel ofrecen un acabado más natural en comparación con otros métodos. El gel se adapta bien a la forma de la uña, lo que resulta en una apariencia más suave y menos artificial.
      </p>
    </div>
  );

  const SEMIPERMANENTE_SERV= (
    <div>
      <p>
      El gel semipermanente puede durar de dos a tres semanas sin descascararse, lo que es significativamente más largo que el esmalte de uñas tradicional. Esto significa menos tiempo de mantenimiento y una apariencia impecable durante más tiempo      </p>
    </div>
  );

  const servi = {
    extsoftgel: EXTSOFTGEL_SERV,
    semipermanente: SEMIPERMANENTE_SERV,
 
  };
  return (
    
    <div className="catservicios-container">
    <h1 className="paratitulos"> Servicios disponibles para agendar </h1>
    <table className="catservicios-table">
     
      <tbody>
        {/* Primera fila con imágenes */}

        <tr>
          <td><img src={esg} alt="Salon Logo" className="servimagenes" /></td>
          <td><img src={est} alt="Salon Logo" className="servimagenes" /></td>


        </tr>

        {/* Segunda fila con botones */}
        <tr>    
          <td> <button className="boton-servicios" onClick={() => setSelectedServ('extsoftgel')}> Extensiones Soft Gel</button> </td>
          <td> <button className="boton-servicios" onClick={() => setSelectedServ('semipermanente')}>Esmaltado Semipermanente</button></td>

        </tr>
      </tbody>
    </table>

    
    <table className="catservicios-table">
      <tbody>
      <tr>
            <div className="CATEGORIA-content">
            <p>{servi[SelectedSer]}</p>
            </div>
      </tr>
      </tbody>
    </table>
    
  </div>
    
    
  );
}

export default Schedule;
