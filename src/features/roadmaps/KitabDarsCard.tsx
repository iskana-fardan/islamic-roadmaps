import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
  useTheme,
} from "@mui/material"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"

type Props = {
  completed: boolean
  onToggle: () => void
}

const KitabDarsCard = ({ completed, onToggle }: Props) => {
  const theme =  useTheme();
  return (
    <Card
      sx={{
        position: "relative",
        background: "none",
        border: `1px solid ${theme.palette.divider}` ,
        bgcolor: completed ? "rgba(255,255,255,0.04)" : "transparent",
        transition: "all .2s ease",
        "&::after": completed
          ? {
              content: '""',
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.35)",
              pointerEvents: "none",
            }
          : {},
      }}
    >
      <CardActionArea
        disableRipple
        sx={{
          "&:hover .hover-arrow": {
            opacity: 1,
            transform: "translateX(0)",
          },
        }}
      >
        <CardContent >
          <Box display="flex" gap={1} alignItems="flex-start">
            {/* Checkbox */}
            <Checkbox
              disableRipple
              checked={completed}
              onClick={(e) => {
                e.stopPropagation()
                onToggle()
              }}
              sx={{p:0 }}
            />

            {/* Content */}
            <Box flex={1}>
              <Box display="flex" justifyContent="space-between" gap={2}>
                <Typography
                  fontWeight={600}
                  sx={{
                    textDecoration: completed ? "line-through" : "none",
                    opacity: completed ? 0.6 : 1,
                  }}
                >
                  Safinatun Najah
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "serif",mt:3 }}
                >
                  سفينة النجاة
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                A concise primer on the fundamentals of worship according to the
                Shafi'i school. Essential for beginners.
              </Typography>

              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ mt: 0.75, display: "block" }}
              >
                by Syaikh Salim bin Sumair al-Hadhrami
              </Typography>
            </Box>

            {/* Hover Arrow */}
            <ChevronRightRoundedIcon
              className="hover-arrow"
              sx={{
                opacity: 0,
                transform: "translateX(-4px)",
                transition: "all .2s ease",
                color: "text.secondary",
              }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default KitabDarsCard
