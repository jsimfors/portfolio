import React from 'react'
import "./styles.css"
import Project from './project.js'
import Collapsible from 'react-collapsible';
import { Row, Col} from 'react-bootstrap';
import preWorkData from './preWorkData'
import mathData from './mathData';
import graphDesData from './graphDesData.js'

function Work() {

return (
    <div className="work-container" id="section1">
        <Row>
            <Col sm={{ span: 10, offset: 1 }}>
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
                    <div id="skills-heading">
                        <Collapsible trigger="SKILLS">
                        <div className="skills-text">              
                        Programming and markup languages<br/>
                        Javascript, Python, HTML, CSS (including Less & Sass), SQL, XML, PHP<br/>
                        <br/>
                        Frameworks & Libraries<br/>
                        React, React Native, d3, Onsen UI, Material UI.<br/>
                        <br/>
                        Other skills<br/>
                        Photoshop, Illustrator, Premier Pro, After Effects, Blender.<br/>
                        <br/>
                        Bonus skill!<br/>
                        I’m a qualified barista and have worked several years full time both in Sweden and abroad! Always up to discuss the perfect brewing temperature or latest milk steaming technologies. 
                        </div>
                        </Collapsible>   
                    </div>             
                </div>
            </Col>
        </Row>
    </div>
    )
}


export default Work