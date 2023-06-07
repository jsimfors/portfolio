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
                Hi, my name is Johanna. Let me tell you a little about myself. In 2022. I graduated with a Master of Science in Engineering at KTH Royal Institute of Technology, in Stockholm. My major was in  <a href="https://www.kth.se/en/studies/master/interactivemediatechnology">Interactive Media Technology</a>,
                specializing in Visual Media. What is that? Well, I'd summarize it as the world where mathematics, visualization, and software development meet. I have many years of experience in developing for both mobile and desktop platforms, but I am also a big fan of abstract math, (no math no code right?) and graphic design. I've done a lot of front-end work, but don't be fooled - I love working full-stack as well.
                <br/><br/>
                I started my own sole proprietorship company in 2013, to be able to work professionally as an illustrator and graphic designer on the side of my studies. Bonus fact: I actually had my own comic strip in my local newspaper every week for 8 years, which is pretty amazing considering that I am not even funny. Heh!
                <br/><br/>
                If you want to reach out to me please feel free to do so - you have my contact details below. Have a great day!
            </Col>
            <Col md={3} className="image-outer-container">
                <div className="image-container"></div>
            </Col>
        </Row>
    </div>
    )
}


export default About