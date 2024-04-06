import React from 'react';
import p1 from '../../img/p12.jpg'
const About = () => {
  return (
    <div id='about' className="w-full bg-cover bg-bottom bg-fixed bg-no-repeat" style={{backgroundImage: `url(${p1})`}}>
      <div className='hero bg-black/75 min-h-screen'>
      <div className=" text-center pt-10 text-white">
        
          <h1 className="lg:text-5xl text-3xl font-bold">About Restaurant</h1>
          <p className="pt-6 lg:px-20 px-5 text-justify lg:text-center lg:text-xl text-md">Welcome to Summerland, where every dish tells a story and every meal is a celebration of Lebanese culinary heritage. Nestled in the heart of Australia, our restaurant invites you on a journey of flavors that transcend borders. From the tantalizing aroma of freshly grilled kebabs to the delicate sweetness of baklava, each bite is a symphony of taste that will transport you to the bustling streets of Beirut. Our commitment to authenticity is reflected in every aspect of our menu, crafted with care and passion by our talented chefs. But Summerland is more than just a dining experience – it's a destination for vibrant gatherings and unforgettable moments. With live music filling the air and a lively atmosphere that buzzes with energy, every visit to Summerland is a feast for the senses. Join us and savor the essence of Lebanon right here in Australia.</p>
        
      </div>
      </div>
</div>
  );
};

export default About;