import React from 'react'

export default function Project({ projectImg, projectName, projectLink }) {
  const handleClick = () => {
    window.open(projectLink, '_blank'); // open in a new tab
  };

  return (
    <div
      onClick={handleClick}
      className='max-w-[390px] w-full border-[1px] border-dashed border-y-orange-600
      border-x-white h-[250px] sm:h-[300px] md:h-[250px] rounded-2xl flex justify-center px-3
      items-center relative group cursor-pointer hover:scale-105 transition-all
      duration-300'
    >
      <div className="absolute -top-[60px] text-[16px]
       text-gray-100 bg-gray-950 font-semibold flex justify-center items-center px-3 py-1
       rounded-md opacity-0 translate-y-[10px] boxShadow3 
       group-hover:opacity-100 group-hover:translate-y-1 transition-all
       duration-300 z-10">
        {projectName}
      </div>

      <div className='max-w-[380px] w-full h-[220px] sm:h-[270px] md:h-[230px] rounded-2xl overflow-hidden'>
        <img src={projectImg} className='w-full h-full object-fill' alt={projectName} />
      </div>
    </div>
  );
}
