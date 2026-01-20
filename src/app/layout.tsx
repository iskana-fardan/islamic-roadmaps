import { Box } from "@mui/material"
import Navbar from "../components/Navbar/Navbar"
import FooterSection from "../sections/footer/FooterSection"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <Box>
            <Navbar/>

            {/* Konten page */}
            <Box flex={"1"}>
                <Outlet/>
            </Box>

            <FooterSection/>
        </Box>
    )
}

export default RootLayout;