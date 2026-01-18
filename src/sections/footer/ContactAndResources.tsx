import { Grid, Link, Stack, Typography } from "@mui/material"
import { LuGithub, LuMail } from "react-icons/lu";

const ContactAndResources = () => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={2}>
           <Typography fontWeight={600}>
                Contact & Resources
            </Typography>


            <Stack spacing={1.5} sx={{ color: "text.secondary" }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LuGithub fontSize={"medium"}/>
                  <Link
                   variant="body2"
                    href="#"
                    underline="hover"
                    sx={{ color: "text.secondary" }}
                  >
                    View on GitHub
                  </Link>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LuMail fontSize={"medium"}/>
                  <Link
                    variant="body2"
                    href="#"
                    underline="hover"
                    sx={{ color: "text.secondary" }}
                  >
                    Get in Touch
                  </Link>
                </Stack>
              </Stack>

            <Typography
                variant="caption"
                sx={{ color: "text.secondary", mt: 2 }}
            >
                Built with care for students of knowledge worldwide.
            </Typography>
        </Stack>
    </Grid>
  )
}

export default ContactAndResources