import React from 'react';
import p1 from '../../img/p24.jpg'
import p2 from '../../img/p25jpg.jpg'
import p3 from '../../img/p22.jpg'
import { Link } from 'react-router-dom';
const UpcomingEvent = () => {
  return (
  
      <div id='event' className="text-white w-full bg-cover bg-bottom bg-fixed bg-no-repeat bg-base-100 bg-gray-100" style={{backgroundImage: `url(${p3})`}}>
        
          <div className='lg:p-20 p-5  text-center bg-black/50'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl text-primary font-bold mb-5 lg:mb-20">Upcoming Events</h1>
            <div className='flex flex-col lg:flex-row justify-around'>
              
              <div className='w-full lg:w-1/2 px-5'><img src={p1}/></div>
              <div className='mt-10 lg:mt-0 w-full lg:w-1/2 px-5'><img src={p2}/></div>
              
            </div>
            <div>
              <Link to='/makereservation'><button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 mt-10 btn btn-xl bg-[rgba(1,1,1,0.7)] text-white '>Make A Reservation</button></Link>
            </div>
          </div>
      </div>
    
  );
};

export default UpcomingEvent;