import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import ColorModeProvider from "./theme/ColorModeProvider";
import HeroSection from "./sections/hero/HeroSection";
import { Box } from "@mui/material";

function App() {


  return (
    <ColorModeProvider>
        <BrowserRouter>
          <Navbar/>
          <HeroSection/>
          <Box sx={{backgroundColor: 'grey', height: '1200px'}}/>
        </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;