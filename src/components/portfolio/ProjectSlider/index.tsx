import React, { useState, useCallback, useEffect } from 'react';
import SliderControls from './SliderControls';
import SliderDots from './SliderDots';
import SliderImage from './SliderImage';
import Banner from "../../../assets/banner.jpeg"
import Neat from "../../../assets/neatWOrk.jpeg"
import RT from "../../../assets/rooofTop.jpeg"
import Roof from "../../../assets/roof.jpeg"


const slides = [
  {
    src: Banner,
    alt: 'Solar panel installation on modern home',
  },
  {
    src: Neat,
    alt: 'Commercial solar installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    alt: 'EV charging station installation',
  },
  {
    src: RT,
    alt: 'Residential solar array',
  }, {
    src: Roof,
    alt: 'Residential solar array',
  },
];

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const screen = window.innerWidth
  return (
    <div style={{minHeight:screen>700?"600px":"245px"}} className="relative  w-full overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <SliderImage
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          isActive={currentSlide === index}
        />
      ))}
      
      <SliderControls
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
      
      <SliderDots
        total={slides.length}
        current={currentSlide}
        onSelect={setCurrentSlide}
      />
    </div>
  );
}