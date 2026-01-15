import { Box } from "@mui/material"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Box height={'1500px'}></Box>
    </BrowserRouter>
  )
}

export default App