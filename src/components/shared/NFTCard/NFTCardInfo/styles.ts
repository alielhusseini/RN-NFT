import { SIZES } from "../../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    bodyContainer: {
        width: "100%",
        padding: SIZES.font,
    },
    bodyDetailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.font,
    },
})