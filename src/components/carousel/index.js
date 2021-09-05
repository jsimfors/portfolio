// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import './styles.css';

class CarouselComponent extends Component {

    render() {
        return (
            <div>
              <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../imgs/' + this.props.images[0].source)}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>{this.props.images[0].caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../imgs/' + this.props.images[1].source)}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <p>{this.props.images[1].caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../imgs/' + this.props.images[2].source)}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p>{this.props.images[2].caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    };
}

export default CarouselComponent;