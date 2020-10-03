import { StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    bgImage: {
        width: globals.mpw5 * 64, //320,
        height: globals.mph5 * 32, //160,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: globals.mph5 * 3, // 15
    },
    resultText: {
        fontSize: globals.font_32,// 30,
        fontFamily: font.Bold,
        color: "white"
    },
    answerListContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: globals.mph5 * 4, // 20,
        alignSelf: "center"
    },
    wrongAnswerView: {
        width: globals.mpw5 * 20, // 100,
        height: globals.mph5 * 10, // 50,
        backgroundColor: "#f7f7f7",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        borderRadius: 2,
    },
    wrongAnswerConunt: {
        fontSize: globals.font_16,// 16,
        color: colors.RedColor,
        fontFamily: font.Bold
    },
    wrongAnswertext: {
        fontSize: globals.font_13,// 13,
        color: colors.BlackColor,
        fontFamily: font.Regular
    },
    rightAnswerContainer: {
        width: globals.mpw5 * 20, // 100,
        height: globals.mph5 * 10, // 50,
        backgroundColor: "#f7f7f7",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        borderRadius: 2,
        marginHorizontal: globals.mpw5 * 2, // 10
    },
    shareimage: {
        width: globals.mpw5 * 12, // 60,
        height: globals.mph5 * 12, // 60,
        alignSelf: "center",
        marginTop: globals.mph5 * 4, // 20
    },
    btnMainContainer: {
        marginTop: globals.mph5 * 2, // 10,
        position: "absolute",
        bottom: globals.mph5 * 4, //20,
        alignSelf: "center"
    },
    btnNextChapter: {
        backgroundColor: colors.BlueColor,
        justifyContent: "center",
        alignItems: "center",
        width: globals.mpw5 * 64, // 320,
        flexDirection: "row",
        borderRadius: 30,
        height: globals.mph5 * 9, //45
    },
    nextChapterText: {
        color: "white",
        fontSize: globals.font_20,// 20,
        fontFamily: font.Bold
    },
    nextImage: {
        width: globals.mpw5 * 4, // 20,
        height: globals.mph5 * 4, // 20,
        resizeMode: "contain",
        marginLeft: globals.mpw5 * 3, // 15,
        marginTop: 2
    },
    btnBackToHome: {
        backgroundColor: colors.DarkGrayColor,
        justifyContent: "center",
        alignItems: "center",
        width: globals.mpw5 * 64, // 320,
        flexDirection: "row",
        borderRadius: 30,
        height: globals.mph5 * 9, // 45,
        marginTop: globals.mph5 * 2, // 10,
    },
    backImage: {
        width: globals.mpw5 * 4, // 20,
        height: globals.mph5 * 4, // 20,
        resizeMode: "contain",
        marginTop: 2
    },
    backToHomeText: {
        color: "white",
        fontSize: globals.font_20,// 20,
        fontFamily: font.Bold,
        marginLeft: globals.mpw5 * 3, // 15,
    }
})