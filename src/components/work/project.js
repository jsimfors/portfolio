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
              {item.link=="video"? 
              <div>
                <div onClick={onClick} id="special-link">{showVideo?"Hide":"Show"} video-demo of the site</div>
                <div>
                { showVideo ? 
                  <iframe src="https://drive.google.com/file/d/1o_-PLzL_UqUM5iERkcjIGxohwoyED4Gt/preview" width="640" height="340" frameBorder="0" allowFullScreen></iframe>
                 : null }
              </div>
              </div>
              :
              <a href={item.link}>{item.linktext}</a>
              }
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