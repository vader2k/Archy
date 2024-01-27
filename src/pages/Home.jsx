import { slider1, slider2, slider3, slider4 } from '../assets'
import { useState } from 'react'

const Home = () => {

  const [currentslide, setCurrentSlide ] = useState(1)

  const data = [
    {
      img: slider1,
      h3: "POSTMODERNISM",
      h1Top: "DESIGNING",
      h1Sec: "SPACES THAT",
      h1Third: "INSPIRE",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      img: slider2,
      h3: "FORM FOLLOWS FUNCTION",
      h1Top: "WHERE",
      h1Sec: "FUNCTION MEETS",
      h1Third: "BEAUTY",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      img: slider3,
      h3: "LESSONS FROM THE PAST",
      h1Top: "CREATING",
      h1Sec: "STRUCTURES",
      h1Third: "THAT STANDS",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      img: slider4,
      h3: "GREEN ARCHITECTURE",
      h1Top: "DESIGNING FOR",
      h1Sec: "A BETTER",
      h1Third: "TOMORROW",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo."
    },
  ]

  return (
    <div className='h-[95vh] w-full relative overflow-hidden'>
      <div className='h-[100%] w-[100%]'>
        {data.map((item, index) => (
          <div key={index}
          className={`carousel-slide ${index === currentslide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.img})`}}
          >
            <div className="carousel-content">
            <h3>{item.h3}</h3>
            <h1>
              {item.h1Top} <br />
              {item.h1Sec} <br />
              {item.h1Third}
            </h1>
            <p>{item.desc}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home