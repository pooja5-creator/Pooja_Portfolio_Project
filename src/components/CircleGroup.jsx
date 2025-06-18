import Circle2 from './Circle2';

export default function CircleGroup() {
  const circleStyles = [
    { size: "260px", zIndex: 5 },
    { size: "220px", zIndex: 2 },
    { size: "280px", zIndex: 8 },
    { size: "240px", zIndex: 3 },
    { size: "300px", zIndex: 1 },
  ];

  return (
    <>
      {circleStyles.map((circle, index) => (
        <Circle2
          key={index}
          borderColor={circle.zIndex >= 5 ? "border-orange-600" : "border-gray-100"}
          zIndex={circle.zIndex}
          className={`w-[${circle.size}] h-[${circle.size}] hidden lg:flex 
          -right-[100px] 2xl:-right-[220px] -bottom-[250px]`}
        />
      ))}
    </>
  );
}
