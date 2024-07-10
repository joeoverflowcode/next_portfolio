import React from 'react'
import NormalButton from './ui/NormalButton'
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from '@/data';
import ShimmerButton from './ui/ShimmerButton';


const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            {/* <h1 className='heading lg:max-w-[70vw]'>
                Ready to add a highly motivated member to your team? <span className='text-blue-300'>Contact</span> me today.
            </h1> */}

            <h1 className="heading mt-5 text-3xl text-white font-bold text-center">Ready to add a highly motivated member to your team? {' '}  <br /> 
        <span className='relative inline-block pt-3'>
        <span className='text-blue-300'>Contact {' '}</span>
        <img src='line.png' alt='path' className='w-[140px] md:w-[180px] h-[20px] absolute -bottom-5 z-0 '/> 
        me today.
    </span>
</h1>
            <p className='text-white-200 mt-10 my-5 text-center'> Let's discuss how I can increase the value in your next tech project.
            </p>

            <a href='mailto:aguado.joe@gmail.com?subject=Work Inquiry'>
                {/* <NormalButton
                title='Email'
                position='right'
                icon={<FaLocationArrow />}
                /> */}
                <ShimmerButton 
                title='Email'
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col flex-col-reverse justify-between items-center">
        <p className="sm:text-sm text-xs md:font-normal font-light my-3">
          Copyright © 2024 Joe Aguado
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.url} target="_blank" rel="noopener noreferrer">
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={30} height={30} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer