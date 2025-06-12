import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const LinkArr = [
    {
      link: 'mailto:py5825590@gmail.com',
      name: <i className="fa-solid fa-envelope"></i>,
      mainName: "Mail"
    },
    {
      link: 'https://www.linkedin.com/in/pooja-pro/',
      name: <i className="fa-brands fa-linkedin-in"></i>,
      mainName: "LinkedIn"
    },
    {
      link: 'https://wa.me/917410903250',
      name: <i className="fa-brands fa-whatsapp"></i>,
      mainName: "WhatsApp"
    },
    {
      link: 'https://github.com/pooja5-creator',
      name: <i className="fa-brands fa-github"></i>,
      mainName: "GitHub"
    },
    {
      link: 'https://drive.google.com/file/d/1qBkb051ssOoFZsIrAZWINPZvRQVm3zwq/view?usp=sharing',
      name: <i className="fa-solid fa-file"></i>,
      mainName: "Resume"
    },
  ];

  const iconClasses = "textColor hover:scale-110 transition-all duration-200 ease-linear text-[36px]";
  const tooltipClasses = "tooltipText logo textShadow";

  return (
    <div className="w-full bg-gray-950 z-50 boxShadow relative">
      <header className="max-w-[1220px] px-3 mx-auto flex justify-between items-center h-[100px]">
        <h1 className="logo text-3xl text-orange-600 border border-orange-600 font-bold px-2 py-1">PY</h1>

        {/* Hamburger Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} 
        className={`sm:hidden ${isOpen?"text-gray-100":"text-orange-600"} text-[28px] cursor-pointer hover:scale-110 transition-all duration-150 z-50`}>
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Desktop Links */}
        <div className="w-[350px] hidden sm:flex md:w-[500px] h-full justify-between items-center">
          {LinkArr.map((linkItem, index) => {
            const isExternal = linkItem.link.startsWith('http') || linkItem.link.startsWith('mailto');
            return isExternal ? (
              <a key={index} href={linkItem.link} target="_blank" rel="noopener noreferrer" className="relative group">
                <span className={iconClasses}>{linkItem.name}</span>
                <span className={tooltipClasses}>{linkItem.mainName}</span>
              </a>
            ) : (
              <Link key={index} to={`/${linkItem.link}`} className="relative group">
                <span className={iconClasses}>{linkItem.name}</span>
                <span className={tooltipClasses}>{linkItem.mainName}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Slide-in from Right - Mobile Menu */}
      <div className={`sm:hidden fixed top-0 right-0 w-[200px] h-full
       bg-gray-950
       text-orange-600 transition-transform duration-500 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-start px-4 py-10 gap-6">
          {LinkArr.map((linkItem, index) => {
            const isExternal = linkItem.link.startsWith('http') || linkItem.link.startsWith('mailto');
            return isExternal ? (
              <a key={index} href={linkItem.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg">
                {linkItem.name}
                <span>{linkItem.mainName}</span>
              </a>
            ) : (
              <Link key={index} to={`/${linkItem.link}`} className="flex items-center gap-3 text-lg">
                {linkItem.name}
                <span>{linkItem.mainName}</span>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
