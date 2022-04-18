import { StyleSheet } from "react-native";
import { SIZES } from "../../../../../constants";

export const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
})