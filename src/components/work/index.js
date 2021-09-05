import React from 'react'
import "./styles.css"
import Project from './project.js'
import Collapsible from 'react-collapsible';
import { Row, Col } from 'react-bootstrap';
import preWorkData from './preWorkData'
import mathData from './mathData';
import computerGraphData from './computerGraph';
import graphDesData from './graphDesData.js';

function Work() {
    return (
        <Row>
            <Col>
            <div className="work-container" id="section1">  
            <Row>
                <Col md={{ span: 12, offset: 0 }}  xs={12}>
                    <div className="work-container-inner">
                        <h3>PREVIOUS WORK</h3>
                        <Collapsible trigger="DEVELOPMENT"> 
                            <Project
                                projectData={preWorkData}
                            />
                        </Collapsible>
                        <Collapsible trigger="COMPUTER GRAPHICS">
                            <Project
                                projectData={computerGraphData}
                            />
                        </Collapsible>
                        <Collapsible trigger="DESIGN">
                            <Project
                                projectData={graphDesData}
                            />
                        </Collapsible>
                        <Collapsible trigger="MATH">
                            <Project
                                projectData={mathData}
                            />
                        </Collapsible>
                        <div className="skills-section">
                            <Collapsible trigger="SKILLS">
                                <div className="inner-skill-section">              
                                    <div className="subtitle">Programming &#38; Markup Languages</div>
                                    JavaScript, TypeScript, Dart, Python, HTML, CSS/Less/Sass, SQL, XML, PHP, Kotlin and a good basic Java knowledge.<br/>
                                    <br/>
                                    <div className="subtitle">Frameworks, Libraries &#38; SDK's </div>
                                    React, React Native, Flutter, d3, Onsen UI, Material UI.<br/>
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