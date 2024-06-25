import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='  pt-32'>
        <div className=' bg-blue-900 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:p-28  p-4'>
            <div className='  space-y-5'>
                <img src="../img/logo-2.svg" alt="" />
                <p className=' text-white '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nesciunt iure blanditiis labore tempora inventore laborum error molestias,</p>
            </div>
            <div className='  space-y-5'>
                <h2 className=' text-white  text-3xl'>Our Services</h2>
                <div className=' space-y-3'>
                    <div className=' text-white w-max flex  text-lg items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Petroleum Production </p>
                    </div>
                    <div className=' text-white w-max flex text-lg  items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Explore Tiling & Painiting </p>
                    </div>
                    <div className=' text-white w-max flex  text-lg items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Architectures & Design</p>
                    </div>
                    <div className=' text-white w-max flex text-lg  items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Power & Energy Sectors</p>
                    </div>
                </div>
            </div>
            <div className='   space-y-5'>
                <h2  className=' text-white  text-3xl'>Navigalion</h2>
                <div className=' space-y-3'>
                    <div className=' text-white w-max flex  text-lg items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Home </p>
                    </div>
                    <div className=' text-white w-max flex text-lg  items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>About Us </p>
                    </div>
                    <div className=' text-white w-max flex  text-lg items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Services</p>
                    </div>
                    <div className=' text-white w-max flex text-lg  items-center gap-2 hover:text-orange-400 duration-300 '>
                    <FaChevronRight />
                    <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='  space-y-5'>
                <h2  className=' text-white  text-3xl'>Newsletter</h2>
                <p className=' text-white'>Get latest updates and offers</p>
                <input type="text" className=' bg-transparent border-2 border-orange-500 text-white  focus:outline-none  py-3 pl-5 w-full placeholder:text-white' placeholder='Your email address' />
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Footer
