import React from 'react';
import agriculture from './img/agriculture.jpg';
import chemicals from './img/chemical.jpg';
import paracetomol from './img/paracetamol.jpg';
import textiles from './img/textiles.jpg';
import white from './img/whitegoods.jpg';
import manufacturing from './img/manufactoring.jpg';
import electronics from './img/electronics.jpg';
import './industries.css';



const App = () => {
  return (
    <div className='industries-container'>
      <h1 className='industry-heading'>Industries Served</h1>
      <div className='industry-cards-container'>
      <div className='industry-card'>
        <img src={chemicals} className='industry-card-image'/>
        <h1 className='industry-card-heading'>Chemicals</h1>
      </div>
      <div className='industry-card'>
        <img src={paracetomol} className='industry-card-image'/>
        <h1 className='industry-card-heading'>Pharmaceuticals</h1>
      </div>
      <div className='industry-card'>
        <img src={electronics} className='industry-card-image'/>
        <h1 className='industry-card-heading'>Electronics</h1>
      </div>
      <div className='industry-card'>
        <img src={white} className='industry-card-image' id='white-good-image'/>
        <h1 className='industry-card-heading' id='white-good-text'>White Goods</h1>
      </div>
      <div className='industry-card'>
        <img src={textiles} className='industry-card-image' id="textile-image" />
        <h1 className='industry-card-heading'>Textile</h1>
      </div>
      <div className='industry-card'>
        <img src={manufacturing} className='industry-card-image'/>
        <h1 className='industry-card-heading'>Manufacturing</h1>
      </div>
      <div className='industry-card'>
        <img src={agriculture} className='industry-card-image'/>
        <h1 className='industry-card-heading'>Agriculture</h1>
      </div>
      </div>
    </div>
  );
};

export default App;



