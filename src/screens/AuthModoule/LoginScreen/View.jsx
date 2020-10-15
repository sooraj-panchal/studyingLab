import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import TextInputComp from '../../../component/TextInputComp';
import FbGleBtnComp from '../../../component/FbGleBtnComp';
import BackImageComp from '../../../component/BackImageComp';
import { Formik } from 'formik'
import * as yup from 'yup';
import { AppStack } from '../../../navigation/navActions';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import AsyncStorage from '@react-native-community/async-storage';
import ToastComp from '../../../component/ToastComp';
import ModalComp from '../../../component/ModalComp';

const LoginScreen = ({
    navigation,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [toggleModal, setIsToggleModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [getClassData, setIsGetClassData] = useState(false)

    const signInHandler = (values) => {
        let formdata = new FormData();
        formdata.append('email', values.email);
        formdata.append('password', values.password);
        formdata.append('auth_token', globals.authToken);
        formdata.append('fcm_token', "");
        formdata.append('flag', "N");

        setIsLoading(true)
        API.student_login(onLoginResponse, formdata, true)
    }


    const toggleModalHandler = () => {
        setIsToggleModal(!toggleModal);
    };

    const onLoginResponse = {
        success: response => {
            console.log("onLoginResponse====>", response)
            setIsLoading(false)
            AsyncStorage.setItem("token", response.data.token)
            globals.student_Token = response.data.token
            AsyncStorage.setItem("name", response.data.name)
            AsyncStorage.setItem("email", response.data.email)
            // navigation.dispatch(AppStack);
            toggleModalHandler()
            setIsGetClassData(true)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
            setErrorMessage(err.message)
        },
        complete: () => { },
    }
    const goToSignUp = () => {
        navigation.navigate("SignUp")
    }
    const goToForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }
    return (
        <View style={styles.viewContainer}>
            <ModalComp
                toggleModal={toggleModal}
                toggleModalHandler={toggleModalHandler}
                getClassData={getClassData}
                navigation={navigation} />
            <LoadingComp animating={isLoading} />
            <ImageBackground style={styles.backgroundImage}
                source={images.SignupScreen.backgroundImage}
            >
                <BackImageComp
                    onPressBackImage={() => {
                        navigation.goBack()
                    }}
                />
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => signInHandler(values)}
                    validationSchema={yup.object().shape({
                        // name: yup
                        //     .string()
                        //     .min(5)
                        //     .required('Name is required field'),
                        email: yup
                            .string()
                            .email()
                            .required("Email is must be required"),
                        password: yup
                            .string()
                            .min(6)
                            .required("Password is must be required"),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <>
                            <View style={styles.cardView} >
                                <Text style={styles.welcomeBackText} >Welcom back!</Text>
                                <Text style={styles.text} >Enter your details to sign in your account</Text>
                                <View style={styles.textInputMainContainer} >
                                    <TextInputComp
                                        placeholder="Email"
                                        value={values.email}
                                        onChangeText={handleChange("email")}
                                        onBlur={() => setFieldTouched('email')}
                                        autoCompleteType="email"
                                        keyboardType="email-address"
                                        touched={touched.email}
                                        errors={errors.email}
                                    />
                                    <TextInputComp
                                        placeholder="Password"
                                        TextInputForPassword
                                        value={values.password}
                                        onChangeText={handleChange("password")}
                                        onBlur={() => setFieldTouched('password')}
                                        touched={touched.password}
                                        errors={errors.password}
                                    />
                                    <TouchableOpacity activeOpacity={0.8} onPress={goToForgotPassword} >
                                        <Text style={styles.forgotPasText} >Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.btnStyle} >
                                    <ButtonComp
                                        onPressButton={handleSubmit}
                                        buttonText="Sign in"
                                        from="fromSignup"
                                    />
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
                <View style={styles.orContainer} >
                    <View style={styles.orLeftBorder} />
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        bottom: 2,
                        fontFamily: font.Regular
                    }} >or</Text>
                    <View style={styles.orLeftBorder} />
                </View>
                <View style={styles.fbGleContainer} >
                    <FbGleBtnComp
                        navigation={navigation}
                        imageSrc={images.AuthScreen.googleImage}
                        buttonText="Sign in With Google"
                    />
                    <FbGleBtnComp
                        navigation={navigation}
                        imageSrc={images.AuthScreen.facebookImage}
                        buttonText="Sign in With Facebook"
                    />
                </View>
                <View style={styles.donthaveAnAcContainer} >
                    <Text style={styles.DonthaveAnAcText} >Don't have an account?</Text>
                    <TouchableOpacity onPress={goToSignUp} >
                        <Text style={styles.signUpext}  >Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
export default LoginScreen;