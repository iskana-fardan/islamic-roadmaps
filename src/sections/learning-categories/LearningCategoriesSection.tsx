import {
  Box,
  Container,
  useTheme,
} from "@mui/material"
import LearningCategoriesHeader from "./LearningCategoriesHeader"
import LearningCategoriesCards from "./LearningCategoriesCards"




const LearningCategoriesSection = () =>{
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6,sm: 7, md: 9,lg : 11 },
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Container maxWidth="lg">
        <LearningCategoriesHeader/>

        {/* Cards */}
        <LearningCategoriesCards/>
      </Container>
    </Box>
  )
}

export default LearningCategoriesSection
