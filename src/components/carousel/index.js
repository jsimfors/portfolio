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
                    src={require('../../imgs/' + this.props.images)}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../imgs/sandbox.jpg')}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../imgs/coffee.png')}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    };
}

export default CarouselComponent;