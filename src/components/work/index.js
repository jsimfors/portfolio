import React from 'react'
import "./styles.css"
import Project from './project.js'
import Collapsible from 'react-collapsible';
import { Row, Col } from 'react-bootstrap';
import preWorkData from './preWorkData'
import mathData from './mathData';
import graphDesData from './graphDesData.js';

function Work() {
    return (
        <Row>
            <Col>
            <div className="work-container" id="section1">  
            <Row>
                <Col md={{ span: 10, offset: 1 }}  xs={12}>
                    <div className="work-container-inner">
                        <h3>PREVIOUS WORK</h3>
                        <Collapsible trigger="DEVELOPMENT"> 
                            <Project
                                projectData={preWorkData}
                            />
                        </Collapsible>
                        <Collapsible trigger="MATH">
                            <Project
                                projectData={mathData}
                            />
                        </Collapsible>
                        <Collapsible trigger="GRAPHIC DESIGN">
                            <Project
                                projectData={graphDesData}
                            />
                        </Collapsible>
                        <div className="skills-section">
                            <Collapsible trigger="SKILLS">
                                <div className="inner-skill-section">              
                                    <div className="subtitle">Programming &#38; Markup Languages</div>
                                    JavaScript, TypeScript, Python, HTML, CSS/Less/Sass, SQL, XML, PHP, Kotlin and a good basic Java knowledge.<br/>
                                    <br/>
                                    <div className="subtitle">Frameworks &#38; Libraries</div>
                                    React, React Native, d3, Onsen UI, Material UI.<br/>
                                    <br/>
                                    <div className="subtitle">Other skills</div>
                                    Photoshop, Illustrator, Premier Pro, After Effects, InDesign, Blender.<br/>
                                    <br/>
                                    <div className="subtitle">Bonus skill!</div>
                                    I’m a qualified barista! Let's talk coffee! 
                                    <i className="fa fa-coffee" aria-hidden="true"></i>
                                </div>
                            </Collapsible>   
                        </div>             
                    </div>
                </Col>
            </Row>
        </div>
        </Col>
        </Row>
    )
}

export default Work