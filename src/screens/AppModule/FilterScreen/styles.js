import { StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';

export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    headerView: {
        height: globals.mph5 * 19, // 90,
        backgroundColor: "#f7f7f7",
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
        justifyContent: "center",
    },
    headerback: {
        marginLeft: globals.mpw5 * 2, // 10,
    },
    filterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: globals.mpw5 * 4, //20,
    },
    filterText: {
        fontSize: globals.mpw5 * 7, //35,
        color: colors.BlackColor,
        fontFamily: font.Bold
    },
    clearText: {
        fontSize: globals.font_20, //20,
        color: colors.BlueColor,
        marginTop: globals.mph5 * 2, // 10,
        fontFamily: font.Medium
    },
    categoryView: {
        paddingHorizontal: globals.mpw5 * 2, // 10,
        marginTop: globals.mph5 * 4, // 20
    },
    categoryToShowText: {
        fontSize: globals.font_20, //20,
        color: colors.BlackColor,
        fontFamily: font.Medium,
        // marginTop: 10
    },
    separater: {
        marginVertical: globals.mph5, // 5
    },
    headerList: {
        marginTop: globals.mph5 * 3, // 15
    },
    applyButton: {
        height: globals.mph5 * 10, // 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },
    applybuttonText: {
        fontSize: globals.font_20,// 20,
        fontFamily: font.Medium,
        color: "white"
    }
})