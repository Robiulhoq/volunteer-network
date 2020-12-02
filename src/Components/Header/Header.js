import React from 'react';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/Group 1329.png'
import Content from '../Content/Content';
import { Link } from 'react-router-dom';

const Header = () => {
    const style = {
        height: '60px',
        width: '150px'
    }
    const formStyle = {
        display: 'flex'
    }
    return (
        <div>
            <Container>
                <Row>
            <Col  sm={3}>
                <img style={style} src={logo} alt=""/>
            </Col>
            <Col sm={9}>
                        <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Donation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Event</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                    Blog
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><Button variant="primary">Ragistation</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"> <Link to="/admin"><Button variant="dark">Admin</Button></Link> </Nav.Link>
                </Nav.Item>
                    </Nav>
    
            </Col>
        </Row>
        </Container>
        <br/>
        <br/>
        <h1 className="text-center"> I GROW BY HELPING POOPLE IN NEED</h1>
        <br/>
        <Container>
  <Row className="justify-content-md-center">
    <Col  sm={3}>
    </Col>
    <Col md={6}>
    <Form>
        <Form.Group style={formStyle} controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="search"/>
            <Button  variant="dark">Search</Button>
        </Form.Group>
    </Form>
    </Col>
    <Col  sm={3}>
    
    </Col>
  </Row>
  </Container>
  <Content></Content>
      </div>
    );
};

export default Header;