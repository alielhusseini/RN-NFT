import { SIZES } from "../../../../constants";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    headerContainer: {
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
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