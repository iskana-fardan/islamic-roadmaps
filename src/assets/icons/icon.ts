import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";

export const icons = {
  fiqh: MenuBookRoundedIcon,
  nahwu: MenuBookRoundedIcon,
  usul_fiqh: BalanceRoundedIcon,
  sorof: MenuBookRoundedIcon,
};

export type IconKey = keyof typeof icons;