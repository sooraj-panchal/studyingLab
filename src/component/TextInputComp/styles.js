import { StyleSheet } from "react-native";
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

export default StyleSheet.create({
    textInputContainer: {
        backgroundColor: "white",
        borderWidth: 1,
        width: globals.mpw5 * 60, // 300,
        marginTop: globals.mph5 * 3,// 15,
        height: globals.mph5 * 8,// 40,
        borderRadius: 20,
        borderColor: colors.LightGrayColor,
    },
    textInputStyle: {
        maxWidth: globals.mpw5 * 46, // 230,
        paddingLeft: globals.mpw5 * 4, // 20,
        fontSize: globals.font_15,// 15,
        top: 3,
    },
    eyeIconContainer: {
        position: "absolute",
        right: globals.mpw5 * 3, // 15,
        bottom: globals.mph5 + 3,// 8
    },
    eyeIcon: {
        width: globals.mpw5 * 4, // 20,
        height: globals.mph5 * 4,// 20,
        resizeMode: "contain",
    },
    errorView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: globals.mph5,// 5,
        marginLeft: globals.mpw5, // 5
    },
    errorText: {
        fontSize: globals.font_11,// 11,
        marginLeft: globals.mpw5, // 5,
        color: 'red'
    },
    textInputForCommon: {
        backgroundColor: "white",
        borderWidth: 1,
        width: globals.mpw5 * 60, // 300,
        height: globals.mph5 * 8,// 40,
        paddingLeft: globals.mpw5 * 4, // 20,
        borderRadius: 20,
        borderColor: colors.LightGrayColor,
        fontSize: globals.font_15, // 15,
        top: 3
    }
})