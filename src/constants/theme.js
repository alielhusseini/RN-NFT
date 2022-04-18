import { scale } from "react-native-size-matters";

export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#74858C",
};

export const SIZES = {
  base: scale(8),
  small: scale(12),
  font: scale(14),
  medium: scale(16),
  large: scale(18),
  extraLarge: scale(24),
};

export const FONTS = {
  bold: "Inter-Bold",
  semiBold: "Inter-SemiBold",
  medium: "Inter-Medium",
  regular: "Inter-Regular",
  light: "Inter-Light",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
