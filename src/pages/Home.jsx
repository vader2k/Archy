import { useState, useEffect } from 'react';
import { slider } from '../constants/data';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust the duration based on your transition duration

    return () => clearTimeout(timeoutId);
  }, [isAnimating]);

  const handleChangeSlide = (newIndex) => {
    setIsAnimating(true);
    setCurrentSlide(newIndex);
  };

  return (
    <div className='h-[93vh] w-full relative overflow-hidden font-satoshi'>
      <div className='h-[100%] w-[100%]'>
        {slider.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              isAnimating ? 'fade-out' : ''
            } ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className='carousel-content flex flex-col gap-3'>
              <h3 className='text-[2rem] font-[100]'>"{item.h3}"</h3>
              <h1 className='text-[4.5rem] font-[900] leading-[4.5rem] tracking-wide'>
                {item.h1Top} <br />
                {item.h1Sec} <br />
                {item.h1Third}
              </h1>
              <p className='max-w-[570px]'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        {slider.map((_, index) => (
          <button
            key={index}
            onClick={() => handleChangeSlide(index)}
            className={`pagination-button ${
              index === currentSlide ? 'active' : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Home;

