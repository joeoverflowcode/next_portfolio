import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './3d-pin'
import { MdOutlineArrowOutward } from "react-icons/md";


const RecentProjects = () => {
  return (
    <div id='projects' className='pt-40 pb-4'>
        <h1 className="heading">Some of my recent {' '} 
            <span className='text-blue-300'>projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 '>
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    
                     <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[40vh] sm:h-[40vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img 
                                src={img} 
                                alt={title}
                                className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text- lg:font-normal font-light text-sm line-clamp-2'>
                          {des}  
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon,index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center'
                                        style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon}
                                        className='p-2' />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex md:text-xl text-base text-blue-300'>Check Live Site</p>
                                <MdOutlineArrowOutward 
                                    className='ms-3
                                    text-blue-300'
                                    size={28}
                                />
                            </div>
                        </div>
                     </PinContainer>   
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects