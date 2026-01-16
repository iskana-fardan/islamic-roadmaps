import { Box, Button } from "@mui/material"
import { NavLink, useLocation } from "react-router-dom"



const navItems = [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "About", path: "/about" },

]

const NavbarLinks = () => {
  const location = useLocation()

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path

        return (
          <Button
            disableRipple
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              fontSize: "12px",
              // default
              color: "text.primary",

              // hover
              "&:hover": {
                backgroundColor: "rgba(100,100,100,0.1)",
                color:"text.primary"
              },

              // selected / active
              backgroundColor: isActive
                ? "rgba(90, 130, 126, 0.2)"
                : "transparent",
            }}
          >
            {item.label}
          </Button>
        )
      })}
    </Box>
  )
}

export default NavbarLinks
