import { Box, Container, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material"
import CollaboratorCard from "./CollaboratorCard"
import { collaborators } from "./collaborators.data"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { NavLink } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function CollaboratorsSection() {
    const theme = useTheme();
  return (

     <Box>
        <Container maxWidth="lg" sx={{ pt: 3 }}>
            <Stack spacing={3} mt={8} mx={1} py={2}>
                {/* Back */}
                <IconButton
                disableRipple
                sx={{ 
                    alignSelf: "flex-start", 
                    alignItems: "center",
                    fontSize: "18px", 
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "rgba(100,100,100,0.1)",
                        color:"text.primary"
                    },
                }}
                component={NavLink}
                to={"/"}
                >
                <ArrowBackRoundedIcon fontSize='inherit' />
                <Typography ml={1.2} fontSize= "0.75rem">
                    Back to Home
                </Typography>
                </IconButton>
            </Stack>
       

       
            <Stack spacing={2} textAlign="center" mb={6}>
                <Typography variant="h4" fontWeight={700}>
                Kolaborator
                </Typography>
                <Typography color="text.secondary">
                Proyek ini dikembangkan bersama oleh orang-orang yang peduli dan memiliki keahlian di bidangnya. Ini adalah inisiatif independen yang dibangun atas semangat berbagi ilmu.
                </Typography>
            </Stack>

            <Grid container spacing={3}>
                {collaborators.map((item) => (
                <Grid size={{ xs:12 ,sm:6, md:3 }}  key={item.id}>
                    <CollaboratorCard data={item} />
                </Grid>
                ))}
            </Grid>
        </Container>

        <Container maxWidth="md" sx={{ pb: 10 }}>
            <Box
                sx={{
                    mt: 6,
                    p: 5,
                    textAlign: "center",
                    borderRadius: "15px",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                }}
            >
            <Box sx={{ color: theme.palette.teal[100] }}>
                <FavoriteBorderOutlinedIcon fontSize="large"/>
            </Box>
            <Typography fontWeight={600}>
                Terima kasih kepada semua yang telah meluangkan waktu dan ilmunya untuk membantu proyek ini.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Semoga menjadi amal jariyah bagi para kontributor.
            </Typography>
            </Box>
        </Container>
    </Box>
 
  )
}
