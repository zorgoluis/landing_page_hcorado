import React from 'react';
import '../styles/cita.css';

import bg_img from '../../assets/60185e44237b7bb830997017_bg-cta-doctor-template.svg';
import right_img from '../../assets/60186300a524a512e6bf58f2_image-cta-doctor-template.jpg';

const CitaSection = () => {
  return (
    <section className='section cta'>
      <div className='container-default w-container'>
        <div className='split-content cta-left'>
          <div className='subtitle'>Book an appointment</div>
          <h2 className='title cta'>Schedule a virtual or presential appointment today</h2>
          <p className='paragraph cta'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed.
          </p>
          <div className='_2-buttons'>
            <a className='button-primary bg-secondary-1 cta w-button'>
              Book an Appointment
            </a>
            <a className='button-secondary light cta w-button'>
              About Me
            </a>
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