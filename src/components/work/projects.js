import React from "react";
import { Row, Col} from 'react-bootstrap';

export default function Project({ title, subtitle, img, info, link }) {
  return (
    <div className="work-section">
        <div className="title">{title}</div>
        <Row>
            <Col sm={3}>
                <img src={img}/>
            </Col>
            <Col>
            <div className="subtitle">{subtitle}</div>
            {info}<br/>
            <a href={link}>Read more and see website demo</a>
            </Col>
        </Row>
       </div>
  );
}