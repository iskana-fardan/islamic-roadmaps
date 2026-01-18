import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material"
import { PiRadioButtonBold } from "react-icons/pi";


interface Note {
    id: number,
    title: string,
    description: string
}


const notes : Note[] = [
    {
        id: 1,
        title: "Seek qualified teachers:",
        description: "Islamic knowledge is traditionally transmitted through teacher-student relationships. These roadmaps are guides, not replacements for proper instruction."
    },
    {
        id: 2,
        title: "Be patient:  ",
        description: "Mastering Islamic sciences takes years of dedicated study. Focus on deep understanding rather than rushing through texts."
    },
    {
        id: 3,
        title: "Regional variations:",
        description: " Different regions and institutions may have slightly different curricula. Consult with local scholars for guidance specific to your context."
    }
]

const ImportantNotes = () => {
    const theme = useTheme();
  return (
     <Stack>
        <Typography variant="h6" fontWeight={600}>
                Important Notes
        </Typography>
        <Card sx={{ mt: 2, mb: 8 }} variant="outlined">
            <CardContent
                sx={{
                    px: 6,
                    py: 4, // SATU sumber padding (padding default card content di reset)
                }}
            >
                <Stack spacing={1}>
                {notes.map((note) => (
                    <Stack key={note.id} direction="row" spacing={1}>
                    <Box sx={{ color: theme.palette.teal[100], mt: "2px" }}>
                        <PiRadioButtonBold />
                    </Box>

                    <Typography fontSize={12}>
                        <Typography component="span" fontWeight={600}>
                        {note.title}{" "}
                        </Typography>
                        <Typography component="span" color="text.secondary">
                        {note.description}
                        </Typography>
                    </Typography>
                    </Stack>
                ))}
                </Stack>
            </CardContent>
        </Card>
     </Stack>

  )
}

export default ImportantNotes