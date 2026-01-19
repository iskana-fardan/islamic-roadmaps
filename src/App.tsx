import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import ColorModeProvider from "./theme/ColorModeProvider";
import HeroSection from "./sections/hero/HeroSection";
import FooterSection from "./sections/footer/FooterSection";
import LearningApproachSection from "./sections/learning-approach/LearningApproachSection";
import LearningCategoriesSection from "./sections/learning-categories/LearningCategoriesSection";
import RoadmapDetailPage from "./features/roadmaps/RoadmapDetailPage";

function App() {


  return (
    <ColorModeProvider>
        <BrowserRouter>
          <Navbar/>
          <HeroSection/>
          <RoadmapDetailPage/>
          {/* <AboutSection/> */}
          <LearningCategoriesSection/>
          <LearningApproachSection/>
          <FooterSection/>
        </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;