import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'react-bootstrap';


class Landing extends Component {
  render () {
    return (
      <div>
        <Carousel>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide3.png' />
              <h3>Koala</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide2.png' />
              <h3>Lamb</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide4.png' />
              <h3>Doll</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide1.png' />
            <h3>Cat</h3>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
}

export default Landing;
