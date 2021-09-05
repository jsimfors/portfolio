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
                <Modal animation={false} dialogClassName="full-screen-modal" show={this.props.show} onHide={() => this.props.onHide()}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.data.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Row>
                        <Col md={{span: 8, offset: 2}}  xs={12} className="carousel-col">
                            <CarouselComponent
                                images={this.props.data.images}
                            />                        
                        </Col>
                        {/* <Col>
                            <div className="subtitle">
                                {this.props.data.subtitle}
                            </div>
                            <div className="tools-bar">
                                <p>Tools used:</p>
                                <ul>
                                {this.props.data?.toolsUsed?.map((item, index) => (
                                    <li key={index}>
                                        {item} 
                                    </li>
                                ))}
                                </ul>
                            </div>
                            My Main Responsibilities
                            <ul>
                            {this.props.data?.myResp?.map((item, index) => (
                                    <li key={index}>
                                        {item} 
                                    </li>
                                ))}
                            </ul>

                        </Col> */}
                    </Row>
                    <Row>
                        <Col>
                        {this.props.data.infoLong}
                        </Col>
                    </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    {this.props.data?.links?.map((item, index) => (
                        <a href={item.url} key={index}>
                            <Button variant="secondary">{item.name}</Button>
                        </a>
                    ))}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    };
}

export default MyModalComponent;