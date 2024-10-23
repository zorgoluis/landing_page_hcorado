import React from 'react';
import '../styles/menu.css';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import icon_root from '../../assets/icons/Imagotipo_negativo.svg';

const MenuHead = () => {
  const  expand= "md";
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
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default MenuHead