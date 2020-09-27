import React from 'react'
import "./styles.css"
import pattern from "../../imgs/pattern.png"
import { Row, Col} from 'react-bootstrap';


function Work() {
return (
    <div className="work-container" id="section1">
        <h5>PREVIOUS WORK </h5>
        <img src={pattern} alt="pattern" id="backimg"/>
    </div>
)
}


export default Work