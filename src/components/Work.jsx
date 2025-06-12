import React from 'react'
import LaptopFrame from './LaptopFrame';
import CommunionImg from '../assets/CommunionHubImg.png'
import EcommerceImg from '../assets/EcommerceAppImg.png'
import BlogImg from '../assets/blogAppImg.png'
import Circle2 from './Circle2';
import SmallCircle from './SmallCircle';
import Circle from './Circle';
import Project from './Project';
export default function Work() {
  return (
    <div className='w-full min-h-[640px] bg-gray-950 relative boxShadow2
     flex justify-start py-[60px] gap-[40px] items-center flex-col '>
      <h1 className='text-4xl font-bold logo textColor'>Latest Projects</h1>
      
    
{/* 
        <Circle2 size="260px" borderColor="border-orange-600" zIndex={5} />
        <Circle2 size="220px" borderColor="border-orange-600" zIndex={2} />
        <Circle2 size="280px" borderColor="border-gray-100" zIndex={8} />
        <Circle2 size="240px" borderColor="border-gray-100" zIndex={2} />
        <Circle2 size="300px" borderColor="border-orange-600" zIndex={1} />  */}
      <div className='w-[230px] h-[1px] bg-gradient-to-t -mt-3 from-white
       to-orange-600'> </div>
      <div className='w-[100px] h-[1px] bg-gradient-to-t -mt-3 bg-orange-600'> </div>

    <div className='w-[1300px] min-h-[350px]  flex justify-center
     items-center gap-[100px] '>

 <Project
  projectImg={BlogImg} 
  projectLink='https://app-blogpro.netlify.app/'
  projectName='Blog'
 />
 <Project 
  projectImg={EcommerceImg}
  projectLink='https://product-selling-application.netlify.app/'
  projectName='E-commerce'
  />
 <Project 
  projectImg={CommunionImg}
  projectLink='https://communion-app-pro.netlify.app/'
  projectName='CommunionHub'
/>
 
  
    </div>
        
    {/* <div className='w-[100%]  min-h-[120px]  absolute right-0 top-0'>       
   <SmallCircle leftPosition='54%'/>
   {/* <SmallCircle leftPosition='53%'/>
   <SmallCircle leftPosition='30%'/>
   <SmallCircle leftPosition='31%'/> */}
  {/* </div> */} 
     {/* <section className="py-10 text-center h-[400px]">
      <div className="flex flex-wrap justify-center  w-full min-h-[300px]">
        <LaptopFrame
          projectImage={BlogImg} // Replace with your image
          projectLink="https://communion-app-pro.netlify.app/"
          projectName='Blog App'
        />
        <LaptopFrame
          projectImage={CommunionImg}
          projectLink="https://app-blogpro.netlify.app/"
          projectName='Communion Hub'
        />
        <LaptopFrame
          projectImage={EcommerceImg}
          projectLink="https://product-selling-application.netlify.app/"
          projectName='E-commerce'
        />
        {/* Add more projects as needed */}
       {/* </div> */}
 
     
    </div>
  )
}



   
  


