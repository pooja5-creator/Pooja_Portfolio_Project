import Circle from './Circle';
import Img from '/src/assets/orangeParticles.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ThreeCanvas from './ThreeCanvas'; 

export default function Banner() {

  return (
    <div className='w-[100%] h-[600px] bg-gray-950 relative overflow-hidden flex
     justify-start items-center pt-[150px] gap-3 flex-col' >
      <ThreeCanvas /> 
      
     {/* <Circle size="350px" borderColor="border-orange-500" zIndex={5}  />
      <Circle size="300px" borderColor="border-gray-100" zIndex={7} />
      <Circle size="250px" borderColor="border-orange-500" zIndex={8}  />
      <Circle size="400px" borderColor="border-gray-100" zIndex={2} 
      className="hidden md:flex" />
      <Circle size="450px" borderColor="border-orange-500" zIndex={1} 
      className="hidden lg:flex"/> */}

   <Circle
  borderColor="border-orange-500"
  zIndex={1}
  className="w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[450px] lg:h-[450px]"
/>
   <Circle
  borderColor="border-gray-100"
  zIndex={2}
  className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]"
/>
   <Circle
  borderColor="border-orange-500"
  zIndex={5}
  className="w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] lg:w-[350px] lg:h-[350px]"
/>
   <Circle
  borderColor="border-gray-100"
  zIndex={7}
  className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px]"
/>
   <Circle
  borderColor="border-orange-500"
  zIndex={8}
  className="w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] lg:w-[250px] lg:h-[250px]"
/>
      
      <div className='w-[200px]  md:w-[250px] h-[90px] sm:h-[130px] md:h-[150px] 
       overflow-hidden absolute -right-[50px]
       top-0 rotate-90'>
        <LazyLoadImage
          src={Img}
          effect="blur"
          wrapperClassName="w-[200px] md:w-[250px] h-[130px] md:h-[200px]"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=Image+Not+Found";
          }}
        />
        <div className='w-full h-full absolute top-0 left-0 backgroundColor '></div>
      </div>

      <h1 className='text-[32px] sm:text-[40px] md:text-[43px] lg:text-[45px] xl:text-5xl mt-4 md:m-0 p-0 logo tracking-wide leading-tight textShadow
       text-gray-100 text-center  font-semibold'>
        Frontend Developer <span className='text-teal-800 font-bold'></span>
      </h1>

      <p className='text-[32px] sm:text-[40px] md:text-[43px] lg:text-[45px] xl:text-5xl m-0 p-0 leading-8 md:leading-10 logo text-orange-600 
      font-semibold uppercase'>Pooja Yadav</p>

      <button
       className="border-[1px] cursor-pointer mt-2 btnShadow border-orange-500 
       rounded-[5px] text-[15px] sm:text-[17px] lg:text-xl px-2 sm:px-2 md:px-3 py-2 text-gray-100 logo
        hover:bg-gray-100
        hover:text-orange-600 transition-all duration-300 ease-in-out "
       onClick={() => window.open('https://www.linkedin.com/in/pooja-pro/', '_blank')}
      >
       Let's Connect With Me
      </button>
    </div>
  );
}
