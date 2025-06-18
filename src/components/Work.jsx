import CommunionImg from "../assets/CommunionHubImg.png";
import EcommerceImg from "../assets/EcommerceAppImg.png";
import BlogImg from "../assets/blogAppImg.png";
import Project from "./Project";
export default function Work() {
  return (
    <div
      className="w-full min-h-[640px] bg-gray-950 relative boxShadow2
      flex justify-start py-[60px] gap-[30px] sm:gap-[40px] items-center flex-col "
    >
      <h1 className="text-[28px] sm:text-4xl font-bold logo textColor">
        Latest Projects
      </h1>

      <div
        className="w-[170px] sm:w-[230px] h-[1px] bg-gradient-to-t mt-[-12px] from-white
       to-orange-600"
      >
        {" "}
      </div>
      <div className="w-[100px] h-[1px] bg-gradient-to-t mt-0 sm:mt-[-12px] bg-orange-600">
        {" "}
      </div>

      <div
        className="w-full lg:max-w-[1300px] min-h-[350px] pt-5 md:pt-10 lg:pt-3 
         flex justify-center lg:justify-between items-center gap-[60px] sm:gap-[30px] lg:gap-[20px] xl:gap-[100px] 
         flex-wrap lg:flex-nowrap px-5"
      >
        <Project
          projectImg={BlogImg}
          projectLink="https://app-blogpro.netlify.app/"
          projectName="Blog"
        />
        <Project
          projectImg={EcommerceImg}
          projectLink="https://product-selling-application.netlify.app/"
          projectName="E-commerce"
        />
        <Project
          projectImg={CommunionImg}
          projectLink="https://communion-app-pro.netlify.app/"
          projectName="CommunionHub"
        />
      </div>
    </div>
  );
}
