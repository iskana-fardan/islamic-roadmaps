import { createTheme } from "@mui/material/styles";

export type Theme = "light" | "dark"

export const getTheme = (mode: Theme) =>
  createTheme({
    palette: {
      mode,
    },
  });
