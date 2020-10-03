import { StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor:colors.BlueColor
    },
    backgroundContainer:{
        // height: 50,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    backIcon:{
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    paginationCountText:{
        fontSize: 18,
        color: "white",
        fontFamily: font.Regular,
    },
    emptyView:{
        width: 20
    },
    racdContainer:{
        width: 340,
        marginTop: 20,
        backgroundColor: "white",
        paddingTop: 5,
        height: 640,
        elevation: 4,
        borderRadius: 5,
        marginHorizontal: 10
    },
    courseImage:{
        width: 320,
        height: 190,
        resizeMode: "contain",
        alignSelf: "center"
    },
    chapterContainer:{
        marginLeft: 10,
        marginTop: 10
    },
    chapterText:{
        fontSize: 20,
        fontFamily: font.Medium,
        color: colors.BlackColor
    },
    longText:{
        fontSize: 15,
        color: colors.GrayColor,
        fontFamily: font.Medium,
        marginHorizontal: 10,
        marginTop: 15,
        alignSelf: "center"
    },
    btnContainer:{
        position: "absolute",
        alignSelf: "center",
        bottom: 30
    },
    btnnStyle:{
        width: 250
    }
})