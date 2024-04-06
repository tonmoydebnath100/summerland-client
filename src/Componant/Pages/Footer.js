import React from 'react';
import logo  from '../../img/logo/logo-removebg-preview.png'
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-white">
  <aside>
    <img className='w-40 mb-2' src={logo}/>
    <p className="font-bold">
      Providing reliable services since 2010
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  
</footer>
  );
};

export default Footer;