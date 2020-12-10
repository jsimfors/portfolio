import React from 'react'
import "./styles.css"
import aboutpic from "../../imgs/aboutMe.png"
import { Row, Col} from 'react-bootstrap';

function About() {
return (
    <div className="about-container" id="section2">
        <Row>
            <Col xs={{span: 10, offset: 1}} md={{span: 5, offset: 2}} className="text-container">
                <img src={aboutpic} alt="profpic" id="aboutImg"/>
                <br/>
                Hi, my name is Johanna, I am in my penultimate year of my MSc in Interactive Media Technology at KTH Royal Institute of Technology in Stockholm. 
                I have many years of experience in developing for both mobile and desktop platforms. I mostly do front-end 
                development but have a good understanding of the whole full-stack process. I am a big fan of abstract math, (no 
                math no code right?) and graphic design. I started my own sole proprietorship company in 2013, to be able to 
                work professionally as an illustrator and graphic designer on the side of my studies. I am currently looking 
                for an internship for next summer. Please do not hesitate to contact me if you think that I would be a good 
                fit for your company!
            </Col>
            <Col md={3} className="image-outer-container">
                <div className="image-container"></div>
            </Col>
        </Row>
    </div>
    )
}


export default About