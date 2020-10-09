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
import * as globals from '../../../utils/globals';
import LoadingComp from '../../../component/LoadingComp';
import ToastComp from '../../../component/ToastComp';
import AsyncStorage from '@react-native-community/async-storage';
const ChangePasswordScreen = ({
    navigation,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const ChangePasswordHandler = async (values) => {
        // navigation.navigate("CheckYourEmail")
        // console.log(values)
        const email = await AsyncStorage.getItem("email")
        let formdata = new FormData();
        formdata.append('email', email);
        formdata.append('auth_token', globals.authToken);
        formdata.append('password', values.password);
        setIsLoading(true)
        API.reset_password(onreset_passwordResponse, formdata, true)
    }

    const onreset_passwordResponse = {
        success: response => {
            console.log("onreset_passwordResponse====>", response)
            setIsLoading(false)
            setSuccessMessage(response.message)
            setTimeout(() => {
                navigation.navigate("Login");
            },1500);
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
                initialValues={{ password: '', confirmpassword: "" }}
                onSubmit={values => ChangePasswordHandler(values)}
                validationSchema={yup.object().shape({
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
                                    source={images.ChangePasswordScreen.change_pwImage}
                                />
                                <Text style={styles.changePssText} >Change Password</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.cardView} >
                            <TextInputComp TextInputForPassword
                                placeholder="New Password"
                                textInputStyle={{
                                    marginTop: 0
                                }}
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                touched={touched.password}
                                errors={errors.password}
                            />
                            <TextInputComp
                                TextInputForPassword
                                placeholder="Confirm Password"
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
                                buttonText="Change"
                                from="fromSignup"
                            />
                        </View>
                    </>
                )}
            </Formik>
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
export default ChangePasswordScreen;