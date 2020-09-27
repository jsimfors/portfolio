import React from 'react'
import "./styles.css"
import profpic from "../../imgs/profpic_1.jpg"
import { Row, Col} from 'react-bootstrap';
import Section from "../sections";
import dummyText from "../dummyText";

function About() {
return (
    <div className="about-container" id="section2">
        <Row>
            <Col sm={{ span: 3, offset: 2 }}>
                <img src={profpic} alt="profpic"/>
            </Col>
            <Col sm={5}>
                Hello about me bla bla bla
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
        </Row>

    </div>
)
}


export default About