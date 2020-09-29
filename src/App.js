import React from 'react';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";
import Work from './components/work';
import Contact from './components/contact';
import Header from './components/header';
import About from './components/about';
import AnimatedCursor from "react-animated-cursor";

function App() {
  
  return (
    <BrowserRouter>
      <Container fluid>
        <AnimatedCursor 
              innerSize={8}
              outerSize={8}
              color='23, 201, 219'
              outerAlpha={0.2}
              innerScale={2}
              outerScale={3}
        />
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
