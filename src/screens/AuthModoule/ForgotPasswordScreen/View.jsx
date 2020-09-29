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
                        <ImageBackground style={{
                            width: Dimensions.get("screen").width,
                            height: Dimensions.get("screen").height / 2,
                        }}
                            source={images.ForgotPasswordScreen.backgroundImage}
                        >
                            <BackImageComp
                                onPressBackImage={() => {
                                    navigation.goBack()
                                }}
                            />
                            <View style={{
                                alignItems: 'center',
                                marginTop: 30
                            }} >
                                <Image
                                    style={{
                                        width: 160,
                                        height: 160,
                                        resizeMode: "contain",
                                    }}
                                    source={images.ForgotPasswordScreen.pwImage}
                                />
                                <Text style={{
                                    fontSize: 25,
                                    fontFamily: font.Bold,
                                    color: "white",
                                    marginTop: 20
                                }} >Forgot Password</Text>
                            </View>
                            <View style={{
                                backgroundColor: "white",
                                marginHorizontal: 10,
                                paddingVertical: 40,
                                marginTop: 30,
                                borderRadius: 20,
                                elevation: 2,
                            }} >
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
                        <View style={{
                            marginTop: 80,
                            alignSelf: "center",
                        }} >
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