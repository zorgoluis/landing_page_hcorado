import React, { useCallback, useState, useRef, useEffect } from 'react';
import '../styles/video.css';
import { Modal } from 'react-bootstrap';

import img_video from '../../assets/image-home-video-doctor-template-video.png';
import icon_video from '../../assets/icons/icon-home-video-doctor-template.svg';
import icon_check from '../../assets/icons/icon-feature-home-video-doctor-template.svg';
import { getAnalytics, logEvent } from 'firebase/analytics';
import videoP from  '../../assets/video_presentation.mp4';

const listCheck = [
  { title: "Especialista en Endodoncia" },
  { title: "Servicio urgente 24 horas" },
  { title: "Atención de calidad" }
]
const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  const getMessage = () => {
    return "Hola, quisiera agendar una cita de valoración para el servicio de: "
  }

  useEffect(() => {
    if (showModal && videoRef.current) {
      videoRef.current.play();
    }
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  const handleClick = useCallback(() => {
    const analytics = getAnalytics();
    logEvent(analytics, 'open_whatsapp');

    window.open(`https://wa.me/+521${import.meta.env.VITE_NUMBER_PHONE}/?text=${getMessage()}`, '_blank')
  }, [getMessage, getAnalytics])

  return (
    <section className='section'>
      <div className='container-medium-682px home-video'>
        <div className='subtitle'>Dra. Heydi Corado</div>
        <h2 className='title home-video'>Conoce a la Dra. Heydi y por qué es tu mejor opción dental</h2>
      </div>
      <div className='container-default w-container'>
        <div className='home-video-wrapper'>
          <div className='image-wrapper home-video'>
            <img src={img_video} className='home-video-img' alt='Dr. Heydi Corado video' />
            <div className='filter'></div>
            <a className='home-video-button w-inline-block w-lightbox' onClick={handleOpenModal}>
              <img src={icon_video} className='image home-video-button-icon'  />
            </a>
          </div>
          <div className='card bg-neutral-200 home-video'>
            <h3>¿Por qué elegir a la Dra. Heydi?</h3>
            <p className='paragraph card-home-video'>
              Como Cirujana Dentista especializada en Endodoncia, la Dra. Heydi Corado se dedica a ofrecer soluciones dentales de alta calidad en dos consultorios modernos en Chiapas. Su enfoque compasivo, profesionalismo y compromiso con la excelencia la convierten en la opción ideal para quienes buscan atención dental confiable y accesible.
            </p>
            <div className='w-layout-grid card-home-video-features-grid'>
              {listCheck.map((item, index) => (
                <div key={"card-video-" + index} className='card-home-video-feature-wrapper'>
                  <img src={icon_check} className='card-home-video-feature-icon' />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <a className='button-primary w-button' onClick={handleClick}>Reservar una cita</a>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="video-modal-title"
        centered
      >
        <Modal.Body className='modal-video-body'>
          <video 
            ref={videoRef}
            controls
            autoPlay
            className='modal-video-player'
            style={{ width: '100%', height: 'auto' }}
          >
            <source src={videoP} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default VideoSection