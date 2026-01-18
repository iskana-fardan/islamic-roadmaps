import { Stack, Typography } from '@mui/material'

const Contribution = () => {
  return (
    <Stack spacing={2} sx={{mb: 8}}>
        <Typography variant='h6' fontWeight={600} color='text.primary'>
            Contributing
        </Typography>
        <Typography color='text.secondary'>
            This project is open to contributions from scholars, students, and educators. If you have suggestions for improving the roadmaps, adding books, or correcting information, please reach out through our contact channels.
        </Typography>
        <Typography color='text.secondary'>
            May Allah bless all seekers of sacred knowledge and grant them success in their studies.
        </Typography>
    </Stack>
  )
}

export default Contribution