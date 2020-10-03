import { StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    paginationCount: {
        alignItems: "center",
        marginTop: globals.mph5 * 10,// 50,
        height: globals.mph5 * 10,// 50
    },
    questionPaginationText: {
        fontSize: globals.font_16,// 16,
        fontFamily: font.Medium,
        color: colors.BlackColor
    },
    listQuestionContainer: {
        marginTop: globals.mph5 * 4,// 20,
        flex: 1
    },
    rddImage: {
        width: globals.mpw5 * 2,// 10,
        height: globals.mph5 * 2,// 10,
        marginHorizontal: 3,
        marginTop: globals.mph5,// 5
    },
    rqdContainer: {
        marginHorizontal: globals.mpw5 * 4,// 20,
    },
    questionContainer: {
        backgroundColor: "#f7f7f7",
        justifyContent: "center",
        alignItems: "center",
        width: globals.mpw5 * 64,// 320,
        paddingVertical: globals.mph5 * 4,// 20,
        elevation: 4,
        borderRadius: 5,
    },
    questionminiContainer: {
        flexDirection: "row",
        marginLeft: globals.mpw5 * 4,// 20
    },
    questionConntText: {
        fontSize: globals.font_20,// 20,
        fontFamily: font.Medium,
        color: colors.BlackColor
    },
    questionText: {
        fontSize: globals.font_16,// 16,
        color: colors.BlackColor,
        marginTop: 2
    },
    btnMainContainer: {
        marginTop: globals.mph5 * 4,// 20
    },
    questionbtn1: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: globals.mph5 * 2,// 10,
    },
    touchable: {
        // backgroundColor: colors.GreenColor,
        width: globals.mpw5 * 64,// 320,
        height: globals.mph5 * 10,// 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    questionBtnText: {
        fontSize: globals.font_20,// 20,
        color: "white",
        fontFamily: font.Regular
    },
    rightImageContainer: {
        position: "absolute",
        left: globals.mpw5 * 3,// 15
    },
    rightImage: {
        width: globals.mpw5 * 5,// 25,
        height: globals.mph5 * 5,// 25,
        resizeMode: "contain"
    },
    showResultbtnContainer: {
        marginTop: globals.mph5 * 10,// 50,
        alignSelf: "center"
    },
    showResultbtnStyle: {
        width: globals.mph5 * 50,// 250
    }
})