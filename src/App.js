import React, { Component } from 'react';
import {Button, Container, Row, Col, Media, Navbar, Nav, FormControl, Form} from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Firmware Studio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
 <h1></h1>
  <Container>
  <Row>
    <Col>
    <Media>
    <img
      width={150}
      height={80}
      className="align-self-start mr-3"
      src="https://fossbytes.com/wp-content/uploads/2018/01/Best-Android-Apps-List-fossbytes.jpg"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Judul Artikel</h5>
      <p>
        Isi dari artikelnya
      </p>

      <p>
        Ini juga isi dari artikel
      </p>
    </Media.Body>
  </Media>
    </Col>
    <Col><Media>
    <img
      width={90}
      height={100}
      className="align-self-start mr-3"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/2000px-Android_robot.svg.png"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Judul Artikel</h5>
      <p>
        Isi dari artikelnya
      </p>

      <p>
        Ini juga isi dari artikel
      </p>
    </Media.Body>
  </Media>
  </Col>
  </Row>
  </Container>

      </div>
    );
  }
}

export default App;
