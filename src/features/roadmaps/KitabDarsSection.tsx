import  { Container, Typography, Stack, useTheme } from "@mui/material";
import RoadmapLevel from "./RoadmapLevel";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';



const KitabPelajaranSection = () => {
  const theme = useTheme();
  return (
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
  )
}

export default KitabPelajaranSection;