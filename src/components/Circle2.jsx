import React from 'react'

export default function Circle2({size,borderColor,zIndex}) {
  return (
   <div
  className={`absolute circleColor3 rotate-[90deg] rounded-[50%] border-[1px]
     border-dashed ${borderColor}`}
  style={{
    right: "-130px",
    bottom: "-130px",
    width: size,
    height: size,
    zIndex: zIndex,
  }}
></div>

  )
}