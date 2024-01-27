import { useState } from 'react';
import { slider } from '../constants/data';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <div className='h-[93vh] w-full relative font-satoshi'>
      <div className='flex w-[400vw]' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {
          slider.map((item, index) => (
            <div key={index} className='relative'>
              <img src={item.img} alt="" />
                <div className='absolute'>

                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;

