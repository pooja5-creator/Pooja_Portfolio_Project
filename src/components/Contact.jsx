import React from 'react'
import InputBox from './InputBox'
import Circle2 from './Circle2'
import Circle3 from './Circle3'

export default function Contact() {
  return (
    <div className='w-full min-h-[300px] bg-gray-950 flex justify-center
     items-center boxShadow2
    py-[60px]  flex-col gap-5'>
      <h1 className='text-4xl font-bold logo  textColor'>Let's Contact Me</h1>
       <div className='w-[130px] h-[1px] bg-gradient-to-t 
       from-black to-orange-600'> </div>
      <div className='w-[70px] h-[1px] bg-gradient-to-t  bg-orange-600'> </div>
      <div className='w-full min-h-[200px] flex justify-center items-center'>
      <div className='w-[1300px] min-h-[600px] bg-gray-950 rounded-2xl relative py-[50px]
       overflow-hidden boxShadow4'>
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
        <form action="" className=' h-full flex justify-center items-center gap-5 flex-col'>

         <InputBox 
         labelName="Name"
         type="text"
         /> 
         <InputBox 
         labelName="Email"
         type="email"
         /> 
         <div className='w-[500px]  min-h-[150px] flex justify-center items-start gap-3 flex-col'>
         <label htmlFor="" className='text-gray-100 logo'>Message</label>
        {/* <textarea name="" id=""  className='w-[500px]  h-full border-[1px] border-dashed border-y-orange-600
             border-x-gray-100 rounded-[2px] text-gray-100 outline-none px-3 py-3'>

        </textarea> */}

        <textarea
  onInput={(e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }}
  className="w-[500px] min-h-[150px] border-[1px] border-dashed border-y-orange-600
             border-x-gray-100 rounded-[2px] overflow-hidden text-gray-100 outline-none px-3 py-3 resize-none"
/>

        </div>
         <div className='w-[500px] flex justify-start items-start'><button className='w-[100px] h-[40px] border-[1px] border-dashed
          border-y-white border-x-orange-600 rounded-[2px] text-orange-600 text-[23px]
          font-semibold logo'>Send</button></div>
        </form>
      </div>
      </div>
    </div>
  )
}
