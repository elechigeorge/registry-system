import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import One from '../images/1.jpg'
import Two from '../images/2.jpg'
import Three from '../images/3.jpg'


function HomeScreen() {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="mb-5">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={One}
                        alt="First slide"
                        style={{ height: '70vh' }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Two}
                        alt="Second slide"
                        style={{ height: '70vh' }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Three}
                        alt="Third slide"
                        style={{ height: '70vh' }}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <hr />
            <Container>
                <h3>About AARIS</h3>
                <p className="lead"> AARIS is an acronym for ....</p>
            </Container>

        </div>
    );
}



export default HomeScreen
