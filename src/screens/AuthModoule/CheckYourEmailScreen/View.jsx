import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import ButtonComp from '../../../component/ButtonComp';
import BackImageComp from '../../../component/BackImageComp';
import { AppStack } from '../../../navigation/navActions';
import * as globals from './../../../utils/globals'
import LoadingComp from '../../../component/LoadingComp';
import AsyncStorage from '@react-native-community/async-storage';

const CheckYourEmailScreen = ({
    navigation,
}) => {
    const [isLoading,setIsLoading] = useState(false)
    // const resendCodeHandler = () => {
    // }
    // const goToEmailApp = () => {
    //     // navigation.navigate("SignUp")
    //     Linking.openURL('mailto:soorajpanchal786@gmail.com')
    // }
    // const goToForgotPassword = () => {
    //     // navigation.navigate("Login")
    // }
    useEffect(() => {
        // Linking.getInitialURL().then((url) => {
        //     if (url) {
        //         console.log("url========>", url)
        //         const route = url.replace(/.*?:\/\//g, '');
        //         const id = route.match(/\/([^\/]+)\/?$/)[1];
        //         const routeName = route.split('/')[1];
        //         console.log("id is ", id)
        //         console.log("routeName is ", routeName)
        //         // navigation.navigate(routeName)
        //     }
        // });
        Linking.addEventListener('url', handleOpenURL);
        return (() => {
            Linking.removeEventListener('url', handleOpenURL);
        })
    }, [])

    const handleOpenURL = (event) => { // D
        // return console.log("event= === = >", event)
        // const route = event.replace(/.*?:\/\//g, '');
        // const id = route.match(/\/([^\/]+)\/?$/)[1];
        // const routeName = route.split('/')[0];
        console.log(event.url)
        if (event.url) {
            let url = event.url
            const route = url.replace(/.*?:\/\//g, '');
            const token = route.match(/\/([^\/]+)\/?$/)[1];
            console.log("token is ", token)
            setIsLoading(true)
            globals.student_Token = token
            AsyncStorage.setItem("token", token)
            setTimeout(() => {
                navigation.dispatch(AppStack)
            }, 2000);
            setIsLoading(false)
        } else {
            alert("cant get Url")
        }
    }
    return (
        <View style={styles.viewContainer}>
            <LoadingComp animating={isLoading} />
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
                    <Text style={styles.text} >kindly, Check Your Email for Verification...</Text>
                </View>
            </ImageBackground>
            {/* <View style={styles.btnStyle} >
                <ButtonComp
                    onPressButton={goToEmailApp}
                    buttonText="Open Email App"
                    from="fromSignup"
                    btnStyle={{
                        width: 210,
                        height: 55
                    }}
                />
            </View> */}
            {/* <View style={styles.bottomContainer} >
                <Text style={styles.didntgetthecodeText} >Didn't get the code?</Text>
                <TouchableOpacity onPress={resendCodeHandler} >
                    <Text style={styles.resendCodeText}  >Resend code</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}
export default CheckYourEmailScreen;