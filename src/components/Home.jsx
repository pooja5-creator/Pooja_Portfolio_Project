import Banner from './Banner';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
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
