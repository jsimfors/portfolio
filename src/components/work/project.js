import React from "react";
import { Row, Col} from 'react-bootstrap';

export default function Project({projectData}) {

  return (
    projectData.map((item, index) => {
      return (
    <div className="work-section" key={index}>
        {/* <div className="title">{title}</div> */}
        <Row>
            <Col sm={3}>

                <img src={item.img} alt="for-work"/>
            </Col>
            <Col>
            <div className="title">{item.title}</div>
            <div className="skills">{item.skills}</div>
            {item.info}<br/>
            <a href={item.link}>Read more and see website demo</a>
            </Col>
        </Row>
    </div> 
      )
    }
  ))
}