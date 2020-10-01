import React from "react";
import { Row, Col} from 'react-bootstrap';

export default function Project({projectData}) {
  const [showVideo, setShowVideo] = React.useState(false);
  const onClick = () => {showVideo?setShowVideo(false):setShowVideo(true)}

  return (
    projectData.map((item, index) => {
      return (
        <div className="work-section" key={index}>
          <Row>
            <Col md={4}>
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
              {item.link==="video"? 
              <div>
                <div onClick={onClick} id="special-link">{showVideo?"Hide":"Show"} video-demo of the site</div>
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
                null
                :
                <a href={item.link}>{item.linktext}</a>
                }
              </div>
              }
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