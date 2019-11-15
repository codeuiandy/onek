import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import ImgFirstSlide1 from '../Assests/Images/slide1.jpg'
import ImgFirstSlide2 from '../Assests/Images/slide2.jpg'
import ImgFirstSlide3 from '../Assests/Images/slide3.jpg'
import '../components/componentsCSS/carosel.css'

const carousel = (props) => {
    return(
      <div>
        

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 imgres"
      src={ImgFirstSlide1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgres"
      src={ImgFirstSlide2}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgres"
      src={ImgFirstSlide3}
      alt="Third slide"
    />

  
  </Carousel.Item>
    </Carousel>
        <div>{props.children}</div>
    </div>
    )
}
export default carousel
