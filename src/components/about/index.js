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
                Hi, my name is Johanna, I am a 4th year MSc student in Interactive Media Technology, at KTH Stockholm. In other words; I have many years experience in developing both for mobile and desktop platforms. I mostly do front-end development, but have a good understanding for the whole full-stack process. 
                Apart from programming am I also a big fan of abstract math, (no math no code right?) and graphic design. I started my own sole proprietorship company in 2013, to be able to work professionally as an illustrator and graphic designer on the side of my studies. 
                I’m currently looking for an internship for next summer. Please don’t hesitate to contact me if you think that I would be a good fit for your company! 
            </Col>
            <Col sm={{ span: 3}} className="image-outer-container">
                <div className="image-container"></div>
                {/* <img src={profpic} alt="profpic" id="profImg"/> */}
            </Col>

        </Row>

    </div>
)
}


export default About