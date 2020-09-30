import React from 'react'
import "./styles.css"
import Project from './project.js'
import Collapsible from 'react-collapsible';
import imgsr from '../../imgs/smartypantz2.png';
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
                            <h3>Copy</h3>
                        </Collapsible>   
                    </div>             
                </div>
            </Col>
        </Row>
    </div>
    )
}


export default Work