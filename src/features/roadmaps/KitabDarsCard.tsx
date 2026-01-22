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
import type { Book } from "../../types/book"

interface Props  {
  books: (Book | undefined)[]
  completed: boolean
  onToggle: () => void
  onOpen : () => void
}

const KitabDarsCard = ({books, completed, onToggle, onOpen }: Props) => {
  const theme =  useTheme();
  return (
    <>
      {books.map(b => (
      <Card
        key={b?.id}
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
        onClick={onOpen}
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
                  {b?.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "serif",mt:3 }}
                >
                  {b?.titleArabic}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {b?.description}
              </Typography>

              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ mt: 0.75, display: "block" }}
              >
                {b?.author}
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
    ))}
    </>
  )
}

export default KitabDarsCard
