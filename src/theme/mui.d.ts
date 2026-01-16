// theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    glassBackground: string;
  }
  interface PaletteOptions {
    glassBackground?: string;
  }
}
