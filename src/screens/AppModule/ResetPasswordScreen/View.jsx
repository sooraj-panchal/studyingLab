import React from 'react';
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

const ResetPasswordScreen = ({
    navigation,
}) => {
    const ChangePasswordHandler = (values) => {
        // navigation.navigate("CheckYourEmail")
        console.log(values)
    }
    return (
        <View style={styles.viewContainer}>
            <Formik
                initialValues={{ oldPassword: "", password: '', confirmpassword: "" }}
                onSubmit={values => ChangePasswordHandler(values)}
                validationSchema={yup.object().shape({
                    oldPassword: yup
                        .string()
                        .min(6)
                        .required("oldPassword is must be required"),
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
                                <Text style={styles.changePssText} >Reset Password</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.cardView} >
                            <TextInputComp TextInputForPassword
                                placeholder="Old Password"
                                textInputStyle={{
                                    marginTop: 0
                                }}
                                value={values.oldPassword}
                                onChangeText={handleChange("oldPassword")}
                                onBlur={() => setFieldTouched('oldPassword')}
                                touched={touched.oldPassword}
                                errors={errors.oldPassword}
                            />
                            <TextInputComp TextInputForPassword
                                placeholder="New Password"
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
        </View>
    )
}
export default ResetPasswordScreen;