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
                Hi, my name is Johanna, I am in my fifth and final year of my 
                Master of Science in Engineering at KTH Royal Institute of Technology,
                expected graduation June 2022.
                I am studying for my Master's in <a href="https://www.kth.se/en/studies/master/interactivemediatechnology">Interactive Media Technology</a>,
                specializing in Visual Media. 
                
                I have many years of experience in developing for both mobile and desktop platforms.
                
                I am a big fan of abstract math, (no 
                math no code right?) and graphic design. 
                I've done a lot of front-end work, but don't be fooled - I love working full-stack as well!
                
                I started my own sole proprietorship company in 2013, to be able to 
                work professionally as an illustrator and graphic designer on the side of my studies. 
                Feel free to send me an email if you think I would be a good fit for your company!
            </Col>
            <Col md={3} className="image-outer-container">
                <div className="image-container"></div>
            </Col>
        </Row>
    </div>
    )
}


export default About