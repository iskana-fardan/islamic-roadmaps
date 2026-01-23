import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import type { Collaborator } from "./collaborators.data"

interface Props {
  data: Collaborator
}

export default function CollaboratorCard({ data }: Props) {
  const theme = useTheme()

  return (
    <Card
      sx={{
        height: "100%",
        backgroundImage: "none",
        borderRadius: "15px",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Avatar
            src={data.avatar}
            alt={data.name}
            sx={{ width: 72, height: 72, border: `1px solid ${theme.palette.divider }`}}
          />

          <Box>
            <Typography fontWeight={600}>{data.name}</Typography>
            <Typography
              variant="body2"
              color= {theme.palette.teal[100]}
              sx={{ fontWeight: 500 }}
            >
              {data.role}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
