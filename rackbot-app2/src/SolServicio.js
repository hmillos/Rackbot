import React from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";



import "./App.css";

export function SolServicio () {
return (
    <Container className="p-3" maxWidth="xs" >
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
  </Container>

);
}