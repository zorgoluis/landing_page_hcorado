import React from 'react';
import './styles/modal_gallery.css';
import { Carousel, Modal } from 'react-bootstrap';
import imag0 from '../assets/PRO.png';
import imag1 from '../assets/PRO_1.png';
import imag2 from '../assets/PRO_2.png';
import imag3 from '../assets/PRO_3.png';

const ListaImagen = [
  {url: imag0},
  {url: imag1},
  {url: imag2},
  {url: imag3}
]

const ModalGalleryImage = (props) => {
  return (
    <Modal
    {...props}
    dialogClassName="modal-80w"
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    
  >
    <Modal.Body className='moda_gallery'>
      <Carousel fade slide={false}>
      {
        ListaImagen.map((i, k) => (
          <Carousel.Item key={`img-${k}`}>
          <img src={i.url} width={"100%"} />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        ))
      }
      </Carousel>
    </Modal.Body>
  </Modal>
  )
}

export default ModalGalleryImage