import { Box, Grid, Stack, Typography } from "@mui/material"
import Logo from "../../components/Logo"

const FooterBrand = () => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={2}>
            {/* logo */}
            <Stack direction="row" spacing={1.5} alignItems="center">
                <Box display={"flex"} alignItems={'center'}  gap={1}>
                    <Logo/>
                    <Typography 
                        variant="subtitle1" 
                        fontWeight={'600'}
                        color="text.primary"
                    >
                        Islamic Roadmaps
                    </Typography>
                </Box>
            </Stack>

            {/* Desc */}
             <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                A structured guide to Islamic learning, featuring curated book recommendations and study paths for students of sacred knowledge. Designed to help you navigate the classical curriculum with clarity and purpose.
              </Typography>
        </Stack>
    </Grid>
  )
}

export default FooterBrand