import React from 'react';
import { motion } from "framer-motion";
import '../styles/cita.css';

import bg_img from '../../assets/60185e44237b7bb830997017_bg-cta-doctor-template.svg';
import right_img from '../../assets/60186300a524a512e6bf58f2_image-cta-doctor-template.jpg';
import { CardVariants, TextVariant } from '../../helper/animation';
import ModalGalleryImage from '../../components/modal_gallery';

const CitaSection = () => {

  const [show, setShow] = React.useState(false);

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
          <h2 className='title cta'>Podrías necesitar una endodoncia cuando:</h2>
          {/* <p className='paragraph cta'>

          </p> */}
            <ul className='paragraph cta'>
              <li>Cuando presentas <strong>dolor intenso</strong> y <strong>persistente</strong></li>
              <li>Cuando hay <strong>sensibilidad prolongada a temperaturas</strong></li>
              <li>Cuando hay <strong>cambio de color</strong> dental después de un <strong>trauma</strong></li>
              <li>Cuando hay un tracto sinuoso en las encias conmúnmente conocido como <strong>Postemilla</strong></li>
            </ul>
          <div className='_2-buttons'>
            <a className='button-primary bg-secondary-1 cta w-button' onClick={() => setShow(true)}>
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
      <ModalGalleryImage
        show={show}
        onHide={() => setShow(false)}
      />
    </motion.section>
  )
}

export default CitaSection