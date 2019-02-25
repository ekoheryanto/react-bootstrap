import React, { Component } from 'react';
import {Container, Row, Col, Media, Navbar, Nav, Alert, Badge, Breadcrumb, Button,
  ButtonGroup, Card, Carousel, Dropdown, Form, InputGroup, Jumbotron, FormControl, Pagination,
ProgressBar, Tabs, Tab, Collapse} from "react-bootstrap";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      buka : false
    };
  }

  render() {
    return (
      <div>
  <Container>
  <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Firmware Studio</Navbar.Brand>
  <Nav>
    <Nav.Item><Nav.Link href="#">Seputar StartUp</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="#">Tutorial Android</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="#">Login</Nav.Link></Nav.Item>
  </Nav>
  </Navbar>
  <br/>
  <Alert variant="success">login anda berhasil !! </Alert>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">StartUp</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Android</Breadcrumb.Item>
  </Breadcrumb>
  <br/>
  <Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
  Pilih Kategory
  </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item href="#">Tutorial</Dropdown.Item>
  <Dropdown.Item href="#">StartUp</Dropdown.Item>
  <Dropdown.Item href="#">Android</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  <br/>
  <Tabs defaultActiveKey="profile" >
    <Tab eventKey="home" title="Home">
      <p>Ini Halaman Home</p>
    </Tab>
    <Tab eventKey="profile" title="Profile">
      <p>Ini Halaman Profile</p>
    </Tab>
    <Tab eventKey="contact" title="Contact">
        <p>Ini Halaman Contact</p>
    </Tab>
  </Tabs>
  <br/>
  <Carousel>
  <Carousel.Item>
  <img className ="d-block w-100" src="https://fossbytes.com/wp-content/uploads/2018/01/Best-Android-Apps-List-fossbytes.jpg" alt="android1"/>
  <Carousel.Caption>
  <h3>Social Media on Android</h3>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className ="d-block w-100" src="https://www.extremetech.com/wp-content/uploads/2017/04/business-android-640x353.jpg" alt="android2"/>
  <Carousel.Caption>
  <h3>Penggunaan Android dalam Berbagai Bidang</h3>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className ="d-block w-100" src="https://cnet2.cbsistatic.com/img/zUPPHHRkpU6kQTwKt1LNpHAMmSE=/2018/09/19/e708c963-ff8d-49ab-bc7f-2b122788e915/08-htc-t-mobile-g1-10-years-later.jpg" alt="android3"/>
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
  <ProgressBar animated now={89} label="89 % Mohon Tunggu ..."/>
  <br/>
  <Jumbotron>
  <Container>
  <h1>Firmware Studio</h1>
  <p>Web Developer & Mobile Developer</p>
  <Button variant="warning">Selengkapnya</Button>
  </Container>
  </Jumbotron>
  <Row>
  <Col>
  <Form>
  <Form.Group>
  <Form.Label>Nama</Form.Label>
  <Form.Control type="text" placeholder="Masukan Nama Anda"/>
  </Form.Group>
  <Form.Group>
  <Form.Label>E-mail</Form.Label>
  <Form.Control type="email" placeholder="Masukan Alamat e-mail Anda"/>
  <Form.Text className="text-muted">Alamat e-mail anda akan kami jaga kerahasiaannya</Form.Text>
  </Form.Group>
  <Form.Group>
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password"/>
  </Form.Group>
  <Form.Group>
  <Form.Check type="checkbox" label="Saya Setuju"/>
  </Form.Group>
  <Button type="submit">Submit</Button>
  </Form>
  </Col>
  <Col>
  {
    //<Image src="https://www.extremetech.com/wp-content/uploads/2017/04/business-android-640x353.jpg" roundedCircle/>
  }
  <InputGroup className="mb-3">
  <InputGroup.Prepend>
  <InputGroup.Text>@</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl type="text" placeholder="Username"/>
  </InputGroup>
  <br/>
  <Button variant="success" onClick={()=> this.setState({ buka : !this.state.buka})}>Silahkan Tekan</Button>
  <Collapse in={this.state.buka}>
  <p>Isi dari informasinya adalah ini, silahkan tekan lagi dan terus menerus sampai tangan anda pegel</p>
  </Collapse>
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
  <br/> <br/>
 <Pagination>
 <Pagination.Item>1</Pagination.Item>
 <Pagination.Item>2</Pagination.Item>
 <Pagination.Item>3</Pagination.Item>
 <Pagination.Item>4</Pagination.Item>
 <Pagination.Item>5</Pagination.Item>
 <Pagination.Item active >6</Pagination.Item>
 <Pagination.Item>7</Pagination.Item>
 <Pagination.Item>8</Pagination.Item>
 <Pagination.Item>9</Pagination.Item>
 <Pagination.Item>10</Pagination.Item>
 </Pagination>
  </Container>
      </div>
    );
  }

}

export default App;
