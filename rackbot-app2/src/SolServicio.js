import React from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Jumbotron from "react-bootstrap/Jumbotron";
import './App.css';

export class SolServicio extends React.Component {
  constructor() {
    super();
    this.state = {checkedRadio: 0,tosAccepted: false,servicioCreado: false};
  }
  changeRadio(e) {
    this.setState({checkedRadio: e.target.value});
  }
  changeTOS(e) {
    this.setState({tosAccepted: !this.state.tosAccepted});
  }
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const address = document.getElementById('formAddress').value;
    const email = document.getElementById('formEmail').value;
    const phone = document.getElementById('formPhone').value;
    const message = document.getElementById('formDescription').value;
    const prefContact = this.state.checkedRadio;

    axios({
        method: "POST", 
        url:"http://192.168.1.7:9000/solServ", 
        data: {
            name: name,
            address: address,
            phone: phone,   
            email: email,  
            message: message,
            prefContact: prefContact,
        }
    }).then((response)=>{
        if (response.data.msg === 'recibido'){
            /*alert("Message Sent.");
             this.resetForm() */
             this.setState({servicioCreado: true})
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
  document.getElementById('form-sol').reset();
}


  render() {
    var options = [{ id: 0, nm: "Correo Electrónico" }, { id: 1, nm: "Llamada" }, { id: 2, nm: "Whatsapp" }];
    if (!this.state.servicioCreado) {
      return (
        <Jumbotron>
          <Container className="p-3" maxWidth="xs" >
            <h2>Agendar servicio</h2>
            <Form id="form-sol" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Descripción del problema</Form.Label>
                <Form.Control as="textarea" rows="3" />
                <Form.Text className="text-muted">
                  Describe el problema o servicio que requieres con el mayor detalle
            </Form.Text>
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Dirección</Form.Label>
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
                <Form.Label>Teléfono de contacto</Form.Label>
                <Form.Control type="number" placeholder="3123456789" />
              </Form.Group>
              <Form.Group controlId="formContact">
                <Form.Label>¿Cómo prefieres que te contactemos?</Form.Label>
                {options.map((item, i) => (
                  <div key={`ratio-${item}`} className="mb-1">
                    <Form.Check
                      type='radio'
                      label={item.nm}
                      checked={this.state.checkedRadio == i}
                      ref={(el) => this["myRadioRef" + i] = el}
                      value={item.id}
                      onChange={this.changeRadio.bind(this)}
                    />
                  </div>
                ))}
              </Form.Group>
              <Button variant="primary" type="submit" className="mb-3" disabled={!this.state.tosAccepted}>
                Enviar
          </Button>
              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" onChange={this.changeTOS.bind(this)} label={<label>He leido y acepto la <a href='/ToS'>política de tratamiento de datos personales</a> de Rackbot SAS</label>}></Form.Check>
              </Form.Group>
            </Form>
          </Container>
        </Jumbotron>
      );
    }
    else {
      return (
        <Jumbotron>
          <Container className="p-3" maxWidth="xs" >
            <h2>¡Gracias!</h2>
            <p>Servicio creado exitosamente, en breve recibirás un correo de confirmación y uno de nuestros expertos se pondrá en contacto</p>
          </Container>
        </Jumbotron>
      );
    }
  }
}
export default SolServicio;