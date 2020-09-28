import React from 'react'
import "./styles.css"
import profpic from "../../imgs/profpic_blue.png"
import aboutpic from "../../imgs/aboutMe.png"
import { Row, Col} from 'react-bootstrap';
import Section from "../sections";
import dummyText from "../dummyText";

function About() {
return (
    <div className="about-container" id="section2">
        <Row>
            <Col sm={{ span: 4, offset: 1 }} className="image-container">
                <img src={profpic} alt="profpic" id="profImg"/>
            </Col>
            <Col sm={5} className="text-container">
                <img src={aboutpic} alt="profpic" id="aboutImg"/>
                <br/>
                <p>Hello about me bla bla bla
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
                </p>
            </Col>
        </Row>

    </div>
)
}


export default About