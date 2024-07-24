import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Skills = () => {
  return (
    <div className='py-30' id='skills'>
        <h1 className="heading mt-5 text-3xl text-white font-bold text-center">My tech <br className='sm:hidden block'/> {' '} 
        <span className='relative inline-block'>
        <span className='text-blue-300'>skills</span>
        <img src='line.png' alt='path' className='w-[186px] h-[20px] absolute -bottom-6 z-0 '/>
    </span>
</h1>

    <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
            <Button key={card.id} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            duration={Math.floor(Math.random() * 10000) + 10000 }>
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10'>
                    <img src={card.thumbnail} className='lg:w-32 md:w-20 w-16' alt={card.thumbnail} />
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold mt-2'>
                            {card.title}
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
    </div>

    </div>
  )
}

export default Skills