import React from 'react'
import "./styles.css"
import name from "../../imgs/logo_s.png"
import topbars from "../../imgs/topbars.png"
import { Row, Col} from 'react-bootstrap';


function Header() {
return (
    <div className="header-container">
    <img src={topbars} alt="bars" id="barsimg"/>
    <Row>
        <Col sm={4}>
            <img src={name} alt="name" id="nameimg"/>
        </Col>
        <Col sm={7} id="headertext">
            PORTFOLIO<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. 
        </Col>
    </Row>
    <Row>
        <Col className="link-meny">
            portfolio
            &nbsp;&nbsp;&nbsp;&nbsp; 
            I&nbsp;&nbsp;&nbsp;&nbsp;
            about me 
            &nbsp;&nbsp;&nbsp;&nbsp;
            I&nbsp;&nbsp;&nbsp;&nbsp;
            contact
        </Col>
    </Row>
    </div>
)
}


export default Header