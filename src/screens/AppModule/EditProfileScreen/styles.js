import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    backgroundImage: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 2,
    },
    imageLogoContainer: {
        alignItems: 'center',
        marginTop: globals.mph5 * 10,// 30
    },
    logoImage: {
        width: globals.mpw5 * 24,// 160,
        height: globals.mph5 * 24,// 160,
        resizeMode: "contain",
    },
    editProfileText: {
        fontSize: globals.font_26,// 25,
        // fontFamily: font.Bold,
        color: "white",
        marginTop: globals.mph5 * 6,// 20
    },
    cardView: {
        backgroundColor: "white",
        marginHorizontal: globals.mpw5 * 2,// 10,
        paddingVertical: globals.mph5 * 6,// 30,
        marginTop: globals.mph5 * 6,// 30,
        borderRadius: 20,
        bottom: globals.mph5 * 24, //120,
        alignItems: "center",
        elevation: 2
    },
    btnStyle: {
        bottom: globals.mph5 * 12,// 60,
        alignSelf: "center",
    },
    changePasswordTouchable: {
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: globals.mph5 * 6,// 30
    },
    changePasswordText: {
        fontSize: globals.font_20,// 20,
        color: colors.BlackColor,
        // fontFamily: font.Regular
    }
})