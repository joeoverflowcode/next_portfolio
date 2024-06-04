import React from 'react'

const NormalButton = ( {title}: { title : any } ) => {

    return (

        // Button code
        <button className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 tracking-widest">
          {title}
        </button>
  
  
)
      
  
}

export default NormalButton