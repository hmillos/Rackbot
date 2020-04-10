import React from "react";
import { MemoryRouter} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import "./App.css";


function Barra(){
  return(<Navbar bg="primary" variant="dark" expand="lg">
  <Navbar.Brand href="/home">Rackbot</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="link">Iniciar Sesión</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>);
}
function Copyright() {
  return (
    <div>
    {'Copyright © '}
      <a href="http://www.rackbot.co">Rackbot</a>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}
const App = () => (
  <MemoryRouter>
    <Container className="p-3" maxWidth="xs" >
      <Barra />
      <Jumbotron>
        <h2>Solicitar Servicio</h2>
        <Form>
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción del problema</Form.Label>
            <Form.Control as="textarea" rows="3" />
            <Form.Text className="text-muted">
              Describe el problema con el mayor detalle
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Tu dirección</Form.Label>
            <Form.Control type="none" placeholder="" />
            <Form.Text className="text-muted">
              Nuestro técnico te visitará en esta dirección
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu coreo Electrónico" />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Número de contacto</Form.Label>
            <Form.Control type="number" placeholder="" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Jumbotron>
    </Container>



    <Copyright />
  </MemoryRouter>
);

export default App;
