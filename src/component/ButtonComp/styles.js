import { StyleSheet } from "react-native";
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

export default StyleSheet.create({
    TouchableView: {
        width:globals.mpw5*30, //150,
        height:globals.mph5*9, // 45,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: globals.font_20,// 14,
        color: "white",
        fontFamily: font.Bold
    }
})