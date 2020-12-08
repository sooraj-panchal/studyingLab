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
    checkurEmailText: {
        fontSize: globals.font_26,// 25,
        // fontFamily: font.Bold,
        color: "white",
        marginTop: globals.mph5 * 8,// 40
    },
    text: {
        fontSize: globals.font_16, // 16,
        // fontFamily: font.Regular,
        color: "white",
        marginTop: globals.mpw5 * 3,// 15,
        width: globals.mpw5 * 56,// 280,
        textAlign: "center"
    },
    cardView: {
        backgroundColor: "white",
        marginHorizontal: globals.mpw5 * 2,// 10,
        paddingVertical: globals.mph5 * 8,// 40,
        marginTop: globals.mph5 * 6,// 30,
        borderRadius: 20,
        elevation: 2,
    },
    btnStyle: {
        marginTop: globals.mph5 * 10,// 80,
        alignSelf: "center",
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: globals.mph5 * 4,// 20
    },
    didntgetthecodeText: {
        fontSize: globals.font_16, // 16,
        color: colors.BlackColor,
        // fontFamily: font.Regular
    },
    resendCodeText: {
        fontSize: globals.font_18, // 18,
        color: colors.BlueColor,
        // fontFamily: font.Bold,
        marginLeft: globals.mpw5 * 2,// 10
    }
})