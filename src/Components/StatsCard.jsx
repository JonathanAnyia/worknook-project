import React from 'react';


export default function StatsCard({img, rounded}){
  return(
    <div className={`px-6 py-4 flex flex-col gap-2 justify-center items-center text-blue-500  w-[100%]  bg-white rounded-md ${rounded === "bottom-right" ? "rounded-br-[3rem]" : "rounded-bl-[3rem]"}`}>
      <img src={img} alt='' className='h-11 w-13' />
      <p className='text-[.8rem] md:text-[1.3rem]'>Satisfied clients</p>
      <h2 className='text-[1rem] md:text-[1.6rem] font-bold'>4237</h2>
    </div>
  )

}
