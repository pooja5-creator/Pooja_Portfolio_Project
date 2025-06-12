import React from 'react'
import learnSection from '/LearnMarketing.js'
export default function LearnSection() {
    console.log(learnSection);
  return (
    <div className='w-full min-h-[300px] bg-gray-950 py-[50px]'>
        <div className='w-[1220px] min-h-[300px] mx-auto flex justify-center items-center gap-3 flex-col py-[50px]'>
            <h1 className='text-[40px] text-orange-600 font-bold p'>Learn <span className='logo text-teal-800'>Digital Marketing</span> from our experts</h1>
            <div className='w-full min-h-[500px] bg-blue-300 grid grid-cols-3  gap-5 place-items-center'>
          {
            learnSection.map((item,index)=>{
                return (
                    <div className='w-full ' key={index}>
                        <div className={`w-full overflow-hidden
                   ${index == 0 && 'row-span-2 h-[400px]'}
                   ${index == 3 ||index==4 && 'row-span-1 h-[200px]'}
                       ${index === 1&& 'col-span-2 h-[200px]' }
`}><img src={item.img} className="w-full h-full object-cover" alt="" /></div>
                    </div>
                )
            })
          }
            </div>
        </div>
    </div>
  )
}
