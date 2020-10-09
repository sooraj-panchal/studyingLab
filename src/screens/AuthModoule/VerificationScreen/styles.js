import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';
export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        // backgroundColor:"white"
    },
    backgroundImage: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 2,
    },
    imageLogoContainer: {
        alignItems: 'center',
        marginTop: globals.mph5 * 6,// 30
    },
    logoImage: {
        width: globals.mpw5 * 28,// 160,
        height: globals.mph5 * 28,// 160,
        resizeMode: "contain",
    },
    forgotPasText: {
        fontSize: globals.font_26,// 25,
        fontFamily: font.Bold,
        color: "white",
        marginTop: globals.mph5 * 6,// 20
    },
    cardView: {
        backgroundColor: "white",
        marginHorizontal: globals.mpw5 * 2,// 10,
        paddingVertical: globals.mph5 * 4,// 40,
        bottom: globals.mph5 * 18,// 30,
        borderRadius: 20,
        elevation: 2,
        alignItems:"center"
    },
    btnStyle: {
        bottom: globals.mph5 * 10,// 80,
        alignSelf: "center",
    },
    text3:{
        fontSize:globals.font_20, //15,
        color: colors.BlueColor,
        // fontWeight: "bold",
        fontFamily:font.Bold
    },
    text4:{
        fontSize:globals.font_15, // 13,
        width:globals.mpw5*46, //230,
        marginTop:globals.mph5*2, //5,
        textAlign: "center",
        fontFamily:font.Regular
    },
    otpView:{
        width:globals.screenWidth*0.75, //'75%', 
        height:globals.screenHeight*0.1355, //100, 
    },
    underlineStyleBase: {
        width:globals.screenWidth*0.1527,  //60,
        height:globals.screenHeight*0.07,//75,
        borderWidth: 1,
        borderRadius:5,
        borderColor:colors.BlueColor,
        backgroundColor:"#f7f7f7",
        // borderBottomWidth:2,
        fontSize:globals.font_28, //32,
        fontFamily:font.Regular,
        color: colors.BlueColor,
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: globals.mph5 * 4,// 20
    },
    didntgetthecodeText: {
        fontSize: globals.font_16, // 16,
        color: colors.BlackColor,
        fontFamily: font.Regular
    },
    resendCodeText: {
        fontSize: globals.font_18, // 18,
        color: colors.BlueColor,
        fontFamily: font.Bold,
        marginLeft: globals.mpw5 * 2,// 10
    }
})