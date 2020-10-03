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
const ForgotPasswordScreen = ({
    navigation,
}) => {
    const SubmitHandler = (values) => {
        navigation.navigate("CheckYourEmail")
        console.log(values)
    }
    return (
        <View style={styles.viewContainer}>
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
        </View>
    )
}
export default ForgotPasswordScreen;