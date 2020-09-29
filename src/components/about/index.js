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
            <Col sm={{ span: 3, offset: 2 }} className="image-outer-container">
                <div className="image-container"></div>
                {/* <img src={profpic} alt="profpic" id="profImg"/> */}
            </Col>
            <Col sm={5} className="text-container">
                <img src={aboutpic} alt="profpic" id="aboutImg"/>
                <br/>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello about me bla bla bla Lorem ipsum dolor sit amet, 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;consectetur adipiscing elit, sed do eiusmod tempor 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;ut labore et dolore magna aliqua. Ut enim ad minim, 
                <br/>&nbsp;&nbsp;quis nostrud exercitationullamco laboris nisi blaisi.
                <br/>adipiscing elit, sed do eiusmod elit brol.
                </p>
            </Col>
        </Row>

    </div>
)
}


export default About