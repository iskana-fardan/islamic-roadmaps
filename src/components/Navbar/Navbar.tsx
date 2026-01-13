import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import NavbarLogo from "./NavbarLogo";

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

  const glassBg = 
        theme.palette.mode === "light" 
            ? "rgba(255,255,255,0.7)"
            : "rgba(0,0,0,0.5)";

  return (
    <>
        <AppBar
            position="fixed"
            elevation={0} // remove default shadow
            sx={{
                backgroundColor: scrolled ? glassBg : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? `1px solid ${
                        theme.palette.mode === "light"
                            ? "rgba(0,0,0,0.1)"
                            : "rgba(255,255,255,0.2)"
                    } `
                    : "none",
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

                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar