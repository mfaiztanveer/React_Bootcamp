import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import Image1 from '../../assets/imgs/img3.png';
import Image2 from '../../assets/imgs/img4.png';
import Image3 from '../../assets/imgs/img5.png';
import nextIcon from '../../assets/imgs/next.png';
import prevIcon from '../../assets/imgs/prev.png';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company Inc.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image2,
  },
  {
    id: 3,
    name: 'Jane Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image3,
  },
  {
    id: 4,
    name: 'Jane Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image1,
  },
  {
    id: 5,
    name: 'Jane Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image2,
  },
  {
    id: 6,
    name: 'Yedne Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image3,
  },
  {
    id: 7,
    name: 'Alexne Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image3,
  },
  {
    id: 8,
    name: 'Faie Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image3,
  },
  {
    id: 9,
    name: 'Jande Smith',
    title: 'Marketing Manager, Business Co.',
    testimonial:
      'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus A.',
    profilePic: Image3,
  },
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (current, next) => setActiveIndex(next),
    };
  
    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <div className="testimonial-container">
        <h2 className="testimonial-heading">
          What Our <span>Clients Say</span>
        </h2>
        <Slider ref={sliderRef} {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => {
            const isActive = index >= activeIndex && index < activeIndex + settings.slidesToShow;
            return (
              <div key={testimonial.id} className="testimonial-card-wrapper">
                <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
                  <p className="testimonial-text">{testimonial.testimonial}</p>
                  <div className="testimonial-card-content">
                    <img src={testimonial.profilePic} alt={testimonial.name} className="testimonial-profile-pic" />
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <h4 className="testimonial-title">{testimonial.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="custom-slider-icons">
          <img src={prevIcon} onClick={previous} alt="previous-icon" className="slider-icon" />
          <img src={nextIcon} onClick={next} alt="next-icon" className="slider-icon" />
        </div>
      </div>
    );
  };
  
  export default Testimonial;
