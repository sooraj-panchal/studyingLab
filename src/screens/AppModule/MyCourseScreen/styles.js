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
        width: Dimensions.get("window").width,
        height: globals.mph5 * 40, //200,
    },
    headerContainer: {
        marginTop: globals.mph5, //5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: globals.mpw5 * 3, // 15,
        marginTop: globals.mph5 * 2,// 10
    },
    listMyCourseSeparater: {
        marginVertical: globals.mph5 * 2, //10
    },
    listMyCourseHeader: {
        marginTop: globals.mph5 * 2, //10
    },
    listMyCourseFooter: {
        marginBottom: globals.mph5 * 2,// 10
    },
    rmcdCardView: {
        marginHorizontal: globals.mpw5 * 3, //15,
        backgroundColor: "white",
        paddingTop: globals.mph5,//  5,
        paddingBottom: globals.mph5 * 4,//  20,
        elevation: 4,
        borderRadius: 5,
    },
    rmcdImage: {
        width: globals.mpw5 * 62,//  310,
        height: globals.mph5 * 38,//  190,
        resizeMode: "contain",
        alignSelf: "center"
    },
    rmcdNewCourseText: {
        fontSize: globals.font_20, // 20,
        fontFamily: font.Medium,
        color: colors.BlackColor,
        marginTop: globals.mph5 * 2,// 10,
        marginLeft: globals.mpw5 * 2,// 10
    },
    rmcdCourseProgressText: {
        fontSize: globals.font_16, // 16,
        color: colors.GrayColor,
        fontFamily: font.Medium,
        marginTop: globals.mph5,//  5,
        marginLeft: globals.mpw5 * 2,//  10
    },
    rmcdPercentage: {
        fontSize: globals.font_16, // 16,
        color: colors.BlackColor,
        textAlign: "center",
        marginTop: globals.mph5 * 2,//  10
    },
    rmcdProgressBarContainer: {
        marginLeft: globals.mpw5 * 2,//  10,
        marginTop: 2
    },
    btnContainer: {
        marginTop: globals.mph5 * 5,//  25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: globals.mpw5 * 2,//  10,
    },
    btnLeft: {
        backgroundColor: "red",
        borderRadius: 5,
        width: globals.mpw5 * 30,//  150,
        height: globals.mph5 * 9,//  45,
        marginLeft: 0
    },
    btnRight: {
        width: globals.mpw5 * 30,//  150,
        height: globals.mph5 * 9,//  45,
        borderRadius: 5,
        backgroundColor: "lightgrey",
        marginLeft: 0
    },
    btnLeftText: {
        fontFamily: font.Regular,
        color: "white",
        fontSize: globals.font_16,// 16,
    },
    btnRightText: {
        fontFamily: font.Regular,
        color: "white",
        fontSize: globals.font_15,// 15
    }
})