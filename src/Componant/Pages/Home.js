import React from 'react';
import Banner from './Banner';
import About from './About';
import Provide from './Provide';
import Dishes from './Dishes';
import Menu from './Menu';
import UpcomingEvent from './UpcomingEvent';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Provide></Provide>
      <Dishes></Dishes>
      <Menu></Menu>
      <UpcomingEvent></UpcomingEvent>
      <Contact></Contact>
      
    </div>
  );
};

export default Home;