import React from 'react'
import "./styles.css"
import { Row, Col} from 'react-bootstrap';
import contactpic from "../../imgs/contact.png"
import linklogo from "../../imgs/linklogo.png"
import githublogo from "../../imgs/gitlogo.png"
import emaillogo from "../../imgs/maillogo.png"



function Contact() {
return (
    <div className="contact-container" id="section3">
        <Row>
            <Col  sm={{ span: 8, offset: 2 }} >
            <img src={contactpic} alt="concactpic" id="contactImg"/>
            <div className="contactLogos">
                <a href="https://www.linkedin.com/in/johanna-simfors-247313160/">
                    <img src={linklogo} alt="linklogo"/>
                </a>
                <a href="https://github.com/jsimfors/">
                    <img src={githublogo} alt="gitlogo"/>
                </a>
                <a href="https://www.linkedin.com/in/johanna-simfors-247313160/">
                    <img src={emaillogo} alt="maillogo"/>
                </a>
            </div>
            </Col>
        </Row>

    </div>
)
}


export default Contact