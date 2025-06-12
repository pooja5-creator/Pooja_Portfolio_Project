import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PoojaImg from "/src/assets/poojaCreativeimg.png"
import Circle2 from './Circle2';
import Circle3 from './Circle3';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const skillArr=['JavaScript','React.js','Redux','HTML','CSS',"Sass",'Tailwind',"GitHub"]
  const LinkArr = [
    {
      link: 'mailto:py5825590@gmail.com',
      name: <i className="fa-solid fa-envelope"></i>,
    },
    {
      link: 'https://www.linkedin.com/in/pooja-pro/',
      name:  <i className="fa-brands fa-linkedin-in"></i>,
    },
    {
      link: 'https://wa.me/917410903250',
      name: <i className="fa-brands fa-whatsapp"></i>,
    },
    {
      link: 'https://github.com/pooja5-creator',
      name: <i className="fa-brands fa-github"></i>,
    },
    {
      link: 'https://drive.google.com/file/d/1qBkb051ssOoFZsIrAZWINPZvRQVm3zwq/view?usp=sharing',
      name: <i className="fa-solid fa-file"></i>,
    },
  ];

  return (
    <div className='w-full min-h-[245px] bg-gray-950
boxShadow2 flex justify-center items-center flex-col gap-5 relative'>
    <h1 className='text-2xl font-bold capitalize logo textColor2 text-center'>If you want to Know More about me than click here</h1> 
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-zinc-900 to-orange-600
         text-white  font-semibold rounded-xl shadow-lg hover:scale-105
         transition text-[17px] "
      >
        About Me
      </button>
    <div className='w-[100px] sm:w-[300px] h-[100px] flex justify-center items-center
     gap-5 absolute left-0 bottom-0'>
    <div className='w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass' style={{ animationDelay: '0ms' }}></div>
    <div className='w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass' style={{ animationDelay: '200ms' }}></div>
    <div className='w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass' style={{ animationDelay: '400ms' }}></div>
</div>
    <div className='w-[100px] sm:w-[300px] h-[100px] flex justify-center items-center gap-5 
    absolute right-0 bottom-0'>
    <div className='w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass' style={{ animationDelay: '0ms' }}></div>
    <div className='w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass' style={{ animationDelay: '200ms' }}></div>
    <div className='w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass' style={{ animationDelay: '400ms' }}></div>
</div>

     {/* <div className='w-[300px] h-[100px] flex justify-center items-center gap-5
      absolute right-0 bottom-0'>
        <div className='w-4 h-4 bg-gray-100 border-[2px] border-orange-600 border-dotted rounded-[50%] '></div>
       <div className='w-4 h-4 bg-gray-100 border-[2px] border-orange-600 border-dotted rounded-[50%] '></div>
       <div className='w-4 h-4 bg-gray-100 border-[2px] border-orange-600 border-dotted rounded-[50%] '></div>
      </div> */}

      {/* AnimatePresence handles exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 
            backdrop-blur-sm
             z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black text-gray-800 p-8 rounded-2xl shadow-2xl w-full  h-full 
              relative flex justify-center items-center flex-col"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="particles-bg"></div>
                </div>
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-100 hover:text-orange-600 cursor-pointer"
              >
                ×
              </button>
          
            <div className='w-full h-full  relative  flex justify-center items-center flex-col gap-5'>
             <Circle2 size="260px" borderColor="border-orange-600" zIndex={5} />
             <Circle2 size="220px" borderColor="border-orange-600" zIndex={2} />
             <Circle2 size="280px" borderColor="border-gray-100" zIndex={8} />
             <Circle2 size="240px" borderColor="border-gray-100" zIndex={2} />
             <Circle2 size="300px" borderColor="border-orange-600" zIndex={1} />
                 <Circle3 size="260px" borderColor="border-orange-600" zIndex={5} />
                     <Circle3 size="220px" borderColor="border-orange-600" zIndex={2} />
                     <Circle3 size="280px" borderColor="border-gray-100" zIndex={8} />
                     <Circle3 size="240px" borderColor="border-gray-100" zIndex={2} />
                     <Circle3 size="300px" borderColor="border-orange-600" zIndex={1} /> 
            <div className='w-[1300px] h-[800px]  p-3 flex justify-start items-start gap-5 flex-col'>
  
            <h1 className='text-4xl font-bold logo textColor flex justify-center items-center gap-3'><div className='w-[50px] bg-amber-800 h-auto rounded-2xl overflow-hidden border-[1px] border-dashed
             border-orange-600 '>
          <img className='w-full h-full object-cover object-top' src={PoojaImg} alt="" /></div>
          About Me </h1>
            <div className='w-[230px] h-[1px] bg-gradient-to-t from-white
             to-orange-600'> </div>
            <div className='w-[100px] h-[1px] bg-gradient-to-t bg-orange-600'> </div>
            <h1 className='logo text-2xl font-semibold text-gray-100 mt-5'>I'm Pooja Yadav a, <span className='text-orange-600'>Frontend Developer.</span> </h1>
            <p className='text-gray-100 text-[18px] logo'>I am a creative and enthusiastic person who has a good understanding of frontend development. Right now, I am learning backend technologies to become a full stack developer. I enjoy making websites that look good and work well, and I’m always excited to create something new. I also like helping others with building the frontend part of their websites. My goal is to keep learning, improve my skills, and build websites that people find useful and easy to use.</p>
            <p className='text-gray-100 text-[18px] logo'>Feel free to explore my <span className='text-orange-600'>Portfolio</span> and reach out if you are looking to collaborate on your next project.</p>
             <div className='min-w-[300px] min-h-[80px] py-4  flex justify-start items-start gap-5'>
              {
                skillArr.map((skillItem,index)=> <h1 className='text-gray-100  px-3 py-2 rounded-2xl boxShadow2' key={index}>{skillItem}</h1>)
              }
            
             </div>
             <h1 className='text-[23px] text-gray-100 logo'>
              <span className='text-orange-600 px-1 py-1'>“Learning never exhausts the mind.”</span>- Its My Opinion</h1>
              
               <div className="w-[500px] h-auto flex justify-start items-start gap-6">
          {LinkArr.map((linkItem, index) => {
            const isExternal = linkItem.link.startsWith('http') || linkItem.link.startsWith('mailto');
            return isExternal ? (
              <a
                key={index}
                href={linkItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 text-[27px]  rounded-[50%] 
                border-[1px] border-dashed my-4
                 border-orange-600 px-[10px] py-[1px]"
              >
                {linkItem.name}
              </a>
            ) : (
              <Link
                key={index}
                to={`/${linkItem.link}`}
                className=" text-[25px] "
              >
                {linkItem.name}
              </Link>
            );
          })}
        </div>
        <button className=' text-orange-600 font-semibold hover:text-gray-100 hover:bg-orange-600
        transition-all duration-100 cursor-pointer mt-3 px-3 py-2 rounded-2xl border-[1px]
         border-dashed text-[18px]
                 border-orange-100'>Hire Me</button>
        
            </div>
          </div>

          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
//  <span className='text-teal-800 '>py5825590@gmail.com</span>
//  <span className='text-teal-800 '>+91 7410903250</span>

