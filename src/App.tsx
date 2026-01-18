import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import ColorModeProvider from "./theme/ColorModeProvider";
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import FooterSection from "./sections/footer/FooterSection";
import LearningApproachSection from "./sections/learning-approach/LearningApproachSection";

function App() {


  return (
    <ColorModeProvider>
        <BrowserRouter>
          <Navbar/>
          <HeroSection/>
          <AboutSection/>
          <LearningApproachSection/>
          <FooterSection/>
        </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;