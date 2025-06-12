import React, { useCallback, useState } from 'react'

export default function Button() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
      };
  console.log(count);
  console.log("i am complement");
  
  return (
    <div className='w-[100px] h-[50px] mx-auto flex justify-center items-center rounded-2xl bg-black text-orange-500 px-3 p-2 text-xl' onClick={handleClick}>Click</div>
  )
}
