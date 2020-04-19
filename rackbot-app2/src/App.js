import React from "react";
import {SolServicio} from "./SolServicio";
import {HomeRackbot} from "./LandingPage";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from 'react-bootstrap/TabContent';


import "./App.css";


/*  function Barra(){
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
} */
/* function Copyright() {
  return (
    <footer>
    {'Copyright © '}
      <a href="http://www.rackbot.co">Rackbot</a>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </footer>
  );
} */
const App = () => (
  <Container>
    <Jumbotron>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" variant="pills">
      <Tab eventKey="home" title="Home">
      <TabContent />
      <HomeRackbot />

      </Tab>
    <Tab eventKey="solServicio" title="Solicitar Servicio">
     <TabContent />
     <SolServicio/>
    </Tab>
    <Tab eventKey="SignIn" title="Iniciar Sesión" >
      <TabContent />
      {/* <Sonnet /> */}
    </Tab>
    <Tab eventKey="contact" title="Contacto" >
      <TabContent />
      {/* <Sonnet /> */}
    </Tab>
    
    </Tabs>
    </Jumbotron>
{/*     <Copyright /> */}
  </Container>
);

export default App;
