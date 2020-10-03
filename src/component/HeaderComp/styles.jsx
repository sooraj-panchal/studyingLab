import { StyleSheet } from "react-native";
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

export default StyleSheet.create({
    HeaderViewContainer: {
        height: globals.mph5 * 10, // 50,
        backgroundColor: colors.BlueColor,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: globals.mpw5 * 2, //10
    },
    backIcon: {
        width: globals.mpw5 * 4, //20,
        height: globals.mph5 * 4, //20,
        resizeMode: "contain"
    },
    headerText: {
        fontSize: globals.font_18,// 18,
        color: "white",
        fontFamily: font.Regular,
        marginLeft: globals.mpw5 * 3,// 15
    }
})