import { Box, Typography } from "@mui/material"
import Logo from "../Logo"

const NavbarLogo = () => {
  return (
    <Box display={"flex"} alignItems={'center'} gap={1}>
        <Logo/>
        <Typography variant="h6" fontWeight={'bold'}>
            Islamic Roadmaps
        </Typography>
    </Box>
  )
}

export default NavbarLogo;