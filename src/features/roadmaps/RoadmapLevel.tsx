import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
  Typography,
} from "@mui/material"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import { useState } from "react"
import KitabDarsCard from "./KitabDarsCard"


interface Props {
  title: string,
  total: number,
  color: string
}

const RoadmapLevel = ({  title , total, color }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const [completed, setCompleted] = useState(1)

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      sx={{
        bgcolor: "#0b0b0b",
        borderLeft: "2px solid",
        borderColor: "divider",
        "&::before": {
          display: "none",
        },
      }}
    >
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
              justifyContent: "center",
            }}
          >
            <SchoolOutlinedIcon fontSize="small" />
          </Box>

          <Box>
            <Typography fontWeight={600}>{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {completed} of {total} completed
            </Typography>
          </Box>
        </Stack>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          position: "relative",
          pl: 4,
          "&::before": {
            content: '""',
            position: "absolute",
            left: 16,
            top: 0,
            width: 2,
            height: expanded ? "100%" : 0,
            bgcolor: "divider",
            transition: "height .3s ease",
          },
        }}
      >
        <KitabDarsCard
          completed={completed === 1}
          onToggle={() =>
            setCompleted((prev) => (prev === 1 ? 0 : 1))
          }
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default RoadmapLevel