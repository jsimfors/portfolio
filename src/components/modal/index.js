// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";
import './styles.css';

import { Modal, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from '../carousel'

class MyModalComponent extends Component {

    render() {

        return (
            <div>
                <Modal dialogClassName="full-screen-modal" show={this.props.show} onHide={() => this.props.onHide()}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.data.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Row>
                        <Col lg={8} xs={12}>
                            <CarouselComponent
                            images={'ericsson.png'}
                            />                        
                            {/* {this.props.data.img ? <img src={require('../../imgs/' + this.props.data.img)} alt="printscreen-page"/> : <div/>} */}
                        </Col>
                        <Col>
                            <div className="subtitle">
                                {this.props.data.subtitle}
                            </div>
                            <div className="tools-bar">
                                <p>Tools used:</p>
                                <ul>
                                    <li>
                                        Python <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"/>
                                    </li>
                                    <li>
                                        React <img src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"/> 
                                    </li>
                                    <li>
                                        Javascript <img src="https://www.easyprogramming.net/logo/js.png"/>
                                    </li>
                                </ul>
                            </div>
                            My Main Responsibilities
                            <ul>
                                <li>
                                    Implementing the API
                                </li>
                                <li>
                                    The user interface design
                                </li>
                            </ul>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {this.props.data.info}
                        </Col>
                    </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">Demo</Button>
                        <Button variant="secondary">Github Repository</Button>
                        <Button variant="secondary">Read the Report</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    };
}

export default MyModalComponent;