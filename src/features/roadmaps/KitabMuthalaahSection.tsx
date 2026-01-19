import { Grid, Card, CardContent, Chip, Container, Stack, Typography, useTheme } from "@mui/material"
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const KitabMuthalaahSection = () => {
  const theme = useTheme();

  return (
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
  )
}

export default KitabMuthalaahSection;
