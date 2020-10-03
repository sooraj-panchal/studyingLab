import { StyleSheet } from "react-native";
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

export default StyleSheet.create({
    emailView: {
        marginHorizontal: globals.mpw5 * 2,// 10,
        paddingLeft: globals.mpw5 * 3,// 15,
        justifyContent: "center",
        backgroundColor: "white",
        elevation: 3,
        marginTop: globals.mph5 * 2,// 10,
        height: globals.mph5 * 14,// 70,
        borderRadius: 10
    },
    text1: {
        fontSize: globals.font_20,// 20,
        fontFamily: font.Medium
    },
    text2: {
        fontSize: globals.font_16,// 16,
        fontFamily: font.Regular
    },
    touchableView: {
        marginHorizontal: globals.mpw5 * 2,// 10,
        justifyContent: "space-between",
        backgroundColor: "white",
        elevation: 3,
        marginTop: globals.mph5 * 2,//10,
        height: globals.mph5 * 10,// 50,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: globals.mpw5 * 3,// 15
    },
    openImage: {
        width: globals.mpw5 * 4,// 20,
        height: globals.mph5 * 4,// 20,
        resizeMode: "contain"
    }
})