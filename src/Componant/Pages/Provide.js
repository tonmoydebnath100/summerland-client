import React from 'react';
import i1 from '../../img/p4 - Copy.jpg'
import i2 from '../../img/p2 - Copy.jpg'
import i3 from '../../img/p26.jpg'
const Provide = () => {
  return (
    <div id='provide'>
      <div className="bg-base-100 lg:p-20 p-10">
        
          <div className=' text-center'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold mb-5 lg:mb-20">We provide the following</h1>
            <div className='flex flex-col items-center lg:flex-row  lg:justify-around'>
              <div className='w-60 text-center mb-5 lg:mb-0'>
                <div className='flex justify-center mb-5'>
                  <img className='w-55 rounded-xl' src={i2}/>
                </div>
                <h1 className='font-bold mb-2 text-gray-600'>CLEAN ENVIRONMENT</h1>
                <p>Experience the charm of Summerland in a pristine setting where cleanliness is our priority and enjoy your meal.</p>
              </div>
              <div className='w-60 text-center mb-5 lg:mb-0'>
                <div className='flex justify-center mb-5'>
                  <img className='w-55 rounded-xl' src={i1}/>
                </div>
                <h1 className='font-bold mb-2 text-gray-600'>LOVELY & EXPERT CHEFS</h1>
                <p>At Summerland, our kitchen is graced by the mastery of lovely chefs who infuse every dish with passion and expertise. </p>
              </div>
              <div className='w-60 text-center mb-5 lg:mb-0'>
                <div className='flex justify-center mb-5'>
                  <img className='w-55 rounded-xl' src={i3}/>
                </div>
                <h1 className='font-bold mb-2 text-gray-600'>FRESH AND TASTY FOOD</h1>
                <p>Savor the essence of freshness at Summerland, where each bite bursts with flavor straight from our kitchen to your table. </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Provide;