import React from 'react';
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

const LoginScreen = ({
    navigation,
}) => {
    const signInHandler = (values) => {
        console.log(values)
    }
    const goToSignUp = () => {
        navigation.navigate("SignUp")
    }
    const goToForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }
    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={{
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height,
            }}
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
                            <View style={{
                                backgroundColor: "white",
                                marginHorizontal: 10,
                                paddingVertical: 20,
                                marginTop: 30,
                                borderRadius: 5,
                                alignItems: "center"
                            }} >
                                <Text style={{
                                    fontSize: 30,
                                    marginTop: 10,
                                    color: colors.BlackColor,
                                    fontFamily: font.Medium
                                }} >Welcom back!</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginTop: 5,
                                    color: colors.BlackColor,
                                    fontFamily: font.Light
                                }} >Enter your details to sign in your account</Text>
                                <View style={{
                                    marginTop: 5
                                }} >
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
                                        <Text style={{
                                            fontSize: 14,
                                            color: colors.GrayColor,
                                            textAlign: "right",
                                            margin: 5,
                                        }} >Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    marginTop: 30
                                }} >
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
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop: 20
                }} >
                    <View style={{
                        borderWidth: 0.5,
                        borderColor: "white",
                        width: 145
                    }} />
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        bottom: 2,
                        fontFamily: font.Regular
                    }} >or</Text>
                    <View style={{
                        borderWidth: 0.5,
                        borderColor: "white",
                        width: 145
                    }} />
                </View>
                <View style={{
                    marginTop: 10,
                    alignSelf: "center"
                }} >
                    <FbGleBtnComp
                        onPressBtn={() => {

                        }}
                        imageSrc={images.AuthScreen.googleImage}
                        buttonText="Sign in With Google"
                    />
                    <FbGleBtnComp
                        onPressBtn={() => {

                        }}
                        imageSrc={images.AuthScreen.facebookImage}
                        buttonText="Sign in With Facebook"
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: 80
                }} >
                    <Text style={{
                        fontSize: 16,
                        color: "white",
                        fontFamily: font.Regular
                    }} >Don't have an account?</Text>
                    <TouchableOpacity onPress={goToSignUp} >
                        <Text style={{
                            fontSize: 18,
                            color: "white",
                            fontFamily: font.Regular,
                            marginLeft: 10
                        }}  >Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
export default LoginScreen;