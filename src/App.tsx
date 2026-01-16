import { Box } from "@mui/material"
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import ColorModeProvider from "./theme/ColorModeProvider";

function App() {


  return (
    <ColorModeProvider>
        <BrowserRouter>
          <Navbar/>
          <Box height={'1500px'}></Box>
        </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;