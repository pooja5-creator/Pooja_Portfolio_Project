import React from 'react';

const LaptopFrame = ({ projectImage, projectLink, projectName }) => {
  return (
    <div className="relative w-[600px] min-h-[300px] mx-auto
     group cursor-pointer flex justify-center items-center">

      {/* Hover Name Popup */}
      <div className="absolute -top-10 bg-gradient-to-t from-orange-600 to-black text-white px-4 py-2 rounded-md opacity-0 translate-y-[-10px]
        group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-10">
        {projectName}
      </div>

      {/* Laptop Body */}
      <div
        className="w-[100%] h-[80%] flex items-center justify-center"
        onClick={() => window.open(projectLink, '_blank')}
      >
        <img
          src={projectImage}
          alt="Project"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default LaptopFrame;
