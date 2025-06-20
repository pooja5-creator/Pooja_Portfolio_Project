import React from 'react'

export default function InputBox({labelName,type,name}) {
  return (
     <div className='w-full sm:w-[500px] h-[80px] flex justify-center 
     items-start gap-3 flex-col'>
            <label htmlFor="" className='text-gray-100 logo'>{labelName}</label>
            <input type={type} name={name}
            className='w-full  h-[50px] border-[1px] border-dashed border-y-orange-600
             border-x-gray-100 rounded-[2px] outline-none px-3 py-3 text-gray-100'
             />
          </div>
  )
}
