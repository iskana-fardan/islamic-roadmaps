import { createTheme } from "@mui/material/styles";

export type Theme = "light" | "dark"

export const getTheme = (mode: Theme) =>
  createTheme({
    palette: {
      mode,

      ...(mode === "light"
        ? {
            // LIGHT MODE 
            primary: {
              main: "#0f766e", // emerald-ish
            },

            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },

            text: {
              primary: "#0f172a",
              secondary: "#475569",
            },

            divider: "rgba(15,23,42,0.08)",
          }
        : {
            //  DARK MODE 
            primary: {
              main: "#2dd4bf", // toska hijau (AKSEN)
            },

            background: {
              default: "#0b0f0e", // background utama
              paper: "#111716",   // card / surface
            },

            text: {
              primary: "#e5e7eb",
              secondary: "#9ca3af",
            },

            divider: "rgba(255,255,255,0.08)",
          }),
    },

    shape: {
      borderRadius: 12,
    },
    //   level: {
    //     beginner: "#22c55e",     // HIJAU
    //     intermediate: "#3b82f6", // BIRU
    //     advanced: "#a855f7",     // UNGU
    //   },
    // nanti eksplore lagi, cari cara pakai ini atau cara extend ini di mui
  });

