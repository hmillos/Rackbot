import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Navega(){
  const [expanded, setExpanded] = useState(false);
  return(
    <>
    <Navbar  expand="lg" bg="light" variant="light" fixed="top" fluid expanded={expanded}>
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
        Rackbot
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"> 
          <Nav.Link as={Link} to="/agendar" onClick={() => setExpanded(false)}>Agendar
          </Nav.Link>
          <NavDropdown title="Nuestros Servicios" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/mantenimiento" onClick={() => setExpanded(false)}>Mantenimiento</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/redes" onClick={() => setExpanded(false)}>Redes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/software" onClick={() => setExpanded(false)}>Programas y configuración general</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/asesoría" onClick={() => setExpanded(false)}>Asesoría en computadores y redes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/faq" onClick={() => setExpanded(false)}>Preguntas Frecuentes</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text>
          <strong>Llámanos: 312 427 3764</strong>
          </Navbar.Text>
          <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>Inicio de Sesión</Nav.Link>
          <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
} 

