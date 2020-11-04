import React, { useEffect, useState } from 'react';
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
import * as globals from './../../../utils/globals';
import AsyncStorage from '@react-native-community/async-storage';
import ToastComp from '../../../component/ToastComp';

const EditProfileScreen = ({
    navigation,
    isLoading,
    userDetails,
    updateProfile,
    updateProfileWatcher
}) => {
    useEffect(() => {
        if (updateProfile) {
            navigation.goBack()
        }
    }, [updateProfile])

    const EditProfileHandler = (values) => {
        updateProfileWatcher({
            token: globals.student_Token,
            name: values.userName
        })
    }

    const goToResetPasswordScreen = () => {
        navigation.navigate("ResetPassword")
    }
    return (
        <View style={styles.viewContainer}>

            <LoadingComp animating={isLoading} />
            {
                userDetails &&
                <Formik
                    initialValues={{ userName: userDetails.name, email: userDetails.email }}
                    enableReinitialize={true}
                    onSubmit={values => EditProfileHandler(values)}
                    validationSchema={yup.object().shape({
                        userName: yup
                            .string()
                            .min(5)
                            .required('Name is required field'),
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
                                        source={images.EditProfileScreen.editprofileImage}
                                    />
                                    <Text style={styles.editProfileText} >Edit Profile</Text>
                                </View>
                            </ImageBackground>
                            <View style={styles.cardView} >
                                <TextInputComp
                                    placeholder="user Name"
                                    from="Edit Profile"
                                    value={values.userName}
                                    onChangeText={handleChange("userName")}
                                    onBlur={() => setFieldTouched('userName')}
                                    touched={touched.userName}
                                    errors={errors.userName}
                                />
                                <TextInputComp
                                    placeholder="Email"
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={() => setFieldTouched('email')}
                                    touched={touched.email}
                                    errors={errors.email}
                                    editable={false}
                                />
                            </View>
                            <View style={styles.btnStyle} >
                                <ButtonComp
                                    onPressButton={handleSubmit}
                                    buttonText="Save"
                                    from="fromSignup"
                                />
                            </View>
                        </>
                    )}
                </Formik>
            }

            <TouchableOpacity style={styles.changePasswordTouchable}
                onPress={goToResetPasswordScreen}
            >
                <Text style={styles.changePasswordText} >Change password</Text>
            </TouchableOpacity>
        </View>
    )
}
export default EditProfileScreen;