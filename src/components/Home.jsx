import Banner from './Banner';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
  const shouldScroll = localStorage.getItem("scrollToContact");
  if (shouldScroll === "true") {
    localStorage.removeItem("scrollToContact");
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      setTimeout(() => {
        const yOffset = -70;
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100); // delay to ensure Contact is rendered
    }
  }
}, []);
  console.log("Hi");
  return (
    <div>
      <Banner/>
      <About/>
       <Work/>
       <Contact/>
       <Footer/>
    </div>
  )
}
