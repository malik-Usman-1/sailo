"use client";

import Card from '../Card/Card';
import  { cardData2 } from '../Data/Data';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';



const Home4: React.FC = () => {


  

  return (
    <div>
      <div className=' pt-12'>
      <div className=' md:pl-28 pl-4 space-y-2'>
        <p className=' text-blue-700 text-xl font-bold'>Blog</p>
        <h2 className=' text-5xl text-blue-950 font-bold  '>News & Articles</h2>
      </div>

<div className=' md:px-28  px-4  pt-10 '>
    <div className=' grid lg:grid-cols-3 sm:grid-cols-2  gap-6 '>


         {cardData2.map((card) => (

        
          
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              buttonLabel={card.buttonLabel}
              // onButtonClick={handleButtonClick}
            />
            
        
        ))}
        </div>

      </div>

      </div>

    </div>
  );
}

export default Home4;
