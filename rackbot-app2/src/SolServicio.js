import React from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Jumbotron from "react-bootstrap/Jumbotron";
import './App.css';

export class SolServicio extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const address = document.getElementById('formAddress').value;
    const email = document.getElementById('formEmail').value;
    const phone = document.getElementById('formPhone').value;
    const message = document.getElementById('formDescription').value;
    axios({
        method: "POST", 
        url:"http://localhost:9000/solServ", 
        data: {
            name: name,
            address: address,
            phone: phone,   
            email: email,  
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'recibido'){
            alert("Message Sent."); 
            /* this.resetForm() */
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
  document.getElementById('form-sol').reset();
}


  render(){  
      return (
        <Jumbotron>
      <Container className="p-3" maxWidth="xs" >
        <h2>Solicitar Servicio</h2>
        <Form id="form-sol" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <Form.Group controlId="formName">
            <Form.Label>Tu nombre</Form.Label>
            <Form.Control type="name"/>
          </Form.Group>
          <Form.Group controlId="formDescription">
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
    </Jumbotron>
);}
}
export default SolServicio;