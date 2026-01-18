import { Box, Stack, Typography, useTheme } from "@mui/material"


interface Step {
    id: number,
    title : string,
    description: string
}

const steps: Step[] = [
    {
        id: 1,
        title: "Choose Your Field",
        description: "Browse the categories and select an Islamic science you wish to study, such as Fiqh, Nahwu, or Hadith."
    },
     {
        id: 2,
        title: "Follow the Study Path",
        description: "Start with the Kitab Pelajaran section. Begin at the Dasar (beginner) level and progress through each book with your teacher."
    },
     {
        id: 3,
        title: "Supplement Your Learning",
        description: "Explore the Kitab Muthala'ah for additional reading that complements your structured studies."
    },
    {
        id: 4,
        title: "Track Your Progress",
        description: "Use the checkboxes to mark books as completed and bookmark enrichment books for later reading."
    }
]


const HowToUse = () => {
    const theme = useTheme();
  return (
    <Stack>
        <Typography variant="h6" fontWeight={600}>
            How to Use This Platform
        </Typography>

        <Stack spacing={2} sx={{mt: 2, mb: 8}}>
            {steps.map((step)=>(
                <Stack key={step.id} direction={"row"} spacing={2}>
                    <Box
                         sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            bgcolor: theme.palette.teal[100],
                            color: "text.primary",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            fontWeight: 600,
                            flexShrink: 0,
                         }}
                    >
                        {step.id}
                    </Box>
                    <Stack>
                        <Typography fontWeight={600} sx={{color : "text.primary"}}>{step.title}</Typography>
                        <Typography sx={{color: "text.secondary"}}>{step.description}</Typography>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default HowToUse