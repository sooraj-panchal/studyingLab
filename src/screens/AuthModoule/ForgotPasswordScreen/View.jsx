import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import TextInputComp from '../../../component/TextInputComp';
import BackImageComp from '../../../component/BackImageComp';
import { Formik } from 'formik'
import * as yup from 'yup';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from '../../../utils/globals';
import ToastComp from '../../../component/ToastComp';
import AsyncStorage from '@react-native-community/async-storage';

const ForgotPasswordScreen = ({
    navigation,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")



    const SubmitHandler = (values) => {
        // navigation.navigate("CheckYourEmail")
        // console.log(values)
        let formdata = new FormData();
        formdata.append('email', values.email);
        formdata.append('auth_token', globals.authToken);

        setIsLoading(true)
        API.forgot_password(onforgot_passwordResponse, formdata, true)
    }

    const onforgot_passwordResponse = {
        success: response => {
            console.log("onforgot_passwordResponse====>", response)
            setIsLoading(false)
            setSuccessMessage(response.message)
            setTimeout(() => {
                AsyncStorage.setItem("email",response.data.email)
                navigation.navigate("Verification");
            }, 500);
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
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => SubmitHandler(values)}
                validationSchema={yup.object().shape({
                    email: yup
                        .string()
                        .email()
                        .required("Email is must be required"),
                })}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <>
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
                                    source={images.ForgotPasswordScreen.pwImage}
                                />
                                <Text style={styles.forgotPasText} >Forgot Password</Text>
                            </View>
                            <View style={styles.cardView} >
                                <TextInputComp
                                    placeholder="Enter Your Email Address"
                                    from="forgotPassword"
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={() => setFieldTouched('email')}
                                    autoCompleteType="email"
                                    keyboardType="email-address"
                                    touched={touched.email}
                                    errors={errors.email}
                                />
                            </View>
                        </ImageBackground>
                        <View style={styles.btnStyle} >
                            <ButtonComp
                                onPressButton={handleSubmit}
                                buttonText="Submit"
                                from="fromSignup"
                            />
                        </View>
                    </>
                )}
            </Formik>
            <ToastComp
                type={"error"}
                message={errorMessage}
                onDismiss={() => { setErrorMessage("") }}
            />
            <ToastComp
                type={"success"}
                message={successMessage}
                onDismiss={() => { setSuccessMessage("") }}
            />
        </View>
    )
}
export default ForgotPasswordScreen;