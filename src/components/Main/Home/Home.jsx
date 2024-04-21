import React from 'react';
import BenifitsCard from './BenifitsCard';
import './styles/home.scss';
import i1 from '../../../assets/SchoolActivites/sn5_wide.jpeg';
import i2 from '../../../assets/SchoolActivites/pexels-geralt-21696.jpg';
import i3 from '../../../assets/SchoolActivites/pexels-pixabay-301926.jpg';
import i4 from '../../../assets/SchoolActivites/Wide1.jpeg';
import i5 from '../../../assets/SchoolActivites/photo-5.jpg';
import i6 from '../../../assets/SchoolActivites/education_up.jpg';
import i7 from '../../../assets/images/home1.jpeg';
import i8 from '../../../assets/images/schoollogo2_up - Copy.png';

const i9='https://ik.imagekit.io/snpublicschoolara/images/assembly.jpeg?updatedAt=1702019189127';

import Messagebox from './Messagebox';
const images = [i8, i3, i5, i6];
const delay = 5000;
const Home = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
      <div className='slideshow'>
        <div
          className='slideshowSlider'
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img src={image} className='slide' key={index} />
          ))}
        </div>

        <div className='slideshowDots'>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>

      <BenifitsCard />
      <Messagebox />
    </>
  );
};

export default Home;
