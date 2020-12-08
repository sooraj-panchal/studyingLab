import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    headerImagebg: {
        width: Dimensions.get("window").width,
        height: globals.mph5 * 23, //115,
    },
    headerContainer: {
        marginHorizontal: globals.mpw5 * 2, // 10,
        marginTop: globals.mph5, // 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    homeText: {
        color: "white",
        // fontFamily: font.Bold,
        fontSize: globals.font_36,// 35
    },
    filterIconStyle: {
        marginTop: globals.mph5 * 2, // 10,
        marginRight: globals.mpw5, // 5
    },
    searachBtnContainer: {
        height: globals.mph5 * 9, // 45,
        marginHorizontal: globals.mpw5 * 2, // 10,
        marginTop: globals.mph5, // 5,
        borderRadius: 2,
        backgroundColor: "white",
        justifyContent: "center",
        paddingLeft: globals.mpw5 * 2, // 10
    },
    searchIconStyle: {
        width: globals.mpw5 * 4, // 20,
        height: globals.mph5 * 4, // 20,
        resizeMode: "contain"
    },
    searchForAnyThingText: {
        fontSize: globals.font_15,// 15,
        color: colors.GrayColor,
        // fontFamily: font.Regular,
        marginLeft: globals.mpw5 * 2, // 10
    },
    listCategoryContainer: {
        // alignSelf: "center",
        marginTop: globals.mph5 * 2, // 10,
        paddingBottom: globals.mph5 * 20, // 100
    },
    rcibgStyle: {
        width: globals.mpw5 * 33, // 160,
        height: globals.mph5 * 28, // 140,
        marginLeft: globals.mpw5*2, // 5,
        marginVertical: globals.mph5, // 5,
    },
    rcibgVIew: {
        width: globals.mpw5 * 33, // 165,
        height: globals.mph5 * 30,//  150,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    rciCataegoryImage: {
        width: globals.mpw5 * 12, // 60,
        height: globals.mph5 * 12, // 60,
        // resizeMode: "contain"
    },
    rciCataegoryName: {
        color: "white",
        fontSize: globals.font_16, // 16,
        // fontFamily: font.Bold,
        marginTop: globals.mph5, // 5
    }
})