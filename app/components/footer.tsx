"use client"
import React from 'react';
import Socials from './social_bar';
import Icon from './social_icon'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-7">
      {/* Footer content */}
      <div className="flex justify-center items-center pl-40">
          <img src='./pinpoint.png' width={"10px"} className="mr-1"></img>
          <p className="mr-10">Los Angeles, USA</p>
          <img src='./pinpoint.png' width={"10px"} className="mr-1"></img>          
          <p className='mr-10'>Paris, France</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='flex justify-center items-center mt-6 transform translate-x-1/2'>
          <Socials />
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;