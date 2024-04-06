import React from 'react';
import logo from '../../img/logo/logo-removebg-preview.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  return (
    <div className='sticky z-10  -mb-[75px] text-white'  style={{
      'background-color':'linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73))'
    }} >
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
                <li className='hover:text-white hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><Link   to='/'>Home</Link></li>
                  <li  className=' hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#about'>About</HashLink></li>
                  <li className=' hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#provide'>Services</HashLink></li>
                  <li className=' hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#menu'>Menu</HashLink></li>
                  <li className=' hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#event'>Events</HashLink></li>
                  <li className=' hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#contact'>Contact</HashLink></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl"><img className='w-40' src={logo}/></Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
            <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><Link   to='/'>Home</Link></li>
            <li  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#about'>About</HashLink></li>
            <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#provide'>Services</HashLink></li>
            <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#menu'>Menu</HashLink></li>
            <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#event'>Events</HashLink></li>
            <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#contact'>Contact</HashLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/makereservation' className="hidden lg:flex md:flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 mx-5 btn btn-sm hover:text-[#ffffff] hover:bg-[rgba(1,1,1,0.7)] ">MAKE A RESERVATION</Link>
      </div>
    </div>
    </div>
  );
};

export default Nav;