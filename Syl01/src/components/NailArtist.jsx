import React from 'react';
import './NailArtist.css'; // Asegúrate de que la ruta sea correcta
import nailartist from '../assets/FotoSyl.png'; // foto


const NailArtist = () => {

  
    return (
      <div>
        <table className="tablasobremi"> 
        <tbody>
              <tr>
              <td className="celdita">
              <div> <img src={nailartist} alt="Foto" className="my-image2" />
              </div>
            </td>
            <td className="celdatexto1"> 
             <div>
             <h3 className="h3i">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
             </div>
            </td>
          </tr>
          
        </tbody>
 </table>
 
      </div>
 
    );
  };
  
  export default NailArtist;

