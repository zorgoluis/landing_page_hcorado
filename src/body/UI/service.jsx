import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import '../styles/services.css';

import { Autoplay } from 'swiper/modules';

import icon_ser_1 from '../../assets/icons/icon-1-service-doctor-template.svg';
import icon_ser_2 from '../../assets/icons/icon-2-service-doctor-template.svg';
import icon_ser_3 from '../../assets/icons/icon-3-service-doctor-template.svg';
import icon_ser_4 from '../../assets/icons/icon-4-service-doctor-template.svg';
import icon_ser_5 from '../../assets/icons/icon-5-service-doctor-template.svg';
import icon_ser_6 from '../../assets/icons/icon-6-service-doctor-template.svg';

const ServiceSection = () => {
  const swiper = useSwiper();
  return (
    <section className='section home-services'>
      <div className='container-default w-container'>
        <Row className='top-content home-services'>
          <Col xs="12" sm="12" md="12" lg="5">
            <div className='subtitle color-primary-1'>Services</div>
            <h2 className='title home-services'>Experienced in multiple medical practices</h2>
          </Col>
          <Col md="12" lg="5">
            <Button onClick={() => swiper.slideNext()}>next</Button>
          </Col>
        </Row>
        <div className='home-services-slider'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2000,
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
            // modules={[Autoplay]}
          >
            <SwiperSlide>
              <Card className="text-center" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_1} />
                  <h3 className='title card-service'>General</h3>
                  <p className='paragraph card-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.</p>
                  <div className='link-wrapper'>
                    <div>Learn More</div>
                    {/* <div className="link-underline" aria-hidden="true"></div> */}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_2} />
                  <h3 className='title card-service'>Pediatrics</h3>
                  <p className='paragraph card-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.</p>
                  <div className='link-wrapper'>
                    <div>Learn More</div>
                    {/* <div className="link-underline" aria-hidden="true"></div> */}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_3} />
                  <h3 className='title card-service'>Nutrition</h3>
                  <p className='paragraph card-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.</p>
                  <div className='link-wrapper'>
                    <div>Learn More</div>
                    {/* <div className="link-underline" aria-hidden="true"></div> */}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_4} />
                  <h3 className='title card-service'>Cardiology</h3>
                  <p className='paragraph card-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.</p>
                  <div className='link-wrapper'>
                    <div>Learn More</div>
                    {/* <div className="link-underline" aria-hidden="true"></div> */}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_5} />
                  <h3 className='title card-service'>Ophthalmology</h3>
                  <p className='paragraph card-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.</p>
                  <div className='link-wrapper'>
                    <div>Learn More</div>
                    {/* <div className="link-underline" aria-hidden="true"></div> */}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center" border='light'>
                <Card.Body className='service'>
                  <img className='image card-service' alt='General' src={icon_ser_6} />
                  <h3 className='title card-service'>Orthopedics</h3>
                  <p className='paragraph card-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.</p>
                  <div className='link-wrapper'>
                    <div>Learn More</div>
                    {/* <div className="link-underline" aria-hidden="true"></div> */}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection