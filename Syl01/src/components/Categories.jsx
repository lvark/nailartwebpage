import React  from 'react';
import './Categories.css';




function Categories() {
  
  

  const categories = [
    {
      name: 'Tratamientos',
      items: [
        { name: 'Ozonoterapia Cuero Cabelludo', price: '$150.000' },
        { name: 'Hidratación Intensiva', price: '$100.000' },
      ],
    },
    {
      name: 'Corte',
      items: [

        // 'Buzz', 'Punk', 'Pixie', 'Bob','Midi','Capas','Desfilada'
        { name: 'Buzz', price: '$30' },
        { name: 'Punk', price: '$50' },
        { name: 'Pixie', price: '$20'},
        { name: 'Bob', price: '$60' },
        { name: 'Midi', price: '$40'},
        { name: 'Capas', price: '$30'},
        { name: 'Desfilada', price: '$15'},
         
      ],
    },
    {
      name: 'Color',
      items: [ 
        { name: 'Tinte Completo', price: '$150.000' },
        { name: 'Mechas', price: '$200.000' },
        { name: 'Balayage', price: '$250.000' },
      ],
    },
  ];

  return (
    <div className="services">
      <h1>Nuestros Servicios</h1>
      {categories.map((category, index) => (
        <div key={index} className="service-category">
          <h2>{category.name}</h2>
          <div className="service-items">
            {category.items.map((item, idx) => (
              <div key={idx} className="service-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}




export default Categories;