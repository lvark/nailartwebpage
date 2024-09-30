import React, { useState } from 'react';
import cattienda from '../components/Categories';

const Store = () => {

 
   // Definir las categorias disponibles
   const [selectedCatt, setselectedCatt] = useState('knail');



  return (
    <div className="cattienda-container">
      <h1 className="paratitulos"> CATEGORIAS PRESS ON NAILS </h1>
      <table className="cattienda-table">
       
        <tbody>
          {/* Primera fila con imágenes */}

          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>

          </tr>

          {/* Segunda fila con botones */}
          <tr>    
            <td> <button className="boton-categoria" onClick={() => setselectedCatt('knail')}>Korean Nails</button> </td>
            <td> <button className="boton-categoria" onClick={() => setselectedCatt('anime')}>Anime & Manga</button></td>
            <td> <button className="boton-categoria" onClick={() => setselectedCatt('tresd')}>3D</button></td>
            <td> <button className="boton-categoria" onClick={() => setselectedCatt('tendencia')}>Tendencias</button></td>
            <td> <button className="boton-categoria" onClick={() => setselectedCatt('accesorios')}>Accesorios</button></td>
          </tr>
        </tbody>
      </table>

      
      <table className="cattienda-table">
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
};


export default Store;