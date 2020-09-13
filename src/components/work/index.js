import React from 'react'
import "./styles.css"
import pattern from "../../imgs/pattern.png"
import { Row, Col} from 'react-bootstrap';

function Work() {
return (
    <div className="work-container">
        <ul>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
        </ul>
        <img src={pattern} alt="pattern" id="backimg"/>
    </div>
)
}


export default Work