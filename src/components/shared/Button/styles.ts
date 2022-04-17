import { COLORS, SHADOWS, SIZES } from "../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    circelButton: {
        width: '40@s',
        height: '40@s',
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
    },
    circleImage: {
        width: '24@s',
        height: '24@s',
        resizeMode: 'contain',
    }
})