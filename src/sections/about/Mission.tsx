import { Stack, Typography } from '@mui/material'

const Mission = () => {
  return (
    <Stack spacing={2} sx={{mb:8}}>
        <Typography variant="h6" fontWeight={600} color="text.primary">
            Our Mission
        </Typography>

        <Typography color="text.secondary">
            Islamic Learning Roadmaps was created to help students of sacred knowledge navigate the vast ocean of Islamic scholarship. We understand that beginning one's journey into Islamic studies can be overwhelming, with countless books and varying opinions on where to start.
        </Typography>

        <Typography color="text.secondary">
            Our goal is to provide clear, structured pathways based on traditional methodologies, making it easier for students to progress systematically through the classical curriculum while also having access to enrichment materials for deeper understanding.
        </Typography>
    </Stack>
  )
}

export default Mission