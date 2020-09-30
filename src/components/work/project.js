import React from "react";
import { Row, Col} from 'react-bootstrap';

export default function Project({projectData}) {

  return (
    projectData.map((item, index) => {
      return (
        <div className="work-section" key={index}>
          <Row>
            <Col sm={4}>
              <img src={require('../../imgs/' + item.img)} alt="printscreen-page"/>
            </Col>
            <Col>
              <div className="title">
                {item.title}
              </div>
              <div className="subtitle">
                {item.subtitle}
              </div>
              <div className="innerText">              
                {item.info}
              </div>
              <a href={item.link}>{item.linktext}</a>
            </Col>
          </Row>
          {item.title=="Sole Trader Company"?
          (
          <Row>
            <Col sm={4}>
              <img src={require('../../imgs/insta.png')} alt="printscreen-page"/>
            </Col>
            <Col>
              <div className="innerText">              
              I spend a lot of my free time working on my graphic-design-based instagram, where I try to mix everyday photos with art and animations.</div>
              <a href={'https://www.instagram.com/jsimfors/'}> Check it out here</a>
            </Col>
          </Row>
          )
        :
        <div></div>
        }
        </div> 
      )
    }
  ))
}