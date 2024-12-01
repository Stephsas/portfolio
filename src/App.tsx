
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import './styles/index.css';
import './styles/App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from "./components/CustomCursor";

AOS.init();


const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/*  <ContactSection />  */}
     
      <Footer />
    </div>
  );
};

export default App;
