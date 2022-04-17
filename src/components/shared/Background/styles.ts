import { COLORS } from "../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    backgroundBody: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    upper: {
        height: '300@s',
        backgroundColor: COLORS.primary,
    },
    lower: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})