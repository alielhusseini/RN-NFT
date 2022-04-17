import { ScaledSheet } from "react-native-size-matters";
import { COLORS, SIZES, SHADOWS, assets } from '../../../constants'

export const styles = ScaledSheet.create({
    cardContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
    },
    card: {
        width: '100%',
        height: '250@s',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
        resizeMode: 'cover',
    },
})