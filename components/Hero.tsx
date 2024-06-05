import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import NormalButton from './ui/NormalButton'
import { GiTexas } from "react-icons/gi";
import image from "../public/mobileHero.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='mt-10 md:mt-20 pb-20  flex flex-col w-full items-center'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex flex-col flex-col-reverse md:flex-row md:flex-row-reverse relative z-10 items-center  justify-center max-w-[1024px]'>

        <Image src={image} alt='Hero Image' className='max-w-[300px] rounded-[20px] border border-slate-500 mb-4 md:block hidden'/>

            <div className='flex relative my-4 z-10 flex-col'>

                <div className='flex flex-col items-center justify-center'>


                    <TextGenerateEffect 
                        className='text-center text-[35px] md:max-w-2xl md:text-[42px]'
                        words="Bridging the Gap Between Business & Technology"
                        />


                   
                        
            <Image src={image} alt='Hero Image' className='max-w-[300px] rounded-[20px] border border-slate-500 mb-4 md:hidden block'/>

                 <p style={{display:'inline'}} className='text-center lg:tracking-wider lg:text-lg xlg:text-2xl mb-4'>
                            Hi, I&apos;m Joe, a Web Developer based out of  
                            Dallas, TX
                            <GiTexas 
                            style={{verticalAlign:'middle', display: 'inline'}}
                            className='text-[15px] md:text-[25px] ml-2'
                        />
                        </p>
                    <div className='flex gap-8'>
                    <NormalButton
                    title="View Work" />
                    <ShimmerButton 
                    title ="Contact"/>
                    </div>
                </div>
            </div>

        </div>

            
    </div>
  )
}

export default Hero