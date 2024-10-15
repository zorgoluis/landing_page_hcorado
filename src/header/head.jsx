import React from 'react';
import './styles/head.css'
import MenuHead from './UI/menu'
import { Col, Row } from 'react-bootstrap';
import InfoTop from './UI/info_top';
import finder_svg from '../assets/6018589e3ed02ef5bdb1fbe4_bg-home-hero-doctor-template.svg';
import doctor from '../assets/601862fd6baef26ae8f5fa5f_image-home-hero-doctor-template.jpg';


const Head = () => {
  return (
    <section
      className='container_head'
    >
      <Row>
        <Col md="12">
          <InfoTop />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div className='divider header-divider'></div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <MenuHead/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Row className='justify-content-md-center'>
            <Col md="5" className='content-left-hero'>
              <div className='subtitle'>Dra. Heydi Corado</div>
              <h1 className='title'>A dedicated doctor you can trust</h1>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut ultricies faucibus.</p>
              <a className='button-primary bg-secondary-1 w-button'>
                Book an Appointment
              </a>
            </Col>
            <Col md="5" className='content-rigth-hero'>
              <div className='image-wrapper home-hero'>
                <img className='image' src={doctor}/>
              </div>
              <img className='img_svg' src={finder_svg} />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}

export default Head