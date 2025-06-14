import { motion} from 'framer-motion';
import Circle2 from './Circle2';
import Circle3 from './Circle3';
import PoojaImg from "/src/assets/poojaCreativeimg.png"
import LinkArr from '../Data/linkData';
import { Link } from 'react-router-dom';
export default function MainAboutPage({setIsOpen}) {
    const skillArr=['JavaScript','React.js','Redux','HTML','CSS',"Sass",'Tailwind',"GitHub"]
  return (
       <motion.div
            className="fixed inset-0 flex items-center justify-center
             bg-opacity-60 
            backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className=" text-gray-800 p-8 rounded-2xl shadow-2xl w-full h-full 
              relative flex justify-center items-center flex-col"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="particles-bg"></div>
              </div>

              {/* close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-100 hover:text-orange-600 cursor-pointer"
              >
                ×
              </button>
          
            <div className='w-full h-full  relative  flex justify-center items-center
             flex-col gap-5'>

 <Circle2
  borderColor="border-orange-600"
  zIndex={5}
  className="w-[280px] h-[280px] sm:w-[200px] sm:h-[200px] xl:w-[260px] xl:h-[260px] -right-[130px] -bottom-[130px]"
/>
 <Circle2
  borderColor="border-orange-600"
  zIndex={2}
  className="w-[280px] h-[280px] -right-[130px] -bottom-[130px] sm:w-[180px] sm:h-[180px] 
  xl:w-[220px] xl:h-[220px]"
/>
 <Circle2
  borderColor="border-orange-100"
  zIndex={8}
  className="w-[280px] h-[280px] -right-[130px] -bottom-[130px] sm:w-[150px] sm:h-[150px]
   xl:w-[280px] xl:h-[280px]"
/>
 <Circle2
  borderColor="border-orange-100"
  zIndex={2}
  className="w-[280px] h-[280px] sm:w-[130px] sm:h-[130px] xl:w-[240px] xl:h-[240px]
   -right-[130px] -bottom-[130px]"
/>
 <Circle2
  borderColor="border-orange-100"
  zIndex={1}
  className="w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[300px] lg:h-[300px] 
  -right-[130px] -bottom-[130px]"
/>

<Circle2
  borderColor="border-orange-600"
  zIndex={5}
  className="w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[260px] lg:h-[260px] -left-[130px] -bottom-[130px]"
/>
 <Circle2
  borderColor="border-orange-600"
  zIndex={2}
  className="w-[280px] h-[280px] -left-[130px] -bottom-[130px] sm:w-[370px] sm:h-[370px]
   lg:w-[220px] lg:h-[220px]"
/>
 <Circle2
  borderColor="border-orange-100"
  zIndex={8}
  className="w-[280px] h-[280px] -left-[130px] -bottom-[130px] sm:w-[370px] sm:h-[370px] lg:w-[280px] lg:h-[280px]"
/>
 <Circle2
  borderColor="border-orange-100"
  zIndex={2}
  className="w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[240px] lg:h-[240px]
   -left-[130px] -bottom-[130px]"
/>
 <Circle2
  borderColor="border-orange-100"
  zIndex={1}
  className="w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[300px] lg:h-[300px] -left-[130px] -bottom-[130px]"
/>

            <div className='max-w-[1200px] xl:max-w-[900px] h-[800px] 2xl:max-w-[1200px] 
             px-3 flex justify-start items-start gap-5 flex-col '>

            <h1 className='text-4xl font-bold logo textColor flex justify-center items-center
             gap-3 bg-red-800'>
                <div className='w-[50px] bg-amber-800 h-auto rounded-2xl overflow-hidden border-[1px] 
                border-dashed border-orange-600 '>
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
                border-[1px] border-dashed my-1 xl:my-3
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
        transition-all duration-100 cursor-pointer mt-1 xl:mt-3 px-3 py-2 rounded-2xl border-[1px]
         border-dashed text-[18px]
                 border-orange-100'>Hire Me</button>
        </div>
            </div>
          

          </motion.div>
          </motion.div>
  )
}
