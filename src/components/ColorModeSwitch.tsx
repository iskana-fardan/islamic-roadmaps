import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material"
import { useColorMode } from "../theme/useColorMode";

const ColorModeSwitch = () => {
  const theme = useTheme();
  const {toggleColorMode} = useColorMode();


  return (
    <IconButton
        disableRipple
        onClick={toggleColorMode}
        sx={{
            fontSize: 16, // icon ikut ini
            color: "lightgrey",
            borderRadius: "5px",
            "&:hover": {
            backgroundColor: "rgba(100,100,100,0.1)",
            },
        }}
    >
        {theme.palette.mode === "dark" ?  <LightMode sx={{ fontSize: "inherit" }}  /> : <DarkMode sx={{ fontSize: "inherit" }} /> }
    </IconButton>
    )
}

export default ColorModeSwitch

