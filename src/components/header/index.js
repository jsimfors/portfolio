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
        <Col md={5} lg={3} className="logo-container">
          <img src={name} alt="name" id="nameimg"/>
        </Col>
        <Col md={7} lg={8} id="headertext">
          Hi, I’m Johanna, a front-end developer and an MSc student in Interactive Media Technology. I love to code and have a sweet spot for good design.
        </Col>
      </Row>
      <Row>
        <div className="link-meny">
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
        </div>
    </Row>
  </div>
  )
}

export default Header