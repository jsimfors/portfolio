// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import './styles.css';

class CarouselComponent extends Component {

    render() {
        return (
            <div>
              <Carousel>
                {this.props.images?.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                        className="d-block w-100"
                        src={require('../../imgs/' + item.source)}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>{item.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
        )
    };
}

export default CarouselComponent;