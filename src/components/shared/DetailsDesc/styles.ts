import { ScaledSheet } from "react-native-size-matters";
import { COLORS, FONTS, SIZES } from '../../../constants'

export const styles = ScaledSheet.create({
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descTitle: { fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary },
    descText: { fontSize: SIZES.small, fontFamily: FONTS.regular, color: COLORS.secondary, lineHeight: SIZES.large },
    readMore: { fontSize: SIZES.small, fontFamily: FONTS.semiBold, color: COLORS.primary, },
    bidsTitls: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    }
})