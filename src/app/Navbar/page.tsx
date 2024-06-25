// components/Nav.tsx
"use client";  // Add this line to make it a Client Component

import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import Button from '../Button/page';
import { IoMdMenu } from "react-icons/io";
const Nav: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='' >
      <div className='grid grid-cols-4 h-24 '>
        <div className=' flex justify-center items-center'>
          <img src="/img/logo-3.svg" alt="Logo" className=' hidden lg:block' />
          <div className=' border-2 border-black p-1 rounded-md text-3xl block lg:hidden'>
          <IoMdMenu />
          </div>
        </div>
        <div className=' col-span-2 flex items-center justify-center'>
        <img src="/img/logo-3.svg" alt="Logo" className=' block lg:hidden' />

          <ul className='h-full w-full lg:flex justify-center items-center gap-7  hidden '>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=' flex justify-center items-center gap-4 pr-4'>
          <div className='h-12 w-12 bg-gray-300 rounded-full text-2xl flex justify-center items-center'>
            <IoIosSearch />
          </div>
          <div className='h-12 w-12 bg-gray-300 rounded-full text-2xl sm:flex justify-center items-center hidden'>
            <CiShoppingBasket />
          </div>
          <Button onClick={handleButtonClick} className=' text-lg hidden lg:block' >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
