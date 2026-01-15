import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material"
import { useState } from "react"

const ColorModeSwitch = () => {
  const [mode,setMode] = useState("dark");


  return (
    <IconButton
        disableRipple
        onClick={()=>setMode(mode === "dark" ? "light" : "dark")}
        sx={{
            fontSize: 16, // icon ikut ini
            color: "lightgrey",
            borderRadius: "5px",
            "&:hover": {
            backgroundColor: "rgba(100,100,100,0.1)",
            },
        }}
    >
        {mode === "dark" ? <DarkMode sx={{ fontSize: "inherit" }} /> : <LightMode sx={{ fontSize: "inherit" }}  />}
    </IconButton>
    )
}

export default ColorModeSwitch

