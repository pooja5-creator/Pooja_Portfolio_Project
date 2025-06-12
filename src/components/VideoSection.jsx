import React, { useRef, useState } from 'react'

export default function VideoSection() {
     const [buttonPlay,setButtonPlay]=useState(true)
        const videoRef=useRef(null)
        const handleClick=()=>{
            if (videoRef.current) {
                if(buttonPlay) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
                setButtonPlay(!buttonPlay); 
              }
        }
  return (
    <div className='w-full min-h-[300px] relative z-10'>
    <video className="w-full h-[500px] object-cover mt-5" ref={videoRef}>
    <source src="https://cdn.prod.website-files.com/641bc8cc94d12b3e4df0e8d0/64af7b141e0b9ad3d9356b83_Unilever-TECHGOVERNANCE-WXPAGE-Trailer-transcode.mp4"
     type="video/mp4" /> 
    </video>
    <div className='w-full h-[50px] flex justify-center items-center absolute top-[45%] left-[0]'>
    <button className=' text-2xl w-10 h-10 px-3 py-1 cursor-pointer rounded-[50%]
     bg-orange-600 z-30 text-gray-100' onClick={handleClick}><i class={`fa fa-${buttonPlay?'play':'pause'}`}></i></button>
    </div>
   </div>
  )
}
