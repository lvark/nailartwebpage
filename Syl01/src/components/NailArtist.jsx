import React from 'react';
import './NailArtist.css'; // Asegúrate de que la ruta sea correcta
import nailartist from '../assets/chibi.png'; // foto


const NailArtist = () => {

  
    return (
      <div>
        <table className="tablasobremi"> 
        <tbody>
          <tr>
            <td className="celda1-1">
              <div className="sale-container"> <img src={nailartist} alt="Foto" className="my-image" />
              </div>
            </td>
           
            <td className="celdatexto1"> 
              <div>
                <h3 className="h3i">Hola soy Sylvia!  
                <p>
                  Estudio Ingeniería y me encanta el Nail Art.  <br></br>
                  <br></br>
                   Amo la idea de que muchas personas con diferentes personalidades y estilos de vida puedan conectar por el gusto o el amor a tener unas uñas bonitas.
                 <br></br><br></br>
                  ¡Gracias por estar aqui! 
                  <br></br>
                 Por hacer parte de este sueño.
                 <br></br>
                 <br></br>
                  Me encantaría personalizar las uñas que complementen tu estilo!
                </p>
                </h3>
              </div>     
            </td>
          </tr>
          
        </tbody>
 </table>
 
      </div>
 
    );
  };
  
  export default NailArtist;

