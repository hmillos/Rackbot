import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css";


export default function HomeRackbot (){
    return(
    <Jumbotron>
    <Container className="p-3" maxWidth="xs" >
        <h2>Nuestras Tarifas</h2>
        <p>Podemos ofrecerte dos tipos de servicios</p>
<CardDeck >
    <Card>
{/*     <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
            <Card.Title>Servicio Remoto</Card.Title>
            <Card.Text>
                <p>Nos conectamos a tu computador remotamente a través de una aplicación segura para darte soporte.</p>
                <p><strong>Ventajas y catacterísticas:</strong></p>
                <ul>
                    <li>Menor tiempo de espera.</li>
                    <li>Problemas de baja o media complejidad.</li>
                    <li>Se requiere acceso y conectividad en el equipo.</li>
                </ul>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">$60,000 por servicio</small>
        </Card.Footer>
  </Card>
  <Card>
{/*     <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
            <Card.Title>Servicio a Domicilio</Card.Title>
            <Card.Text>
            <p>Si el problema requiere una visita, uno de nuestros profesionales te visitará.</p>
                <p><strong>Ventajas y catacterísticas:</strong></p>
                <ul>
                    <li>Tiempo de espera: Según agendamiento</li>
                    <li>Servicios de mayor complejidad.</li>
                    <li>Necesarios cuando no hay acceso o conectividad</li>
                </ul>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
    <small className="text-muted">$60,000/hora (la primera hora de servicio). $40,000/hora en adelante</small>
        </Card.Footer>
  </Card>
</CardDeck>
<p></p>
<p>
    Presiona el siguiente botón para solicita un servicio, nos contactaremos contigo y te indicaremos cual de nuestras opciones es la mejor para tu problema. </p>
<div class="btn-home">
<Button variant="primary">Solicitar Servicio</Button>
</div>
</Container>
</Jumbotron>
);
}