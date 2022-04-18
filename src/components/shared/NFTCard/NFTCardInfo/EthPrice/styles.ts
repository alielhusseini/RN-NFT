import { SIZES, COLORS, FONTS } from "../../../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
    },
    ethLogo: {
        width: '20@s',
        height: '20@s',
        marginRight: `2@s`,
    },
    priceText: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
    },
})