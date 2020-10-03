import { StyleSheet } from "react-native";
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    logoImage: {
        width: globals.mpw5 * 50, // 250,
        height: globals.mph5 * 50, //250,
        resizeMode: "contain",
    },
    borderImage: {
        width: globals.mpw5 * 40, //200,
        marginTop: globals.mph5 * 4, //20,
        resizeMode: "contain"
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: globals.mph5 * 6, //30
    },
    fbGleBtnContainer: {
        marginTop: globals.mph5 * 8, //40
    }
})