import React, { Component } from 'react';
import {Container, Row, Col, Media, Navbar, Nav, Alert, Badge, Breadcrumb, Button, ButtonGroup, Card, Carousel} from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Firmware Studio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Seputar StartUp</Nav.Link>
      <Nav.Link href="#">Tutorial Android</Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
    </Nav>
    </Navbar>
  <Container>
  <Alert variant="success">login anda berhasil !! </Alert>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">StartUp</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Android</Breadcrumb.Item>
  </Breadcrumb>
  <Carousel>
  <Carousel.Item>
  <img className ="d-block w-100" src="https://fossbytes.com/wp-content/uploads/2018/01/Best-Android-Apps-List-fossbytes.jpg"/>
  <Carousel.Caption>
  <h3>Social Media on Android</h3>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className ="d-block w-100" src="https://www.extremetech.com/wp-content/uploads/2017/04/business-android-640x353.jpg"/>
  <Carousel.Caption>
  <h3>Penggunaan Android dalam Berbagai Bidang</h3>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className ="d-block w-100" src="https://cnet2.cbsistatic.com/img/zUPPHHRkpU6kQTwKt1LNpHAMmSE=/2018/09/19/e708c963-ff8d-49ab-bc7f-2b122788e915/08-htc-t-mobile-g1-10-years-later.jpg"/>
  <Carousel.Caption>
  <h3>Perkembangan Adroid dari Waktu ke Waktu</h3>
  </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  <br/>
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
  <br/>
  <Row>
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fossbytes.com/wp-content/uploads/2018/01/Best-Android-Apps-List-fossbytes.jpg"/>
      <Card.Body>
      <p>JUDUL ARTIKEL</p>
      <p>Untuk Isi Artikel Silahkan Isi Sendiri OK Kawan-Kawan</p>
      <Button variant="primary">Baca Lebih Lanjut</Button>
      </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.extremetech.com/wp-content/uploads/2017/04/business-android-640x353.jpg"/>
    <Card.Body>
    <p>JUDUL ARTIKEL</p>
    <p>Untuk Isi Artikel Silahkan Isi Sendiri OK Kawan-Kawan</p>
    <Button variant="primary">Baca Lebih Lanjut</Button>
    </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cnet2.cbsistatic.com/img/zUPPHHRkpU6kQTwKt1LNpHAMmSE=/2018/09/19/e708c963-ff8d-49ab-bc7f-2b122788e915/08-htc-t-mobile-g1-10-years-later.jpg"/>
    <Card.Body>
    <p>JUDUL ARTIKEL</p>
    <p>Untuk Isi Artikel Silahkan Isi Sendiri OK Kawan-Kawan</p>
    <Button variant="primary">Baca Lebih Lanjut</Button>
    </Card.Body>
    </Card>
    </Col>
  </Row>
  <br/>
  <ButtonGroup className="mr-2">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    <Button>10</Button>
  </ButtonGroup>
  </Container>
      </div>
    );
  }

}

export default App;
