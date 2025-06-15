import InputBox from './InputBox'
import Circle2 from './Circle2'


export default function Contact() {
  return (
    <div className='w-full px-4 min-h-[300px] bg-gray-950 flex justify-center
     items-center boxShadow2
    py-[60px]  flex-col gap-5'>
      <h1 className='text-[30px] sm:text-4xl font-bold logo  textColor'>Let's Contact Me</h1>
       <div className='w-[130px] h-[1px] bg-gradient-to-t 
       from-black to-orange-600'> </div>
      <div className='w-[70px] h-[1px] bg-gradient-to-t  bg-orange-600'> </div>
      <div className='w-full min-h-[200px] flex justify-center items-center'>
      <div className='w-[95%] lg:w-[90%] xl:w-[75%] min-h-[620px] md:min-h-[600px] bg-gray-950 rounded-2xl relative py-[50px]
       overflow-hidden boxShadow4 mt-5 sm:mt-0'>


 <Circle2
       borderColor="border-orange-600"
       zIndex={2}
       className="w-[140px] h-[140px] md:w-[160px] md:h-[160px]  lg:w-[300px] lg:h-[300px]  
        left-[-80px] bottom-[-80px] lg:left-[-130px] lg:bottom-[-130px]"
     />
   <Circle2
       borderColor="border-orange-100"
       zIndex={1}
       className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] 
     left-[-80px] bottom-[-80px]  lg:left-[-130px] lg:bottom-[-130px]"
     />
    <Circle2
       borderColor="border-orange-600"
       zIndex={8}
       className="w-[160px] h-[160px]    md:w-[160px] md:h-[160px]  
        lg:w-[260px] lg:h-[260px]  left-[-80px] bottom-[-80px] 
         lg:left-[-130px] lg:bottom-[-130px]"
     />
      <Circle2
       borderColor="border-orange-100"
       zIndex={5}
       className="w-[140px] h-[140px]      md:w-[200px] md:h-[200px] lg:w-[240px]  lg:h-[240px]
         left-[-80px] bottom-[-80px]  lg:left-[-130px] lg:bottom-[-130px]"
     />
      <Circle2
       borderColor="border-orange-600"
       zIndex={2}
       className="w-[120px] h-[120px]   md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]
         left-[-80px] bottom-[-80px]  lg:left-[-130px] lg:bottom-[-130px]"
     />

 <Circle2
       borderColor="border-orange-600"
       zIndex={2}
       className="w-[140px] h-[140px] md:w-[160px] md:h-[160px]  lg:w-[300px] lg:h-[300px]  
       right-[-80px] bottom-[-180px]  lg:right-[-130px] lg:bottom-[-130px]"
     />
   <Circle2
       borderColor="border-orange-100"
       zIndex={1}
       className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] 
     right-[-80px] bottom-[-80px]  lg:right-[-130px] lg:bottom-[-130px]"
     />
    <Circle2
       borderColor="border-orange-600"
       zIndex={8}
       className="w-[160px] h-[160px]    md:w-[160px] md:h-[160px]  
        lg:w-[260px] lg:h-[260px]  right-[-80px] bottom-[-80px] 
         lg:right-[-130px] lg:bottom-[-130px]"
     />
      <Circle2
       borderColor="border-orange-100"
       zIndex={5}
       className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px]  lg:h-[240px]
         right-[-80px] bottom-[-80px]  lg:right-[-130px] lg:bottom-[-130px]"
     />
      <Circle2
       borderColor="border-orange-600"
       zIndex={2}
       className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]
         right-[-80px] bottom-[-80px]  lg:right-[-130px] lg:bottom-[-130px]"
     />
   
     
 
        <form action="" className='w-full h-full flex justify-center items-center
         gap-5 flex-col px-8'>

         <InputBox 
         labelName="Name"
         type="text"
         /> 
         <InputBox 
         labelName="Email"
         type="email"
         /> 
         <div className='w-full sm:w-[500px]  min-h-[150px] flex justify-center items-start gap-3 flex-col'>
         <label htmlFor="" className='text-gray-100 logo'>Message</label>
       

        <textarea
  onInput={(e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }}
  className="w-full sm:w-[500px] min-h-[150px] border-[1px] border-dashed border-y-orange-600 border-x-gray-100 rounded-[2px] overflow-hidden text-gray-100 outline-none px-3 py-3 resize-none"
/>

        </div>
         <div className='w-full sm:w-[500px] flex justify-start items-start'>
          <button className='w-[70px] sm:w-[100px] h-[34px] sm:h-[40px] border-[1px] border-dashed
          border-y-white border-x-orange-600 rounded-[2px] text-orange-600
            hover:bg-gray-100 text-[20px] sm:text-[23px] 
           transition-all duration-150 ease-initial cursor-pointer font-semibold logo'>Send</button></div>
        </form>
      </div>
      </div>
    </div>
  )
}
