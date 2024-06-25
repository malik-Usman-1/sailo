"use client";

import Card from '../Card/Card';
import { cardData } from '../Data/Data';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Home3: React.FC = () => {
  return (
    <div>
      <div className='pt-12'>
        <div className='md:pl-28 pl-4 space-y-2'>
          <p className='text-blue-700 text-xl font-bold'>What We Offer</p>
          <h2 className='text-5xl text-blue-950 font-bold'>Our Services</h2>
        </div>

        <div className='md:px-28 px-4 pt-10'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  buttonLabel={card.buttonLabel}
                  // onButtonClick={handleButtonClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home3;
