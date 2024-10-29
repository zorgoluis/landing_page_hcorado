import React from 'react';
import '../styles/cita.css';

import bg_img from '../../assets/60185e44237b7bb830997017_bg-cta-doctor-template.svg';
import right_img from '../../assets/60186300a524a512e6bf58f2_image-cta-doctor-template.jpg';

const CitaSection = () => {
  return (
    <section className='section cta'>
      <div className='container-default w-container'>
        <div className='split-content cta-left'>
          <div className='subtitle'>Sabías que...</div>
          <h2 className='title cta'>Necesitas una endodoncia cuando:</h2>
          <p className='paragraph cta'>
            <ul>
              <li>Cuando presnetas intenso y persistente</li>
              <li>Sencibilidad prolongada a temperaturas</li>
              <li>Cambio de color dental después de un trauma</li>
              <li>Absceso o fístula en las encias, comúnmente conocido como postemilla</li>
            </ul>
          </p>
          <div className='_2-buttons'>
            <a className='button-primary bg-secondary-1 cta w-button'>
              Galeria de fotos
            </a>
            {/* <a className='button-secondary light cta w-button'>
              About Me
            </a> */}
          </div>
        </div>
      </div>
      <img src={bg_img} className='bg cta' />
      <div className='image-wrapper cta'>
        <img src={right_img} className='image cta' />
      </div>
    </section>
  )
}

export default CitaSection