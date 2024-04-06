import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from '../../img/p1.jpg'
import p2 from '../../img/p4.jpg'
import p3 from '../../img/p15.jpg'
import p4 from '../../img/p6.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };
  return (
    <div>
      <Carousel responsive={responsive} 
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={6000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass=""
            keyBoardControl
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            swipeable>
               
                  <div 
                  style={{
                    backgroundImage:` url(${p1})`,
                  }} 
                  className='min-h-screen bg-center bg-cover'>
                    <div className='hero text-center text-white min-h-screen bg-black/50 lg:p-20'>
                       <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold m-5 lg:m-20'>Established for over 30 years serving authentic Lebanese food. Having set the benchmark we strive to</h1>
                    </div>
                  </div>
                  <div 
                  style={{
                    backgroundImage:` url(${p4})`,
                  }} 
                  className='min-h-screen bg-center bg-cover'>
                    <div className='grid place-content-center text-white min-h-screen bg-black/25'>
                        <h1 className='text-xl w-1/2 md:text-4xl lg:text-4xl font-bold ms-5 lg:ms-10'>Indulge in a Symphony of Sips, Savory Lebanese Delights, and Sounds of Summer at Summerland: Where Every Bite is a Celebration!</h1>
                    </div>
                  </div>
                  <div 
                  style={{
                    backgroundImage:` url(${p3})`,
                  }} 
                  className='min-h-screen bg-center bg-cover'>
                    <div className='hero text-center text-white min-h-screen bg-black/75 lg:p-20'>
                       <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold m-5 lg:m-20'>A traditional Lebanese restaurant with an authentic atmosphere 🇱🇧 Check out our Facebook page and Instagram.</h1>
                    </div>
                  </div>
                  <div 
                  style={{
                    backgroundImage:` url(${p2})`,
                  }} 
                  className='min-h-screen bg-top bg-cover'>
                    <div className='hero text-center text-white min-h-screen bg-black/50 lg:p-20'>
                       <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold m-5 lg:m-20'>Guarantee Your Good Times: Reserve Your Table Today for an Unforgettable Fusion of Lebanese Flavors, Music, and Fun at Summerland</h1>
                       <Link to='/makereservation'><button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 text-md md:text-xl lg:text-xl font-bold btn  mt-[250px] hover:bg-black'>Book Now</button></Link>
                    </div>
                  </div>
               
                
              
            </Carousel>
    </div>
  );
};

export default Banner;