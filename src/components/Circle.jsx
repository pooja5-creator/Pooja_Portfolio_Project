// import React from 'react'

// export default function Circle({size,borderColor,zIndex}) {
//   return (
//     <div
//     className={`absolute -left-[100px] circleColor2 rotate-[90deg] 
//        -bottom-[100px] rounded-[50%] border-[1px] border-dashed ${borderColor}`}
//     style={{
//       width: size,
//       height: size,
//       zIndex: zIndex,
//     }}>
//     </div>
//   )
// }
export default function Circle({ borderColor, zIndex, className = "" }) {
  return (
    <div
      className={`absolute  -left-[100px] bottom-[-80px] sm:bottom-[-100px] rounded-full border circleColor2
         border-dashed ${borderColor} ${className}`}
      style={{
        zIndex: zIndex,
      }}
    ></div>
  );
}