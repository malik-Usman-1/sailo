"use client"; 

import Button from '@/app/Button/page'

import React, { useState, useEffect } from 'react';
import { IoPlaySharp } from "react-icons/io5";
import Home2 from './Home2';

const images = [
    '/img/slide-img-1.jpg', 
    '/img/slide-img-2.jpg',
    '/img/slide-img-3.jpg'
  ];

const Home1: React.FC = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

    const handleButtonClick = () => {
        alert('Button clicked!');
      };

    
  return (
    <>
    <div className=''>
      <div className=' grid md:grid-cols-2 grid-cols-1 gap-5 '>
        <div className='  sm:px-10 px-4 md:pl-20 flex  justify-center flex-col gap-8'>
            <h2 className=' text-orange-500 text-lg'>Welcome to Sailo</h2>
            <h2 className=' lg:text-6xl text-4xl text-blue-950 font-bold'>We will provide the best Industrial service</h2>
            <p className='  lg:text-lg text-sm'>Dapibus aliquet lacus sem egestas netus vestibulum sit turpis scelerisque pharetra pelque diam
            pharetra curabitur.</p>
            <div className=' flex gap-12'>
                <Button onClick={handleButtonClick} className=' rounded-md' >Discover Morw</Button>
                <div className='  h-16  w-16 rounded-full  border-2 border-orange-400 flex justify-center items-center text-orange-500 text-3xl'><IoPlaySharp /></div>
            </div>
        </div>
        <div className='  relative'>
        <div className="carousel md:h-[700px]  h-96">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Home1
