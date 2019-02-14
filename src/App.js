import React, { Component } from 'react';
import {Container, Row, Col, Media, Navbar, Nav, Alert, Badge, Breadcrumb, Button} from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Firmware Studio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Seputar StartUp</Nav.Link>
      <Nav.Link href="#">Tutorial Android</Nav.Link>
    </Nav>
    </Navbar>
    <Container>
    <Row>
    <Col>
    <Alert variant="success">login anda berhasil !! </Alert>
    </Col>
    </Row>
    </Container>
  <Container>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">StartUp</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Android</Breadcrumb.Item>
  </Breadcrumb>
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
      <h5>Investasi Besar-besaran <Badge pill variant="primary">StartUp</Badge></h5>
      <p>
        Isi dari artikelnya
      </p>
      <p>
        Ini juga isi dari artikel
      </p>
      <Button variant="outline-warning">Baca Artikel</Button>
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
      <h5>RecyclerView Tutorial <Badge pill variant="success">Android</Badge></h5>
      <p>
        Isi dari artikelnya
      </p>
      <p>
        Ini juga isi dari artikel
      </p>
      <Button variant="outline-warning">Baca Artikel</Button>
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
