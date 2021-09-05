import React, { Component, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import MyModalComponent from '../modal';
import preWorkData from './preWorkData';
import './styles.css'

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      data: {}
    };
  }
  // const [showVideo, setShowVideo] = useState(false);
  // const onVideoClick = () => {showVideo?setShowVideo(false):setShowVideo(true)}

  handleShow = (num) => {
    const myObject = preWorkData;

    // const myObject = [
    //   {
    //     id: 1,
    //     name: 'Victor Rippin',
    //     address: '4032 Cordia Streets'
    //   }, {
    //     id: 2,
    //     name: 'Jamey Zieme',
    //     address: '3733 Tremblay Throughway'
    //   }, {
    //     id: 3,
    //     name: 'Madelyn Ruecker Sr.',
    //     address: '44487 Reba Drive'
    //   },
    // ];

    this.setState({
      show: true,
      data: preWorkData[num]
    });
  };

  handleClose = (fromModal) => {
    alert(fromModal.msg);

    this.setState({
      show: false
    });
  };

  render() {
    return (
      preWorkData.map((item, index) => {
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
                  {/* -------------- */}
                  <Button variant="primary" onClick={() => this.handleShow(index)} >
                    Launch Bootstrap Modal
                  </Button>
                  </Col>
                </Row>
                <Row className="button-nav-bar">
                  <Col>
                  {item.link==="video"? 
                  <div>
                    
                    <Button variant="outline-light">Read more</Button>
                    {/* <div onClick={onVideoClick} id="special-link">{showVideo?"Hide":""}Video demo</div> */}
                    <div>Video demo</div>

                    {/* <div>
                      { showVideo ? 
                      <iframe src="https://drive.google.com/file/d/1l7Il52AvpVanFW4m_W4RDqSxBlD8BPE7/preview" title="sandbox-video" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                      :
                      null
                      }
                    </div> */}
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
            <MyModalComponent
              show={this.state.show}
              title={this.state.title}
              body={this.state.body}
              data={this.state.data}
              onClick={this.handleClose}
              onHide={this.handleClose} />
          </div> 
          )
      }
      ))
  }
}

export default Project;


/* innan: */
// return (

      
//   <div>
//     <Button variant="primary" onClick={this.handleShow} >
//       Launch Bootstrap Modal
//     </Button>

//     {preWorkData[0].title}

//     <MyModalComponent
//       show={this.state.show}
//       title={this.state.title}
//       body={this.state.body}
//       data={this.state.data}
//       onClick={this.handleClose}
//       onHide={this.handleClose} />

//   </div>
// );
/* ---- */ 

// export default function Project({projectData}) {
//   const [showVideo, setShowVideo] = React.useState(false);
//   const onVideoClick = () => {showVideo?setShowVideo(false):setShowVideo(true)}
  
//   /* FOR MODAL */
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // const [show, setShow] = React.useState(false);
//   // const [currentItem, setCurrentItem] = React.useState(1);
//   // const handleClose = () => setShow(false);
//   // function handleShow(item) {
//   //   setCurrentItem(item);
//   //   setShow(true);
//   // }

//   return (
//     projectData.map((item, index) => {
//       return (
//         <div className="work-section" key={index}>
//           <Button variant="primary" onClick={handleShow}>
//             Launch Bootstrap Modal
//           </Button>
//           <Row>
//             <Col lg={4} xs={12}>
//               <img src={require('../../imgs/' + item.img)} alt="printscreen-page"/>
//             </Col>
//             <Col>
//               <Row>
//                 <Col>
//                 <div className="title">
//                   {item.title}
//                 </div>
//                 <div className="subtitle">
//                   {item.subtitle}
//                 </div>
//                 <div className="innerText">              
//                   {item.info}
//                 </div>
//                 </Col>
//               </Row>
//               <Row className="button-nav-bar">
//                 <Col>
//                 {item.link==="video"? 
//                 <div>
//                   <Button variant="outline-light">Read more</Button>
//                   <div onClick={onVideoClick} id="special-link">{showVideo?"Hide":""}Video demo</div>
//                   <div>
//                     { showVideo ? 
//                     <iframe src="https://drive.google.com/file/d/1l7Il52AvpVanFW4m_W4RDqSxBlD8BPE7/preview" title="sandbox-video" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
//                     :
//                     null
//                     }
//                   </div>
//                 </div>
//                 :
//                 <div>
//                   {item.link==="no link"?
//                   <Button variant="outline-light">Read more</Button>
//                   :
//                   <div>
//                     <Button variant="outline-light">Read more</Button>
//                     <a href={item.link}>{item.linktext}</a>
//                   </div>
//                   }
//                 </div>
//                 }
//                 </Col>
//                 <Col>
//                   <div className="tools-bar">
//                     <p>TOOLS USED:</p>
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"/>
//                     <img src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"/>
//                     <img src="https://www.easyprogramming.net/logo/js.png"/>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//           {item.title==="Sole Trader Company"?
//             (
//             <Row>
//               <Col sm={4}>
//                 <img src={require('../../imgs/insta.png')} alt="printscreen-of-insta" id="insta-pic"/>
//               </Col>
//               <Col>
//                 <div className="innerText" id="insta-text">              
//                   I spend a lot of my free time working on my graphic-design-based instagram, where I try to mix everyday photos with art and animations.</div>
//                   <a href={'https://www.instagram.com/jsimfors/'} >Visit my Instagram</a>
//               </Col>
//             </Row>
//             )
//           :
//           <div></div>
//           }
//         </div> 
//         )
//       }
//     )
//   )
// }
