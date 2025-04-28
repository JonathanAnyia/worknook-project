import React from 'react';


  function ServiceCard({img, title, className,content}){
    const classNameStyle = className

    return (
      <section >
        <div className={`px-4 py-3 text-left w-[100%] rounded-md ${className}`}>
          <img src={img} alt=''/>
          <h3 className='mb-4 font-bold text-[1.2rem] md:text-[1.4rem]'>{title}</h3>
          <p className='font-semibold mb-4'>{content}</p>
        </div>
      </section>
    );
  }



export default ServiceCard;
