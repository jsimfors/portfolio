import React from 'react'
import "./styles.css"
import name from "../../imgs/logo_s.png"
import topbars from "../../imgs/topbars.png"
import { Row, Col} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


function Header() {

    function scrollToTop() {
        scroll.scrollToTop();
      }

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
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                portfolio&nbsp;&nbsp;&nbsp;&nbsp; 
              </Link>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                about me&nbsp;&nbsp;&nbsp;&nbsp;              
            </Link>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                contact
              </Link>

            {/* portfolio
            &nbsp;&nbsp;&nbsp;&nbsp; 
            I&nbsp;&nbsp;&nbsp;&nbsp;
            about me 
            &nbsp;&nbsp;&nbsp;&nbsp;
            I&nbsp;&nbsp;&nbsp;&nbsp;
            contact */}
        </Col>
    </Row>
    </div>
)
}


export default Header