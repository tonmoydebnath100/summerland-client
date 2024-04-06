import React from 'react';
import MenuNav from './MenuNav';
import { Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div  id='menu'  >
      <div className='lg:p-10 p-5'>
      <MenuNav></MenuNav>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Menu;