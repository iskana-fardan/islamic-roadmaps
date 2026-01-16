import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    level: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    glassBackground: string;
  }

  interface PaletteOptions {
    level?: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    glassBackground?: string;
  }
}
