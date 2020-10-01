import React from 'react'
import "./styles.css"
import aboutpic from "../../imgs/aboutMe.png"
import { Row, Col} from 'react-bootstrap';

function About() {
return (
    <div className="about-container" id="section2">
        <Row>
            <Col sm={{span: 5, offset: 2}} className="text-container">
                <img src={aboutpic} alt="profpic" id="aboutImg"/>
                <br/>
                Hi, my name is Johanna, I am a fourth year MSc student in Interactive Media Technology at KTH Stockholm. I have many years experience in developing for both mobile and desktop platforms. I mostly do front-end development, but have a good understanding for the whole full-stack process. 
                I am also a big fan of abstract math, (no math no code right?) and graphic design. I started my own sole proprietorship company in 2013, to be able to work professionally as an illustrator and graphic designer on the side of my studies. 
                I am currently looking for an internship for next summer. Please do not hesitate to contact me if you think that I would be a good fit for your company! 
            </Col>
            <Col sm={{ span: 3}} className="image-outer-container">
                <div className="image-container"></div>
            </Col>

        </Row>

    </div>
)
}


export default About