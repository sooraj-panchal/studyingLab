import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import TouchableComp from '../../../component/TouchableComp';

const ProfileScreen = ({
    navigation,
}) => {

    const goToMyCourseScreen = () => {
        navigation.navigate("MyCourse")
    }
    const goToChatScreen = () => {
        // navigation.navigate("MyCourse")
    }
    const goToChangePasswordScreen = () => {
        navigation.navigate("ResetPassword")
    }
    const goToFavoriteScreen = () => {
        navigation.navigate("Favorite")
    }
    const goToEditProfileScreen = () => {
        navigation.navigate("EditProfile")
    }

    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={styles.backgroundImage}
                source={images.ProfileScreen.backgroundImage}
            >
                <View style={styles.headerContainer} >
                    <Text style={styles.profileText} >Profile</Text>
                    <TouchableOpacity onPress={goToEditProfileScreen} >
                        <Image
                            style={styles.profileImage}
                            source={images.ProfileScreen.edit_profileImage}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.nameContainer} >
                    <Text style={styles.helloText} > Hello, </Text>
                    <Text style={styles.nameText} >John  wick</Text>
                </View>
            </ImageBackground>
            <TouchableComp TouchableForEmail
                text1="Email"
                text2="loreamIpsum@gmail.com"
            />
            <TouchableComp
                text1="My Course"
                onPressTouch={goToMyCourseScreen}
            />
            <TouchableComp
                text1="Favorite Course"
                onPressTouch={goToFavoriteScreen}
            />
            <TouchableComp
                text1="Chat"
                onPressTouch={goToChatScreen}
            />
            <TouchableComp
                text1="Change Password"
                onPressTouch={goToChangePasswordScreen}
            />
            <View style={styles.btnStyle} >
                <ButtonComp
                    // onPressButton={handleSubmit}
                    buttonText="LOGOUT"
                    from="fromSignup"
                />
            </View>
        </View>
    )
}
export default ProfileScreen;