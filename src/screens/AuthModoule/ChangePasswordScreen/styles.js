import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor:"white"
    },
    backgroundImage: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 2,
    },
    imageLogoContainer: {
        alignItems: 'center',
        marginTop: globals.mph5 * 6,// 30
    },
    logoImage: {
        width: globals.mpw5 * 20,// 100,
        height: globals.mph5 * 20,// 100,
        resizeMode: "contain",
    },
    changePssText: {
        fontSize: globals.font_26,// 25,
        // fontFamily: font.Bold,
        color: "white",
        marginTop: globals.mph5 * 10,// 50
    },
    cardView: {
        backgroundColor: "white",
        marginHorizontal: globals.mpw5 * 2,// 10,
        paddingVertical: globals.mph5 * 8,// 40,
        marginTop: globals.mph5 * 6,// 30,
        borderRadius: 20,
        elevation: 2,
        bottom: globals.mph5 * 24, //120,
        alignItems: "center",
    },
    btnStyle: {
        alignSelf: "center",
        bottom: globals.mph5 * 20, // 100,
    }
})