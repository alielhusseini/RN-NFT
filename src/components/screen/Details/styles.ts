import { SIZES } from "../../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    biddingButtonContainer: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.extraLarge,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
    },
    bidsContainer: {
        paddingBottom: SIZES.extraLarge * 3,
    },
})