import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded"

const RoadmapHeader = () => {
  return (
    <Container maxWidth="md">
      <Stack spacing={3} py={6}>
        {/* Back */}
        <IconButton
          disableRipple
          size="small"
          sx={{ alignSelf: "flex-start", alignItems: "center" }}
        >
          <ArrowBackRoundedIcon fontSize="small" />
          <Typography variant="body2" ml={1}>
            Back to Categories
          </Typography>
        </IconButton>

        {/* Title */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "7px",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MenuBookRoundedIcon />
          </Box>

          <Box>
            <Typography variant="h4" fontWeight={700}>
              Fiqh{" "}
              <Typography
                component="span"
                variant="h6"
                color="text.secondary"
              >
                الفقه
              </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learning Roadmap
            </Typography>
          </Box>
        </Stack>

        {/* Description */}
        <Typography color="text.secondary">
          Islamic jurisprudence covering worship, transactions,
          and daily life rulings
        </Typography>
      </Stack>
    </Container>
  )
}


export default RoadmapHeader;