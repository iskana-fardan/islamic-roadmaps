import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { Container, Box, Stack, Typography, useTheme } from "@mui/material";

const RoadmapUsageInfo = () => {
  const theme = useTheme();
  return (
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
  )
}

export default RoadmapUsageInfo;