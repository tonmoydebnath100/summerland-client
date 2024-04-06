import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import i1 from '../../img/dishes/p7-removebg-preview.png'
import i2 from '../../img/dishes/p21-removebg-preview.png'
import i3 from '../../img/dishes/p17-removebg-preview.png'
import i4 from '../../img/dishes/p19-removebg-preview.png'
import i5 from '../../img/dishes/p18-removebg-preview.png'
import i6 from '../../img/dishes/p20-removebg-preview.png'
import i7 from '../../img/dishes/p2-removebg-preview.png'
const Dishes = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };
  return (
    <div >
      <div className="min-h-screen lg:p-10 p-5 bg-gray-100">
        
          <div className=' text-center p-5'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl text-primary font-bold mb-5 lg:mb-10">Signature Dishes</h1>
            <Carousel responsive={responsive} 
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
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
            
            swipeable>
               
              <div className='text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38  h-80' src={i1}/>
                </div>
                <h1 className='font-bold mb-2'>Fattoush with crispy fried</h1>
                <p>Indulge in our Fattoush salad topped with irresistibly crispy fried goodness, a tantalizing twist on a Lebanese classic</p>
              </div>
              <div className=' text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38 h-80' src={i2}/>
                </div>
                <h1 className='font-bold mb-2'>Shanglish</h1>
                <p>Discover the savory delight of Shanglish, a Middle Eastern cheese sensation, perfectly complementing our cold mezze selection</p>
              </div>
              <div className=' text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38 h-80' src={i3}/>
                </div>
                <h1 className='font-bold mb-2'>Mushroom</h1>
                <p>Delight in the earthy richness of our mushroom dish, a tantalizing symphony of flavors in every bite.</p>
              </div>
              <div className=' text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38 h-80' src={i4}/>
                </div>
                <h1 className='font-bold mb-2'>Sizzling Garlic Prawns</h1>
                <p>Savor the succulent perfection of our sizzling garlic prawns, a flavor explosion that ignites the palate.</p>
              </div>
              <div className=' text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38 h-80' src={i5}/>
                </div>
                <h1 className='font-bold mb-2'>Chicken Liver</h1>
                <p>Indulge in the rich and savory delight of our perfectly seasoned chicken liver, a culinary experience that's simply unforgettable</p>
              </div>
              <div className=' text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38 h-80' src={i6}/>
                </div>
                <h1 className='font-bold mb-2'>Hummus with Lebanese bread</h1>
                <p>Experience the timeless charm of our staple: Hummus paired with warm Lebanese bread and a drizzle of olive oil, a classic taste of Lebanon</p>
              </div>
              <div className=' text-center px-5'>
                <div className='flex justify-center mb-5'>
                  <img className='w-38 h-80' src={i7}/>
                </div>
                <h1 className='font-bold mb-2'>Fried Fish</h1>
                <p>Savor the crispy perfection of our fried fish, a delicious catch cooked to golden perfection</p>
              </div>
               
                
              
            </Carousel>
            
              
              
              
            
          </div>
      </div>
    </div>
  );
};

export default Dishes;