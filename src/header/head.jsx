import React from 'react';
import { motion } from "framer-motion";
import './styles/head.css'
import { Col, Row } from 'react-bootstrap';
import finder_svg from '../assets/6018589e3ed02ef5bdb1fbe4_bg-home-hero-doctor-template.svg';
import doctor from '../assets/601862fd6baef26ae8f5fa5f_image-home-hero-doctor-template.jpg';
import { CardVariants, TextVariant } from '../helper/animation';


const Head = () => {
  return (
    <motion.section 
      className='home-doctor' 
      id="inicio" 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className='container-default'>
        <div className='home-doctor-wrapper'>
          <Row>
            <Col md="12">
              <div className='content-info home-doctor'>
                <Row className='justify-content-between'>
                  <Col lg="5" md="12" sm="12" xs="12" className='content-left-hero'>
                    <motion.div variants={TextVariant}>
                      <div className='subtitle'>Dra. Heydi Corado</div>
                      <h1 className='title home-doctor'>Dedicada a cuidar de tu sonrisa</h1>
                      <p className='paragraph home-doctor'>Estoy comprometida con tu salud bucal y me aseguraré que tu vista sea una experiencia positiva, confiable, humanizada y accesible</p>
                      <a className='button-primary bg-secondary-1 w-button' target='_blank' href='https://wa.me/+5219612657825/?text=Hola, buenas tardes, deseo agendar una cita'>
                        Agendar cita
                      </a>
                    </motion.div>
                  </Col>
                  <Col lg="6" md="12" sm="12" xs="12" className='d-flex justify-content-center'>
                    <motion.div className='content-rigth-doctor' variants={CardVariants}>
                      <div className='image-wrapper home-doctor'>
                        <img className='image home-doctor' src={doctor} />
                      </div>
                      <img className='img_svg bg' src={finder_svg} />
                    </motion.div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='bg home-doctor container_head'></div>
    </motion.section>
  )
}

export default Head