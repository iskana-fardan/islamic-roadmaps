import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";

export const icons = {
  fiqh_syafii: MenuBookRoundedIcon,
  usul_fiqh: BalanceRoundedIcon,
  nahwu: MenuBookRoundedIcon,
  sorof: MenuBookRoundedIcon,
};

export type IconKey = keyof typeof icons;