import About from "@/components/AboutUs/About";
import AboutUs from "@/components/AboutUs/AboutUs"
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Home from "@/components/Home/Home";
import Services from "@/components/Services/Modal";

export default function page() {
  return (
 <main>
  <Home />
  <About/>
  <AboutUs />
  <Services/>
  <Blog/>
  <Faq/>
 </main>
  );
}
