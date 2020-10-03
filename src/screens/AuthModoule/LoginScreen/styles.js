import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        // backgroundColor:"white"
    },
    backgroundImage: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: globals.mph5 * 4, //20
    },
    orLeftBorder: {
        borderWidth: 0.5,
        borderColor: "white",
        width: globals.mpw5 * 29, //145
    },
    fbGleContainer: {
        marginTop: globals.mph5 * 2, //10,
        alignSelf: "center"
    },
    donthaveAnAcContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: globals.mph5 * 16, // 80
    },
    DonthaveAnAcText: {
        fontSize: globals.font_16,// 16,
        color: "white",
        fontFamily: font.Regular
    },
    signUpext: {
        fontSize: globals.font_18,// 18,
        color: "white",
        fontFamily: font.Regular,
        marginLeft: globals.mpw5 * 2, // 10
    },
    cardView: {
        backgroundColor: "white",
        marginHorizontal: globals.mph5 * 2, // 10,
        paddingVertical: globals.mph5 * 4, // 20,
        marginTop: globals.mph5 * 6, // 30,
        borderRadius: 5,
        alignItems: "center"
    },
    welcomeBackText: {
        fontSize: globals.font_32, // 30,
        marginTop: globals.mph5 * 2, // 10,
        color: colors.BlackColor,
        fontFamily: font.Medium
    },
    text: {
        fontSize: globals.font_14,// 14,
        marginTop: globals.mph5, // 5,
        color: colors.BlackColor,
        fontFamily: font.Light
    },
    textInputMainContainer: {
        marginTop: globals.mph5, // 5
    },
    btnStyle: {
        marginTop: globals.mph5 * 6, // 30
    },
    forgotPasText: {
        fontSize: globals.font_14, // 14,
        color: colors.GrayColor,
        textAlign: "right",
        margin: globals.mpw5, // 5,
    }
})