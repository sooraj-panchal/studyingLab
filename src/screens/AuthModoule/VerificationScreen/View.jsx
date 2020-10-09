import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import TextInputComp from '../../../component/TextInputComp';
import BackImageComp from '../../../component/BackImageComp';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { API } from '../../../utils/api';
import * as globals from '../../../utils/globals';
import LoadingComp from '../../../component/LoadingComp';
import ToastComp from '../../../component/ToastComp';
import AsyncStorage from '@react-native-community/async-storage';

const VerificationScreen = ({
    navigation,
    route
}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [userOtp, setUserOtp] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const SubmitHandler = async() => {
        const email = await AsyncStorage.getItem("email")
        let formdata = new FormData();
        formdata.append('email', email);
        formdata.append('auth_token', globals.authToken);
        formdata.append('otp', userOtp);

        setIsLoading(true)
        API.verify_Otp(onverify_OtpResponse, formdata, true)
    }

    const onverify_OtpResponse = {
        success: response => {
            console.log("onverify_OtpResponse====>", response)
            setIsLoading(false)
            // setSuccessMessage(response.message)
            navigation.navigate("ChangePassword");
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
            setErrorMessage(err.message)
        },
        complete: () => { },
    }


    return (
        <View style={styles.viewContainer}>
            <LoadingComp animating={isLoading} />
            <ImageBackground style={styles.backgroundImage}
                source={images.ForgotPasswordScreen.backgroundImage}
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
                    <Text style={styles.forgotPasText} >Verify Email</Text>
                </View>
            </ImageBackground>
            <View style={styles.cardView} >
                <Text style={styles.text4} >
                    Enter the 4 digit code we sent you via email to continue.
                </Text>
                <OTPInputView
                    style={styles.otpView}
                    pinCount={4}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    // codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(userOtp => {
                        // this.setState({ userOtp })
                        setUserOtp(userOtp)
                    })}
                />
            </View>
            <View style={styles.btnStyle} >
                <ButtonComp
                    onPressButton={SubmitHandler}
                    buttonText="Submit"
                    from="fromSignup"
                />
            </View>
            <View style={styles.bottomContainer} >
                <Text style={styles.didntgetthecodeText} >Didn't get the code?</Text>
                <TouchableOpacity
                //  onPress={resendCodeHandler} 
                >
                    <Text style={styles.resendCodeText}  >Resend code</Text>
                </TouchableOpacity>
            </View>
            <ToastComp
                type={"success"}
                message={successMessage}
                onDismiss={() => { setSuccessMessage("") }}
            />
            <ToastComp
                type={"error"}
                message={errorMessage}
                onDismiss={() => { setErrorMessage("") }}
            />
        </View>
    )
}
export default VerificationScreen;