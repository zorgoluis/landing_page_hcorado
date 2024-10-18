import React from 'react';
import './styles/head.css'
import MenuHead from './UI/menu'
import { Col, Row } from 'react-bootstrap';
import InfoTop from './UI/info_top';
import finder_svg from '../assets/6018589e3ed02ef5bdb1fbe4_bg-home-hero-doctor-template.svg';
import doctor from '../assets/601862fd6baef26ae8f5fa5f_image-home-hero-doctor-template.jpg';


const Head = () => {
  return (
    <>
      <section className='container-default header home-head w-container container_head'>
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
      </section>
      <section className='home-doctor'>
        <div className='container-default'>
          <div className='home-doctor-wrapper'>
            <Row>
              <Col md="12">
                <div className='content-info home-doctor'>
                  <Row className='justify-content-between'>
                    <Col lg="5" md="12" sm="12" xs="12" className='content-left-hero'>
                      <div className='subtitle'>Dra. Heydi Corado</div>
                      <h1 className='title home-doctor'>A dedicated doctor you can trust</h1>
                      <p className='paragraph home-doctor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut ultricies faucibus.</p>
                      <a className='button-primary bg-secondary-1 w-button'>
                        Book an Appointment
                      </a>
                    </Col>
                    <Col lg="6" md="12" sm="12" xs="12" className='d-flex justify-content-center'>
                      <div className='content-rigth-doctor'>
                        <div className='image-wrapper home-doctor'>
                          <img className='image home-doctor' src={doctor}/>
                        </div>
                        <img className='img_svg bg' src={finder_svg} />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className='bg home-doctor container_head'></div>
      </section>
    </>
  )
}

export default Head