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
    haveAnAcContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: globals.mph5 * 4, // 20
    },
    haveAnAcText: {
        fontSize: globals.font_16, // 16,
        color: "white",
        // fontFamily: font.Regular
    },
    signInText: {
        fontSize: globals.font_18,// 18,
        color: "white",
        // fontFamily: font.Regular,
        marginLeft: globals.mpw5 * 2, // 10
    },
    cardView: {
        backgroundColor: "white",
        marginHorizontal: globals.mpw5 * 2, //  10,
        paddingVertical: globals.mph5 * 4, // 20,
        marginTop: globals.mph5 * 4, // 20,
        borderRadius: 5,
        alignItems: "center"
    },
    createAnAcText: {
        fontSize: globals.font_26, // 25,
        marginTop: globals.mph5 * 2, // 10,
        color: colors.BlackColor,
        // fontFamily: font.Regular
    },
    textInputMainContainer: {
        marginTop: globals.mph5 * 3, // 15
    },
    btnStyle: {
        marginTop: globals.mph5 * 4, // 20
        // position: "absolute",
        // bottom: 10
    }
})