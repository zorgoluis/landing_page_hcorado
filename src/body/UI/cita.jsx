import React from 'react';
import { motion } from "framer-motion";
import '../styles/cita.css';

import bg_img from '../../assets/60185e44237b7bb830997017_bg-cta-doctor-template.svg';
import right_img from '../../assets/60186300a524a512e6bf58f2_image-cta-doctor-template.jpg';
import { CardVariants, TextVariant } from '../../helper/animation';

const CitaSection = () => {
  return (
    <motion.section 
      className='section cta' 
      id="sabias-que"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
    >
      <div className='container-default w-container'>
        <motion.div className='split-content cta-left' variants={TextVariant}>
          <div className='subtitle'>Sabías que...</div>
          <h2 className='title cta'>Necesitas una endodoncia cuando:</h2>
          {/* <p className='paragraph cta'>

          </p> */}
            <ul className='paragraph cta'>
              <li>Cuando presentas dolor intenso y persistente</li>
              <li>Cuando hay sensibilidad prolongada a temperaturas</li>
              <li>Cuando hay cambio de color dental después de un trauma</li>
              <li>Cuando hay absceso o fístula en las encias, comúnmente conocido como postemilla</li>
            </ul>
          <div className='_2-buttons'>
            <a className='button-primary bg-secondary-1 cta w-button'>
              Galeria de fotos
            </a>
            {/* <a className='button-secondary light cta w-button'>
              About Me
            </a> */}
          </div>
        </motion.div>
      </div>
      <img src={bg_img} className='bg cta' />
      <motion.div className='image-wrapper cta' variants={CardVariants}>
        <img src={right_img} className='image cta' />
      </motion.div>
    </motion.section>
  )
}

export default CitaSection