import React from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import ButtonComp from '../../../component/ButtonComp';
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
            <ImageBackground style={styles.backgroundImage}
                source={images.CheckYourEmailScreen.backgroundImage}
            >
                <BackImageComp
                    onPressBackImage={() => {
                        navigation.goBack()
                    }}
                />
                <View style={styles.imageLogoContainer} >
                    <Image
                        style={styles.logoImage}
                        source={images.CheckYourEmailScreen.emailImage}
                    />
                    <Text style={styles.checkurEmailText} >Check your email</Text>
                    <Text style={styles.text} >To confirm your email address, tab the link in the email we sent to you.</Text>
                </View>
            </ImageBackground>
            <View style={styles.btnStyle} >
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
            <View style={styles.bottomContainer} >
                <Text style={styles.didntgetthecodeText} >Didn't get the code?</Text>
                <TouchableOpacity onPress={resendCodeHandler} >
                    <Text style={styles.resendCodeText}  >Resend code</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CheckYourEmailScreen;