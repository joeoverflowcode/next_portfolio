import React from 'react'

const NormalButton = ({
  title, 
  icon,
  position, }: { 
    title? : string;
    icon? : React.ReactNode;
    position? : string;
   } ) => {

    return (

        // Button code
        <button className="relative inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,75%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 tracking-widest">
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center 
             px-3 text-sm font-medium text-white gap-3'>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
          </span>
        </button>
  
  
)
      
  
}

export default NormalButton