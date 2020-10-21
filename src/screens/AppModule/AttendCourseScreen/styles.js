import { StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.BlueColor
    },
    backgroundContainer: {
        // height: 50,
        marginTop: globals.mph5 * 4,// 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: globals.mpw5 * 2,// 10
    },
    backIcon: {
        width: globals.mpw5 * 4,// 20,
        height: globals.mph5 * 4,// 20,
        resizeMode: "contain"
    },
    paginationCountText: {
        fontSize: globals.font_18,// 18,
        color: "white",
        fontFamily: font.Regular,
    },
    emptyView: {
        width: globals.mpw5 * 4,// 20
    },
    racdContainer: {
        width: globals.mpw5 * 68,// 340,
        marginTop: globals.mph5 * 4,// 20,
        backgroundColor: "white",
        paddingTop: globals.mph5,// 5,
        flex: 0.95,
        elevation: 4,
        borderRadius: 5,
        marginHorizontal: globals.mpw5 * 2,// 10,
        alignSelf: "center"
    },
    courseImage: {
        width: globals.mpw5 * 65,// 320,
        height: globals.mph5 * 42,// 190,
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: globals.mph5,// 5
    },
    chapterContainer: {
        marginLeft: globals.mpw5 * 2,// 10,
        marginTop: globals.mph5 * 2,// 10
    },
    chapterText: {
        fontSize: globals.font_20,// 20,
        fontFamily: font.Medium,
        color: colors.BlackColor
    },
    longText: {
        fontSize: globals.font_15,// 15,
        color: colors.GrayColor,
        fontFamily: font.Medium,
        marginHorizontal: globals.mpw5 * 2,// 10,
        marginTop: globals.mph5 * 3,// 15,
        alignSelf: "center"
    },
    btnContainer: {
        alignSelf: "center",
        marginTop: globals.mph5 * 2,//10
    },
    btnnStyle: {
        width: globals.mph5 * 50,// 250
    }
})