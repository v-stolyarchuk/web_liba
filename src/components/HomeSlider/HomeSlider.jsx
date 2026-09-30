import React from 'react';
import SliderImport from 'react-slick';
const Slider = SliderImport.default ?? SliderImport;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSLider.scss';

export const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const slides = [
    {
      image: '/images/temp_slide.jpg', // placeholder - user should replace with actual images
      title: 'Discover Our Latest Collection',
      buttonText: 'Shop Now',
      buttonLink: '/products'
    },
    {
      image: '/images/velo_slide.jpg',
      title: 'Exclusive Services for You',
      buttonText: 'Learn More',
      buttonLink: '/services'
    },
    {
      image: '/assets/slide3.jpg',
      title: 'Get the Right Tools',
      buttonText: 'Explore Tools',
      buttonLink: '/tools'
    }
  ];

  return (
    <div className="home-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-text">
                <h2 className="slide-title">{slide.title}</h2>
                <a
                  href={slide.buttonLink}
                  className="slide-button"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};