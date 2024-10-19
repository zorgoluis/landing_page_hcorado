import React from 'react'
import '../styles/about.css';
import { Col, Row } from 'react-bootstrap';
import doctor_img from '../../assets/image-home-about-doctor-template.jpg';
import back_img from '../../assets/6018589e3ed02ef5bdb1fbe4_bg-home-hero-doctor-template.svg';

const AboutSection = () => {
  return (
    <section className='section home-about'>
      <div className='container-default'>
        <Row className='home-about justify-content-between'>
          <Col xs="12" sm="12" md="12" lg="6" className='split-content home-about-left'>
            <div className='image-wrapper home-about'>
              <img src={doctor_img} />
            </div>
            <div className='bg home-about-left-1'></div>
            <img style={{
              transform: "translate3d(0px, 170px, 0px) scale3d(0.93, 0.93, 1) rotateX(0deg) rotateY(0deg) rotateZ(270deg) skew(0deg, 0deg)",
              opacity: 1,
              transformStyle: "preserve-3d",
            }} className='bg home-about-left-2' src={back_img} />
          </Col>
          <Col x2={12} sm="12" md="12" lg="6" className='split-content home-about-right'>
            <div className='subtitle'>About Me</div>
            <h2>A dedicated doctor with the core mission to help</h2>
            <p className='paragraph home-about'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
            </p>
            <div className='_2-buttons home-about'>
              <a className='button-primary home-about w-button'>Book an Appointment</a>
              <a className='button-secondary home-about w-button'>About Me</a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default AboutSection