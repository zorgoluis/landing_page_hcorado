import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, Col, Row } from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../styles/services.css';
import { SectionVariant } from '../../helper/animation';

import { Autoplay } from 'swiper/modules';

import icon_ser_1 from '../../assets/icons/dentista_integral.png';
import icon_ser_2 from '../../assets/icons/dentista.png';
import icon_ser_3 from '../../assets/icons/cirugia-dental.png';
import icon_ser_4 from '../../assets/icons/implante-dental.png';
import icon_ser_5 from '../../assets/icons/carillas-dentales.png';
import icon_ser_6 from '../../assets/icons/canal-raiz.png';
import icon_ser_7 from '../../assets/icons/caries.png'

const ServiceSection = () => {
  const swiperRef = useRef();

  const handleNext = useCallback(() => {
    swiperRef?.current?.slideNext();
  }, [swiperRef])

  const handlePrevious = useCallback(() => {
    swiperRef?.current?.slidePrev();
  }, [swiperRef])

  return (
    <motion.section 
      className='section home-services' 
      id="servicios"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
    >
      <motion.div 
        className='container-default w-container'
        variants={SectionVariant}
        >
        <Row className='top-content home-services justify-content-md-between'>
          <Col xs="12" sm="12" md="12" lg="5">
            <div className='subtitle color-primary-1'>Servicios</div>
            <h2 className='title home-services'>Experiencia en multiples áreas</h2>
          </Col>
          <Col md="12" lg="5">
            <Row className='justify-content-md-justify'>
              <Col sm="6">
                <div className='home-services-button-previous' onClick={handlePrevious}>
                  <div><i className="bi bi-arrow-left"></i>&nbsp;Anterior</div>
                </div>
              </Col>
              <Col sm="6">
                <div className='home-services-button-previous' onClick={handleNext}>
                  <div>Siguiente&nbsp;<i className="bi bi-arrow-right"></i></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className='home-services-slider'>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_1} />
                  <h3 className='title card-service'>Odontología Integral</h3>
                  <p className='paragraph card-service'>Busco abordar tu salud bucal de manera completa, considerando no solo los problemas dentales específicos, sino también tu bienestar general.</p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_6} />
                  <h3 className='title card-service'>Endodoncia</h3>
                  <p className='paragraph card-service'>
                    La endodoncia es el procedimiento que se realiza cuando la parte interna del diente se inflama o se infecta.
                  </p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_3} />
                  <h3 className='title card-service'>Cirugía Apical</h3>
                  <p className='paragraph card-service'>
                    Es un procedimiento dental que se realiza cuando el tratamiento de endodoncia no ha logrado eliminar la infección en la raíz del diente.
                  </p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_4} />
                  <h3 className='title card-service'>Autotrasplante</h3>
                  <p className='paragraph card-service'>Procedimiento en el que un diente se extrae de su ubicación original y se trasplanta a otro sitio, esto para reemplazar un diente dañado</p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_5} />
                  <h3 className='title card-service'>Reimplante Intencional</h3>
                  <p className='paragraph card-service'>
                    Procedimiento en el cual un diente comprometido o enfermo se extrae y luego se vuelve a colocar en su sitio original.
                  </p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_2} />
                  <h3 className='title card-service'>Endodoncia Infantil</h3>
                  <p className='paragraph card-service'>
                    Atención de tratamientos endodónticos en paciente infantiles con órganos dentales de adulto.
                  </p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center card-transform" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_7} />
                  <h3 className='title card-service'>Trauma dental</h3>
                  <p className='paragraph card-service'>
                    Atención de fracturas, quebraduras, desplazamientos y/o pérdidas completas dentales.
                  </p>
                  <div className='link-wrapper'>
                    {/* <div>Learn More</div> */}
                    <div className="link-underline" aria-hidden="true"></div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default ServiceSection