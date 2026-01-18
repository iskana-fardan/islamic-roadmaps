import { Stack, Typography } from '@mui/material'

const Title = () => {
  return (
    <Stack spacing={2} sx={{mb:6}}>
        <Typography variant="h4" fontWeight={600} color="text.primary"> 
            About Islamic Learning Roadmaps
        </Typography>
        <Typography color="text.secondary" fontSize={"1.2rem"}>
            A structured guide to navigating the traditional Islamic curriculum
        </Typography>
    </Stack>
  )
}

export default Title