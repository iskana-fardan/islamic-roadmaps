import { Box, Typography } from "@mui/material"
import Logo from "../Logo"

const NavbarLogo = () => {
  return (
    <Box display={"flex"} alignItems={'center'} gap={1}>
        <Logo/>
        <Typography 
            variant="subtitle1" 
            fontWeight={'600'}
            display={{xs : 'none',sm : 'inline-flex'}}
        >
            Islamic Roadmaps
        </Typography>
    </Box>
  )
}

export default NavbarLogo;