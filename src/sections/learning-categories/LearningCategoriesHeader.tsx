import { Stack, Typography } from '@mui/material'

const LearningCategoriesHeader = () => {
  return (
    <Stack spacing={1} textAlign="center" mb={6} >
          <Typography variant="h4" fontSize={{ xs: "1.5rem", sm: "1.9rem" }} fontWeight={700}>
            Learning Categories
          </Typography>
          <Typography
            variant="body2"
            fontSize={{ xs: "1rem" }}
            color="text.secondary"
          >
            Choose a field of Islamic knowledge to explore its structured
            learning path
          </Typography>
    </Stack> 
  )
}

export default LearningCategoriesHeader