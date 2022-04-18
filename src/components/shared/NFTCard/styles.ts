import { ScaledSheet } from "react-native-size-matters";
import { COLORS, SIZES, SHADOWS } from '../../../constants'

export const styles = ScaledSheet.create({
    cardContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
    },
})