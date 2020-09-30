import React from 'react'
import "./styles.css"
import name from "../../imgs/logo_s.png"
import topbars from "../../imgs/topbars_ng.png"
import { Row, Col} from 'react-bootstrap';
import { Link } from "react-scroll";


function Header() {

return (
    <div className="header-container">
    <img src={topbars} alt="bars" id="barsimg"/>
    <Row>
        <Col sm={3} className="logo-container">
            <img src={name} alt="name" id="nameimg"/>
        </Col>
        <Col sm={8} id="headertext">
          Hi, I’m Johanna, a front-end developer and a 4th year MSc student in Interactive Media Technology. I love coding and have a sweet spot for good design.  
          Check out my latest projects, and feel free to contact me!      
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
                portfolio
              </Link>
              I
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                about me            
            </Link>
            I
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
        </Col>
    </Row>
    </div>
)
}


export default Header