import { SIZES } from "../../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
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