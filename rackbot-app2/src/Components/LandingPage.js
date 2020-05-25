import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import services from "../cards";


export default function HomeRackbot() {
    return (
        <Jumbotron>
            <Container className="p-3" >
                <h2>Nuestras Tarifas</h2>
                <p>Podemos ofrecerte tres tipos de servicios</p>
                <CardDeck >
                    {Object.keys(services).map(key => (
                        <Card key={key} >
                            {/*     <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                                <Card.Title>{services[key].title}</Card.Title>
                                <Card.Text>{services[key].text}</Card.Text>
                            </Card.Body>
                            <Card.Footer>{services[key].footer}</Card.Footer>
                        </Card>
                    )
                    )} 
                </CardDeck>
                <p className="mt-3">
                    Presiona el siguiente botón para solicita un servicio, nos contactaremos contigo y te indicaremos cual de nuestras opciones es la mejor para tu problema.
                    </p>
                <div className="btn-home">
                    <Button variant="primary">Solicitar Servicio</Button>
                </div>
            </Container>
        </Jumbotron>
    );
}