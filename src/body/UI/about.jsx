import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AboutSection = () => {
  return (
    <section>
      <div className='container-default'>
        <Row>
          <Col md="6">g</Col>
          <Col md="6">
            <div className='subtitle'>About Me</div>
            <h2>A dedicated doctor with the core mission to help</h2>
            <p className='paragraph home-about'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default AboutSection