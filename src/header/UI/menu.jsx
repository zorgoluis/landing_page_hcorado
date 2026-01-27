import { useState } from 'react';
import '../styles/menu.css';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import icon_root from '../../assets/icons/Imagotipo_negativo.svg';

const MenuHead = () => {
  const expand = "md";
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Navbar expand={expand} className="bg-menu w-nav mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
            src={icon_root}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          onHide={handleClose}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#sobremi">Sobre mi</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#sabias-que">Sabias que...</Nav.Link>
              <Nav.Link href="#ubicame">Ubicame</Nav.Link>
              <Nav.Link onClick={() => { navigate('/facturacion'); handleClose(); }}>Facturar</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default MenuHead