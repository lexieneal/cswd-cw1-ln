import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Slideshow() {
    return (    
      <div style={{display: 'block', width: 700}}>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="https://www.hostelworld.com/blog/wp-content/uploads/2018/07/The-ultimate-backpacker-guide-to-Scotland.jpg" 
            height="400" alt="Two backpackers walking along a road"/>
          </Carousel.Item>
  
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2020/08/13141900/krisjanis-mezulis-__E07WwlywA-unsplash-1-scaled.jpg" 
            height="400" alt="One backpacker walking on a trail"/>
          </Carousel.Item>
  
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="https://www.alexroddie.com/wp-content/uploads/2018/06/IMG_2016-05-03_14-46-20.jpeg" 
            height="400" alt="Two backpackers on a trail"/>
          </Carousel.Item>
  
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="https://watchmesee.com/wp-content/uploads/West-Highland-Way-Scotland-Kathi-Kamleitner-052017-16.jpg" 
            height="400" alt="Backpacker with snowy mountain in background"/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

  export default Slideshow;