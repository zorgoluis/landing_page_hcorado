import React from 'react';
import '../styles/features.css';
import { Card, Col, Row } from 'react-bootstrap';
import icon_1 from '../../assets/icons/icon-1-home-feature-doctor-template.svg';
import icon_2 from '../../assets/icons/icon-2-home-feature-doctor-template.svg';
import icon_3 from '../../assets/icons/icon-3-home-feature-doctor-template.svg';

const FeaturesSections = () => {
  return (
    <section className='feature_content_feature'>
      <div className='container-default'>
        <Row className='feature_row_content'>
          <Col md="4" sm="12" xs="12">
            <Card border='light'>
              <Card.Body>
                <img src={icon_1} className='feature_image'/>
                <h2 className='feature_title'>Urgencias</h2>
                <p className='feature_paragraph-small'>Interconsultas con otras especialidades, disponiblidad de citas y atención a urgencias</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card border='light'>
              <Card.Body>
                <img src={icon_2} className='feature_image'/>
                <h2 className='feature_title'>Instalación y tecgnología</h2>
                <p className='feature_paragraph-small'>Contamos con tecnología de última generación para diagnósticos precisos y tratamientos efectivos.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card border='light'>
              <Card.Body>
                <img src={icon_3} className='feature_image'/>
                <h2 className='feature_title'>Atención personalizada</h2>
                <p className='feature_paragraph-small'>Me preocupo por hacerte sentir cómodo y seguro, atendiendo cada duda y acompañandote en todo momento.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default FeaturesSections