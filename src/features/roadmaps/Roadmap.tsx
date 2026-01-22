import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import RoadmapLevel from './RoadmapLevel'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { getFieldBySlug } from '../../data/fields';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getRoadmapByFieldId } from '../../data/roadmaps';
import KitabMuthalaahCard from './KitabMuthalaahCards';
import BookDetail from '../books/BookDetail';
import { useState } from 'react';
import { getBooksByLevel, getMuthalaahBooks } from '../../data/roadmapHelpers';




const RoadmapDetailPage = () => {
  const [ open, setOpen ] = useState(false);
  const theme = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  const backToCategories = () => {
    const scrollToAnchor= () => {
      document
        .getElementById("categories")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    
  
    if (location.pathname !== "/"){
      navigate("/")
      setTimeout(scrollToAnchor,150)
    }else {
      scrollToAnchor()
    }
  }





  const {slug} = useParams()
  const field = getFieldBySlug(slug);
  const roadmap = getRoadmapByFieldId(field?.id);


  // Books per level
  const beginnerBooks = getBooksByLevel(roadmap, "beginner")
  const intermediateBooks = getBooksByLevel(roadmap, "intermediate")
  const advancedBooks = getBooksByLevel(roadmap, "advanced")




  // muthalaah books
  const muthalaahBooks = getMuthalaahBooks(roadmap)

                            

  if (roadmap) {
      return (
    <Box component="main">


        {/* ===== header ===== */}
        {/* ===== header ===== */}
        {/* ===== header ===== */}
        <Container maxWidth="md">
          <Stack  spacing={3} mt={11} mx={1} py={2}>
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
                  onClick={()=> backToCategories ()}
                >
                  <ArrowBackRoundedIcon fontSize='inherit' />
                  <Typography ml={1.2} fontSize= "0.75rem">
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
                  {roadmap?.title}{" "}
                  <Typography
                    component="span"
                    variant="h6"
                    color="text.secondary"
                  >
                    { roadmap?.titleArabic }
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learning Roadmap
                </Typography>
              </Box>
            </Stack>

            {/* Description */}
            <Typography color="text.secondary">
                { roadmap?.description }
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
                books={beginnerBooks}
                title="Dasar (Beginner)"
                total = {2}
                color={theme.palette.level.beginner}
                onOpen={()=>setOpen(true)} 
              />
              <RoadmapLevel
                books={intermediateBooks}
                title="Menengah (Intermediate)"
                total = {2}
                color={theme.palette.level.intermediate}
                onOpen={()=>setOpen(true)} 
              />
              <RoadmapLevel
                books={advancedBooks}
                title="Lanjutan (Advanced)"
                total = {2}
                color={theme.palette.level.advanced}
                onOpen={()=>setOpen(true)} 
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

            {/* cards for enrichment books */}
            <KitabMuthalaahCard books={muthalaahBooks} onOpen={()=>setOpen(true)} />

        </Container>
    
     {/* Book Detail */}
     <BookDetail open={open} onClose={()=>setOpen(false)}/>
    </Box>
  )
  }
  
}

export default RoadmapDetailPage