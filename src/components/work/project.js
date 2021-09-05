import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

export default function Project({projectData}) {
  const [showVideo, setShowVideo] = React.useState(false);
  const onVideoClick = () => {showVideo?setShowVideo(false):setShowVideo(true)}

  return (
    projectData.map((item, index) => {
      return (
        <div className="work-section" key={index}>
          <Row>
            <Col lg={4} xs={12}>
              <img src={require('../../imgs/' + item.img)} alt="printscreen-page"/>
            </Col>
            <Col>
              <Row>
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
                </Col>
              </Row>
              <Row className="button-nav-bar">
                <Col>
                {item.link==="video"? 
                <div>
                  <Button variant="outline-light">Read more</Button>
                  <div onClick={onVideoClick} id="special-link">{showVideo?"Hide":""}Video demo</div>
                  <div>
                    { showVideo ? 
                    <iframe src="https://drive.google.com/file/d/1l7Il52AvpVanFW4m_W4RDqSxBlD8BPE7/preview" title="sandbox-video" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                    :
                    null
                    }
                  </div>
                </div>
                :
                <div>
                  {item.link==="no link"?
                  <Button variant="outline-light">Read more</Button>
                  :
                  <div>
                    <Button variant="outline-light">Read more</Button>
                    <a href={item.link}>{item.linktext}</a>
                  </div>
                  }
                </div>
                }
                </Col>
                <Col>
                  <div className="tools-bar">
                    <p>TOOLS USED:</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"/>
                    <img src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"/>
                    <img src="https://www.easyprogramming.net/logo/js.png"/>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {item.title==="Sole Trader Company"?
            (
            <Row>
              <Col sm={4}>
                <img src={require('../../imgs/insta.png')} alt="printscreen-of-insta" id="insta-pic"/>
              </Col>
              <Col>
                <div className="innerText" id="insta-text">              
                  I spend a lot of my free time working on my graphic-design-based instagram, where I try to mix everyday photos with art and animations.</div>
                  <a href={'https://www.instagram.com/jsimfors/'} >Visit my Instagram</a>
              </Col>
            </Row>
            )
          :
          <div></div>
          }
        </div> 
        )
      }
    )
  )
}