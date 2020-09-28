import React from 'react';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";
  import Work from './components/work'
  import Contact from './components/contact'
  import Header from './components/header'
  import About from './components/about'

function App() {
  
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col>
              <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
             <Work/>
          </Col>
        </Row>
        <Row>
          <Col>
             <About/>
          </Col>
        </Row>
        <Row>
          <Col>
             <Contact/>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App;
