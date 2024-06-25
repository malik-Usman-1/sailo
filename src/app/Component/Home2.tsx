import React from 'react'

const Home2 = () => {
  return (
    <>
    <div className=' md:p-10 p-4 pt-16'>
        <div className=' grid lg:grid-cols-2 grid-cols-1 '>
            <div className='  flex justify-center'>
                <img src="/img/about-1.jpg" alt="" />
            </div>
            <div className='  px-14 space-y-7 pt-5'>
            <h2 className=' text-blue-700 text-lg'>About Company</h2>
            <h2 className=' lg:text-6xl text-4xl text-blue-950 font-bold'>We will provide the best Industrial service</h2>
            <p className='  lg:text-lg text-sm text-gray-600'>Our industry's business policy encompasses the strategies, guidelines, and practices that technology companies use to achieve their goals and objectives. The policies may vary depending on the company's size, market position, and competitive landscape. Commodo erat amet vitae consectetur consectetur feugiat.</p>
            <p  className='  text-lg text-gray-600'>Tellus viverra eu risus ut ipsum magna sed odio elit. Sed sem purus tincidunt condimentum amet condimentum massa. Nunc vel nascetur id cras.</p>
            <div className=' flex  items-center justify-between '>
                <div className=' space-y-2'><h2 className=' text-blue-950 text-4xl font-medium'>Savannah Nguyen</h2>
                <p>CEO & Founder of Manit</p>
                </div>
                <div>
                    <img src="/img/signeture.png" alt="" />
                </div>
            </div>
            </div>


        </div>
      
    </div>
    </>
  )
}

export default Home2
