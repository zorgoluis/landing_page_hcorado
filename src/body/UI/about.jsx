import React from 'react';
import { motion } from "framer-motion";
import '../styles/about.css';
import { Col, Row } from 'react-bootstrap';
import doctor_img from '../../assets/image-home-about-doctor-template.jpg';
import back_img from '../../assets/6018589e3ed02ef5bdb1fbe4_bg-home-hero-doctor-template.svg';
import { CardBgVariants, CardVariants, TextVariant } from '../../helper/animation';

const AboutSection = () => {
  return (
    <motion.section 
      className='section home-about' 
      id="sobremi"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
    >
      <div className='container-default'>
        <Row className='home-about justify-content-between'>
          <Col xs="12" sm="12" md="12" lg="6" className='split-content home-about-left'>
            <motion.div className='image-wrapper home-about' variants={CardVariants}>
              <img src={doctor_img} />
            </motion.div>
            <motion.div className='bg home-about-left-1' variants={CardBgVariants}></motion.div>
            <img style={{
              transform: "translate3d(0px, 170px, 0px) scale3d(0.93, 0.93, 1) rotateX(0deg) rotateY(0deg) rotateZ(270deg) skew(0deg, 0deg)",
              opacity: 1,
              transformStyle: "preserve-3d",
            }} className='bg home-about-left-2' src={back_img} />
          </Col>
          <Col x2={12} sm="12" md="12" lg="6" className='split-content home-about-right'>
            <motion.div variants={TextVariant}>
              <div className='subtitle'>Sobre mí</div>
              <h3 style={{"fontStyle": "italic"}}>"El talento no significa nada, miestras que la experiencia adquirida con humildad y con trabajo duro, lo es todo"</h3>
              <p className='paragraph home-about'>
                Soy Cirujano Dentista egresada de la Universidad de Ciencias y Artes de Chiapas y Especialista en Endodoncia por la Universidad de Guadalajara, realicé mi estancia académica en la Universidad Nacional Autónoma de Mexíco.
              </p>
              <p>Me considero una persona empática, siempre dispuesta a escuchar y atender la necesidades de cada persona que entra en mi consultorio, la puntualidad y el respeto por el tiempo de mis pacientes son valores claves en mi práctica,
                me esfuerzo constantemente en perfecionar mis conocimientos para ofrecerles tratamientos efectivos y accesibles.
              </p>
              {/* <div className='_2-buttons home-about'>
                <a className='button-primary home-about w-button'>Book an Appointment</a>
                <a className='button-secondary home-about w-button'>About Me</a>
              </div> */}
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default AboutSection