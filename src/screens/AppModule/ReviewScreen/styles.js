import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    totalReviewContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: globals.mph5 * 8,// 40
    },
    avg_rating_text: {
        fontSize: globals.mpw5 * 9,// 45,
        color: colors.BlackColor,
        fontFamily: font.Regular
    }, startView: {
        marginLeft: globals.mpw5 * 4,// 20,
    },
    starStyle: {
        width: globals.mpw5 * 6,// 25,
        height: globals.mph5 * 6,// 25,
        marginLeft: globals.mpw5,// 5
        resizeMode:"contain"
    },
    emptyStar: {
        width: globals.mpw5 * 6,// 25,
        height: globals.mph5 * 6,// 25,
        marginLeft: globals.mpw5,//5
        resizeMode:"contain"
    },
    totalRating: {
        fontSize: globals.font_14,// 14,
        color: colors.GrayColor,
        fontFamily: font.Regular,
        marginTop: globals.mph5,// 5,
        marginLeft: globals.mpw5 * 2,// 10
    },
    borderbottom: {
        borderBottomWidth: 1,
        borderBottomColor: colors.LightGrayColor,
        marginTop: globals.mph5 * 4,// 20,
        marginBottom: globals.mph5 * 2,// 10,
        marginHorizontal: globals.mpw5 * 2,// 20
    },
    borderBottom1: {
        borderBottomWidth: 1,
        borderBottomColor: colors.LightGrayColor,
        marginTop: globals.mph5 * 4,// 20,
        marginBottom: 0,
        marginHorizontal: globals.mpw5 * 2,// 20
    },
    rvdSeparater: {
        marginVertical: globals.mph5 * 3,// 15,
        borderBottomWidth: 1,
        marginHorizontal: globals.mpw5 * 3,// 15,
        borderBottomColor: colors.LightGrayColor
    },
    rvdHeader: {
        marginTop: globals.mph5 * 4,// 20
    },
    rvdFooter: {
        marginBottom: globals.mph5 * 4,// 20,
    },
    yourRatingAndReview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: globals.mpw5 * 4,// 20,
        marginTop: globals.mph5 * 4,// 10
    },
    student_nameText: {
        color: colors.BlackColor,
        fontFamily: font.Medium,
        fontSize: globals.font_16,// 16
    },
    starView: {
        // alignItems: "flex-start",
        right: globals.mpw5,// 5
    },
    starImage: {
        width: globals.mpw5 * 3,// 15,
        height: globals.mph5 * 3,// 15,
        marginLeft: globals.mpw5,// 5,
        resizeMode:"contain"
    },
    emptyStar1: {
        width: globals.mpw5 * 3,// 15,
        height: globals.mph5 * 3,// 15,
        marginLeft: globals.mpw5,// 5
        resizeMode:"contain"
    },
    messageText: {
        width: globals.mpw5 * 60,// 300,
        marginTop: globals.mph5 * 2,// 10,
        marginLeft: globals.mpw5 * 4,// 20,
        color: colors.BlackColor,
        fontFamily: font.Regular,
        fontSize: globals.font_13,// 13
    },
    rvdView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal:globals.mpw5*4,// 20
    }
})