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
})