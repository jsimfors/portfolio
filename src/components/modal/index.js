import React, { Component } from "react";
import './styles.css';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                    {this.props.data.images?.map((item, index) => (
                        <Col>
                            <img
                            className="d-block w-100"
                            src={require('../../imgs/' + item.source)}
                            alt="First slide"
                            />
                        </Col>
                    ))}
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