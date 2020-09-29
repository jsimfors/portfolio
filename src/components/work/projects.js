import React from "react";
import { Row, Col} from 'react-bootstrap';

export default function Project({ skills, title, img, info, link }) {
  return (
    <div className="work-section">
        {/* <div className="title">{title}</div> */}
        <Row>
            <Col sm={3}>
                <img src={img} alt="for-work"/>
            </Col>
            <Col>
            <div className="title">{title}</div>
            <div className="skills">{skills}</div>
            {info}<br/>
            <a href={link}>Read more and see website demo</a>
            </Col>
        </Row>
       </div>
  );
}