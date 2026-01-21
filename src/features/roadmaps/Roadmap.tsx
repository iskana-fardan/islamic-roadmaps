import { Box, Card, CardContent, Chip, Container, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import RoadmapLevel from './RoadmapLevel'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';




const RoadmapDetailPage = () => {
  const theme = useTheme();
  return (
    <Box component="main">


        {/* ===== header ===== */}
        {/* ===== header ===== */}
        {/* ===== header ===== */}
        <Container maxWidth="md">
          <Stack spacing={3} py={6}>
            {/* Back */}
            <IconButton
              disableRipple
              size="small"
              sx={{ alignSelf: "flex-start", alignItems: "center" }}
            >
              <ArrowBackRoundedIcon fontSize="small" />
              <Typography variant="body2" ml={1}>
                Back to Categories
              </Typography>
            </IconButton>

            {/* Title */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "7px",
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MenuBookRoundedIcon />
              </Box>

              <Box>
                <Typography variant="h4" fontWeight={700}>
                  Fiqh{" "}
                  <Typography
                    component="span"
                    variant="h6"
                    color="text.secondary"
                  >
                    الفقه
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learning Roadmap
                </Typography>
              </Box>
            </Stack>

            {/* Description */}
            <Typography color="text.secondary">
              Islamic jurisprudence covering worship, transactions,
              and daily life rulings
            </Typography>
          </Stack>
        </Container>


        

        {/* ===== roadmap usage info ===== */}
        {/* ===== roadmap usage info ===== */}
        {/* ===== roadmap usage info ===== */}

        <Container maxWidth="md">
          <Box
            sx={{
              p: 3,
              mb: 6,
              borderRadius: 1,
              bgcolor: theme.palette.background.paper,
              border: "1px solid rgba(20,184,166,0.25)",
            }}
          >
            <Stack direction="row" spacing={2}>
              <InfoOutlinedIcon sx={{ color: theme.palette.teal[100] }} />
              <Box sx={{ display: "flex" , gap: 0.8, flexDirection: "column" }}>
                <Typography fontWeight={600}>
                  Cara menggunakan roadmap ini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Typography component={"span"} fontWeight={600}>
                    Kitab Dars {" "}
                  </Typography>
                  sebaiknya dipelajari secara bertahap dan berurutan bersama seorang guru.Sementara itu, {" "}
                  <Typography component={"span"} fontWeight={600}>
                    Kitab Muthala'ah {" "}
                  </Typography>
                  digunakan sebagai bacaan pengayaan dan dapat dipelajari tanpa urutan tertentu.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>


        {/* ===== kitab pelajaran section ===== */}
        {/* ===== kitab pelajaran section ===== */}
        {/* ===== kitab pelajaran section ===== */}


         <Container maxWidth="md">
            <Stack mb={2} direction={"row"} gap={2} alignItems={"center"}>
              <MenuBookOutlinedIcon sx={{ color:theme.palette.teal[100]}} />
              <Stack>
                <Typography variant="h6" fontWeight={700} >
                Kitab Pelajaran
                </Typography>
                <Typography color="text.secondary">
                  Jalur Belajar - Dipelajari secara bertahap bersama guru
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <RoadmapLevel
                title="Dasar (Beginner)"
                total = {2}
                color={theme.palette.level.beginner}
              />
              <RoadmapLevel
                title="Menengah (Intermediate)"
                total = {2}
                color={theme.palette.level.intermediate}
              />
              <RoadmapLevel
                title="Lanjutan (Advanced)"
                total = {2}
                color={theme.palette.level.advanced}
              />
            </Stack>
        </Container>




        {/* ===== kitab muthalaah section ===== */}
        {/* ===== kitab muthalaah section ===== */}
        {/* ===== kitab muthalaah section ===== */}

         <Container maxWidth="md" sx={{ mt: 8 }}>
            <Stack mb={2} direction={"row"} gap={2} alignItems={"center"}>
              <BookOutlinedIcon sx={{ color:theme.palette.teal[100]}} />
              <Stack>
                <Typography variant="h6" fontWeight={700} >
                Kitab Muthala'ah
                </Typography>
                <Typography color="text.secondary">
                  Bacaan & Pendalaman - Dibaca untuk memperluas wawasan
                </Typography>
              </Stack>
            </Stack>
            

          <Grid container spacing={3}>
            <Grid size={{ xs:12, sm:6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Stack mb={2} direction={"row"} gap={1} alignItems={"flex-start"}  justifyContent={"space-between"}>
                    <Stack direction={"row"} gap={1} alignItems={"center"}>
                      <BookOutlinedIcon sx={{ color:theme.palette.teal[100]}} />
                    
                      <Stack>
                        <Typography fontWeight={600} >
                          Bidayatul Mujtahid
                        </Typography>
                        <Typography color="text.secondary">
                          بداية المجتهد
                        </Typography>
                      </Stack>
                    </Stack>

                    <BookmarkBorderOutlinedIcon sx={{ color:theme.palette.teal[100]}} />
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Comparative fiqh masterpiece analyzing evidences
                  </Typography>

                  <Stack direction="row" justifyContent="space-between" mt={2}>
                    <Typography variant="caption" color="text.secondary">
                      by Ibn Rushd
                    </Typography>
                    <Chip 
                      label="Enrichment" 
                      size="small" 
                      sx={{ borderRadius: "5px" }} 
                      />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* lanjut sendiri */}
          </Grid>
    </Container>
    
    </Box>
  )
}

export default RoadmapDetailPage