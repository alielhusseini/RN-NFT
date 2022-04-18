import { SIZES, COLORS, SHADOWS, FONTS } from "../../../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    container: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
    },
    urgency: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.primary,
    },
    time: {
        fontSize: SIZES.medium,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    },
})