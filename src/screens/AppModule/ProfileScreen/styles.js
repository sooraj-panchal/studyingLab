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
        height:globals.mph5*40, //200,
    },
    headerContainer: {
        marginTop:globals.mph5, //5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:globals.mpw5*3, // 15,
        marginTop:globals.mph5*2,// 10
    },
    profileText: {
        color: "white",
        fontFamily: font.Bold,
        fontSize:globals.font_36, // 35
    },
    profileImage: {
        width:globals.mpw5*8,// 40,
        height:globals.mph5*8,// 40,
        resizeMode: "contain"
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginBottom:globals.mph5*4,// 20
    },
    helloText: {
        fontSize:globals.font_32,// 30,
        fontFamily: font.Bold,
        color: "white"
    },
    nameText: {
        fontSize:globals.font_32,// 30,
        fontFamily: font.Regular,
        color: "white"
    },
    btnStyle: {
        marginTop:globals.mph5*4,// 20,
        alignSelf: "center"
    }
})