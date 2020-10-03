import { StyleSheet } from "react-native";
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

export default StyleSheet.create({
    TouchableView: {
        width: globals.mpw5 * 60, // 300,
        height: globals.mph5 * 10, //  50,
        borderRadius: 5,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        elevation: 2,
        marginTop: globals.mph5 * 2, //   10
    },
    image: {
        width: globals.mpw5 * 5, //  25,
        height: globals.mph5 * 5, //   25,
        resizeMode: "contain"
    },
    buttonText: {
        fontSize: globals.font_14,// 14,
        color: colors.BlackColor,
        fontFamily: font.Regular,
        marginLeft: globals.mpw5 * 2, //  10
    }
})