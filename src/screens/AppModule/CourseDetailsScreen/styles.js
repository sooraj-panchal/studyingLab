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
    btnContainer: {
        marginTop: globals.mph5 * 5,//  25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: globals.mpw5 * 2,//  10,
    },
    btnLeft: {
        backgroundColor: colors.LightGrayColor,
        borderRadius: 5,
        width: globals.mpw5 * 30,//  150,
        height: globals.mph5 * 9,//  45,
        marginLeft: 0
    },
    btnRight: {
        width: globals.mpw5 * 30,//  150,
        height: globals.mph5 * 9,//  45,
        borderRadius: 5,
        backgroundColor: colors.BlueColor,
        marginLeft: 0
    },
    btnLeftText: {
        fontFamily: font.Regular,
        color:colors.BlackColor,
        fontSize: globals.font_16,// 16,
    },
    btnRightText: {
        fontFamily: font.Regular,
        color: "white",
        fontSize: globals.font_15,// 15
    },
    likeShareCommentContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 10
    },
    likeImage:{
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    likeText:{
        fontSize: 14,
        color: colors.GrayColor,
        fontFamily: font.React
    },
    shareImage:{
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginLeft: 15,
        marginTop: 5
    },
    messageImage:{
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginLeft: 10
    },
    longText:{
        fontSize: 15,
        color: colors.GrayColor,
        fontFamily: font.Medium,
        marginHorizontal: 10,
        marginTop: 20,
        alignSelf: "center"
    }
})