import { StyleSheet } from "react-native";
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

export default StyleSheet.create({
    image: {
        width: globals.mpw5 * 4, // 20,
        height: globals.mph5 * 4, // 20,
        resizeMode: "contain",
        marginTop: globals.mph5 * 2,// 10,
        marginLeft: globals.mpw5 * 2, // 10
    }
})