import React from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import TextInputComp from '../../../component/TextInputComp';
import FbGleBtnComp from '../../../component/FbGleBtnComp';
import BackImageComp from '../../../component/BackImageComp';

const CheckYourEmailScreen = ({
    navigation,
}) => {
    const resendCodeHandler = () => {
    }
    const goToEmailApp = () => {
        // navigation.navigate("SignUp")
        Linking.openURL('mailto:soorajpanchal786@gmail.com')
    }
    const goToForgotPassword = () => {
        // navigation.navigate("Login")
    }
    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={{
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height / 2,
            }}
                source={images.CheckYourEmailScreen.backgroundImage}
            >
                <BackImageComp
                    onPressBackImage={() => {
                        navigation.goBack()
                    }}
                />
                <View style={{
                    alignItems: 'center',
                    marginTop: 30
                }} >
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={images.CheckYourEmailScreen.emailImage}
                    />
                    <Text style={{
                        fontSize: 25,
                        fontFamily: font.Bold,
                        color: "white",
                        marginTop: 40
                    }} >Check your email</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: font.Regular,
                        color: "white",
                        marginTop: 15,
                        width: 280,
                        textAlign: "center"
                    }} >To confirm your email address, tab the link in the email we sent to you.</Text>
                </View>
            </ImageBackground>
            <View style={{
                marginTop: 50,
                alignSelf: "center"
            }} >
                <ButtonComp
                    onPressButton={goToEmailApp}
                    buttonText="Open Email App"
                    from="fromSignup"
                    btnStyle={{
                        width: 210,
                        height: 55
                    }}
                />
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                position: "absolute",
                bottom: 20
            }} >
                <Text style={{
                    fontSize: 16,
                    color: colors.BlackColor,
                    fontFamily: font.Regular
                }} >Didn't get the code?</Text>
                <TouchableOpacity onPress={resendCodeHandler} >
                    <Text style={{
                        fontSize: 18,
                        color: colors.BlueColor,
                        fontFamily: font.Bold,
                        marginLeft: 10
                    }}  >Resend code</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CheckYourEmailScreen;