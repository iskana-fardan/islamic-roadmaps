import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import ColorModeSwitch from "../ColorModeSwitch";

const Navbar = () => {
  const [scrolled,setScrolled]  =  useState(false);
  const theme = useTheme();

  useEffect(()=>{
    const onScroll = () =>{
        setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll)
  },[])


  return (
    <>
        <AppBar
            position="fixed"
            elevation={0} // remove default shadow
            sx={{
                backgroundColor: scrolled ? theme.palette.glassBackground : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: `1px solid ${theme.palette.divider}`,
                transition: "all 0.2s ease"
            }}

        >
            <Toolbar 
                disableGutters // disableGutters: Remove right and left padding
                sx={{minHeight : { xs : 52,md: 62}}}
            > 
                <Container maxWidth="lg">
                    <Box 
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        {/* Left */}
                        <NavbarLogo/>

                        {/* Right */}
                        <Box display={'flex'} alignItems={'center'} gap={1}>
                            <Box sx={{ display: {xs:"none", md:"flex"}}} gap={1.5}>
                                {/* navlinks */}
                                <NavbarLinks/>

                                {/* colormodeswitch */}
                                <ColorModeSwitch/>
                            </Box>

                            

                        </Box>

                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar

