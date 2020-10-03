import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContainer: {
        backgroundColor: colors.BlueColor,
        height: globals.mph5 * 11,// 55,
        justifyContent: "center",
        paddingLeft: globals.mpw5 * 3,// 15
    },
    searchText: {
        color: "white",
        fontSize: globals.font_20, // 20,
        fontFamily: font.Regular
    },
    searchInputContainer: {
        backgroundColor: "white",
        borderRadius: 25,
        marginHorizontal: globals.mpw5 * 3,// 15,
        height: globals.mph5 * 10,// 50,
        elevation: 5,
        // alignSelf:"center",
        marginTop: globals.mph5 * 2,// 10,
        flexDirection: "row",
        alignItems: "center"
    },
    searchInput: {
        paddingLeft: globals.mpw5 * 4,// 20,
        fontSize: globals.font_18, //18,
        width: globals.mpw5 * 50,// 250,
        color: colors.BlueColor
    },
    closeIcon: {
        width: globals.mpw5 * 4,// 20,
        height: globals.mpw5 * 4,// 20,
        resizeMode: "contain",
        position: "absolute",
        right: globals.mpw5 * 4,// 20
    },
    searchDataContainer: {
        backgroundColor: colors.BlueColor,
        marginHorizontal: globals.mpw5 * 3,// 15,
        paddingVertical: globals.mph5,// 5,
        borderRadius: 20,
        marginTop: globals.mph5 * 4,// 20,
    },
    searchListSeparater: {
        borderWidth: 0.2,
        marginVertical: globals.mph5 * 2,// 10,
        marginHorizontal: globals.mpw5 * 4,// 20,
        borderColor: "white"
    },
    searchListHeader: {
        marginTop: globals.mph5 * 2,// 10
    },
    searchlistFooter: {
        marginBottom: globals.mph5 * 2,// 10
    },
    rsdContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: globals.mpw5 * 6,// 30,
    },
    rsdSearchName: {
        fontSize: globals.font_16,// 16,
        fontFamily: font.Regular,
        color: "white"
    },
    rsdImage: {
        width: globals.mpw5 * 3,// 15,
        height: globals.mph5 * 3,// 15,
        resizeMode: "contain",
    }
})