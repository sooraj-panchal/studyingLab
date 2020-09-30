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
    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={{
                width: Dimensions.get("window").width,
                height: 200,
            }}
                source={images.ProfileScreen.backgroundImage}
            >
                <View style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 15,
                    marginTop: 10
                }} >
                    <Text style={{
                        color: "white",
                        fontFamily: font.Bold,
                        fontSize: 35
                    }} >Profile</Text>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: "contain"
                        }}
                        source={images.ProfileScreen.edit_profileImage}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    marginBottom: 20
                }} >
                    <Text style={{
                        fontSize: 30,
                        fontFamily: font.Bold,
                        color: "white"
                    }} > Hello, </Text>
                    <Text style={{
                        fontSize: 30,
                        fontFamily: font.Regular,
                        color: "white"
                    }} >John  wick</Text>
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
                text1="Chat"
                onPressTouch={goToChatScreen}

            />
            <TouchableComp
                text1="Change Password"
                onPressTouch={goToChangePasswordScreen}
            />
            <View style={{
                marginTop: 30,
                alignSelf: "center"
            }} >
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