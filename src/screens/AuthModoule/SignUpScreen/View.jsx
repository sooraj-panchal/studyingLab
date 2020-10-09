import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
import * as globals from './../../../utils/globals'
import LoadingComp from '../../../component/LoadingComp';
const SignUpScreen = ({
    navigation,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const Signuphandler = (values) => {
        // navigation.dispatch(AppStack);
        // let fcmToken = globals.fcmToken
        // if (fcmToken != null) {
        // const data = {
        //     name: values.name,
        //     email: values.email,
        //     password: values.password,
        //     flag: "N",
        //     auth_token: globals.authToken,
        // }
        let formdata = new FormData();
        formdata.append('name', values.name);
        formdata.append('email', values.email);
        formdata.append('password', values.password);
        formdata.append('flag', "N");
        formdata.append('auth_token', globals.authToken);

        setIsLoading(true)
        API.student_Register(onRegisterResponse, formdata, true)
        // } else {
        //     return false;
        // }
    }

    const onRegisterResponse = {
        success: response => {
            // alert(this.state.token+response.otp)
            console.log("onRegisterResponse====>", response)
            // this.setState({
            //     isloading: false,
            // })
            setIsLoading(false)
            // navigateToVerification(response)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
            // this.setState({
            //     isloading: false,
            //     errorMessage: err.message
            // })
        },
        complete: () => { },
    }

    // const navigateToVerification = (response) => {
    //     this.props.navigation.navigate("Verification", {
    //         otp: response.data.otp,
    //         email: response.data.email,
    //         driver_id: response.data.driver_id
    //     })
    // }

    const goToLogin = () => {
        navigation.navigate("Login")
    }
    // const [isVisibleEyeImage, setIsVisibleEyeImage] = useState(false)
    return (
        <ScrollView style={styles.viewContainer}>
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
                    initialValues={{ email: '', password: '', name: "", confirmpassword: "" }}
                    onSubmit={values => Signuphandler(values)}
                    validationSchema={yup.object().shape({
                        name: yup
                            .string()
                            .min(5)
                            .required('Name is required field'),
                        email: yup
                            .string()
                            .email()
                            .required("Email is must be required"),
                        password: yup
                            .string()
                            .min(6)
                            .required("Password is must be required"),
                        confirmpassword: yup
                            .string()
                            .oneOf([yup.ref('password'), null], "Password must match")
                            .required('confirm password is must be required'),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <>
                            <View style={styles.cardView} >
                                <Text style={styles.createAnAcText} >Create an Account</Text>
                                <View style={styles.textInputMainContainer} >
                                    <TextInputComp
                                        placeholder="Name"
                                        value={values.name}
                                        onChangeText={handleChange("name")}
                                        onBlur={() => setFieldTouched('name')}
                                        autoCompleteType="name"
                                        keyboardType="name-phone-pad"
                                        touched={touched.name}
                                        errors={errors.name}
                                    />
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
                                    <TextInputComp
                                        placeholder="Confirm password"
                                        TextInputForPassword
                                        value={values.confirmpassword}
                                        onChangeText={handleChange("confirmpassword")}
                                        onBlur={() => setFieldTouched('confirmpassword')}
                                        touched={touched.confirmpassword}
                                        errors={errors.confirmpassword}
                                    />
                                </View>
                                <View style={styles.btnStyle} >
                                    <ButtonComp
                                        onPressButton={handleSubmit}
                                        buttonText="Signup"
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
                        buttonText="Sign up With Google"
                    />
                    <FbGleBtnComp
                        navigation={navigation}
                        imageSrc={images.AuthScreen.facebookImage}
                        buttonText="Sign up With Facebook"
                    />
                </View>
                <View style={styles.haveAnAcContainer} >
                    <Text style={styles.haveAnAcText} >Have an account?</Text>
                    <TouchableOpacity onPress={goToLogin} >
                        <Text style={styles.signInText}  >Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default SignUpScreen;