// import React from 'react'

// export default function Circle2({size,borderColor,zIndex}) {
//   return (
//    <div
//   className={`absolute circleColor3 rotate-[90deg] rounded-[50%] border-[1px]
//      border-dashed ${borderColor}`}
//   style={{
//     right: "-130px",
//     bottom: "-130px",
//     width: size,
//     height: size,
//     zIndex: zIndex,
//   }}
// ></div>

//   )
// }

export default function Circle2({ borderColor, zIndex, className = "" }) {
  return (
    <div
      className={`absolute  rounded-full
         border circleColor3
         border-dashed ${borderColor} ${className}`}
      style={{
        zIndex: zIndex,
      }}
    ></div>
  );
}