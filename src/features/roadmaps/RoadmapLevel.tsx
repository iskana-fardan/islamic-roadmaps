import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
  Typography,
} from "@mui/material"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import KitabDarsCard from "./KitabDarsCard";



const RoadmapLevel = ({ title, subtitle, color }) => {
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              bgcolor: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <SchoolOutlinedIcon fontSize="small"/>
          </Box>
          <Box>
            <Typography fontWeight={600}>{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        {/* NANTI: card kitab per level */}
        <Box sx={{ mt:2 }}>
          <KitabDarsCard/>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default RoadmapLevel;