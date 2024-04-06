import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Pages/Nav.css'
const MenuNav = () => {
  return (
    <div className='lg:p-5 p-0'>
      <div className='text-center'><h1 className="lg:text-5xl text-2xl md:text-3xl text-primary font-bold mb-10">Our food menu</h1></div>
      <div className='text-center'>
        <ul id='sidebar' className=" font-bold menu menu-horizontal bg-base-200">
          <li><NavLink className={({ isActive }) =>
                                   isActive ? "active" : ""
                                  } to='/'>Main Menu</NavLink></li>
          <li><NavLink className={({ isActive }) =>
                                   isActive ? "active" : ""
                                  } to='/cs'>Chef's Special</NavLink></li>
          
          <li><NavLink className={({ isActive }) =>
                                   isActive ? "active" : ""
                                  }  to='/d'>Drinks</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuNav;