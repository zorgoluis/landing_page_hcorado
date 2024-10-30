import React from 'react';
import '../styles/features.css';
import { motion } from 'framer-motion';
import { Card, Col, Row } from 'react-bootstrap';
import icon_1 from '../../assets/icons/icon-1-home-feature-doctor-template.svg';
import icon_2 from '../../assets/icons/icon-2-home-feature-doctor-template.svg';
import icon_3 from '../../assets/icons/icon-3-home-feature-doctor-template.svg';
import { MinCardVariant } from '../../helper/animation';

const FeaturesSections = () => {
  return (
    <motion.section 
      className='feature_content_feature'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
    >
      <div className='container-default'>
        <Row className='feature_row_content'>
          <Col md="4" sm="12" xs="12">
            <motion.div variants={MinCardVariant} >
              <Card border='light'>
                <Card.Body>
                  <img src={icon_1} className='feature_image'/>
                  <h2 className='feature_title'>Urgencias</h2>
                  <p className='feature_paragraph-small'>Interconsultas con otras especialidades, disponiblidad de citas y atención a urgencias.</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md="4" sm="12" xs="12">
            <motion.div variants={MinCardVariant}>
              <Card border='light'>
                <Card.Body>
                  <img src={icon_2} className='feature_image'/>
                  <h2 className='feature_title'>Instalaciones y tecnología</h2>
                  <p className='feature_paragraph-small'>Contamos con tecnología de última generación para diagnósticos precisos y tratamientos efectivos.</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md="4" sm="12" xs="12">
            <motion.div variants={MinCardVariant}>
              <Card border='light'>
                <Card.Body>
                  <img src={icon_3} className='feature_image'/>
                  <h2 className='feature_title'>Atención personalizada</h2>
                  <p className='feature_paragraph-small'>Me preocupo por hacerte sentir cómodo y seguro, atendiendo cada duda y acompañándote en todo momento.</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default FeaturesSections