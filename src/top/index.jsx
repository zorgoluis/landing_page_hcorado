import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InfoTop from '../header/UI/info_top'
import MenuHead from '../header/UI/menu'

const TopHead = () => {
  return (
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
          <MenuHead />
        </Col>
      </Row>
    </section>
  )
}

export default TopHead