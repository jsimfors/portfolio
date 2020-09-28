import React from 'react'
import "./styles.css"
import { Row, Col} from 'react-bootstrap';
import contactpic from "../../imgs/contact.png"


function Contact() {
return (
    <div className="contact-container" id="section3">
        <Row>
            <Col  sm={{ span: 8, offset: 2 }} >
            <img src={contactpic} alt="concactpic" id="contactImg"/>
            <br/>
            Contact info:
            Name: Johanna
            </Col>
        </Row>

    </div>
)
}


export default Contact