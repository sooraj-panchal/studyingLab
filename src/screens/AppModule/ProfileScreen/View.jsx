import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import ButtonComp from '../../../component/ButtonComp';
import TouchableComp from '../../../component/TouchableComp';
import { AuthStack } from '../../../navigation/navActions';
import AsyncStorage from '@react-native-community/async-storage';
import * as globals from './../../../utils/globals';
import LoadingComp from '../../../component/LoadingComp';



const ProfileScreen = ({
    navigation,
    isLoading,
    userDetails,
    getProfileWatcher
}) => {
    const [name, setIsName] = useState("")
    const [email, setIsEmail] = useState("")

    // useEffect(() => {
    //     getAsyncUserDetails()
    // }, [name])

    // const getAsyncUserDetails = async () => {
    //     const name = await AsyncStorage.getItem("name")
    //     const email = await AsyncStorage.getItem("email")
    //     setIsName(name)
    //     setIsEmail(email)
    // }
    useEffect(() => {
        if (userDetails) {
            setIsName(userDetails.name)
            setIsEmail(userDetails.email)
        } else {
            getProfile()
        }
    }, [userDetails])

    const getProfile = () => {
        getProfileWatcher({
            token: globals.student_Token
        })

        // setIsLoading(true)
        // API.get_profile(onget_profileResponse, formdata, true)
    }

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
    const LogoutHandler = () => {
        AsyncStorage.clear(() => {
            navigation.dispatch(AuthStack)
        })
    }
    return (
        <View style={styles.viewContainer}>
            <LoadingComp animating={isLoading} />
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
                    <Text style={styles.nameText} >{name}</Text>
                </View>
            </ImageBackground>
            <TouchableComp TouchableForEmail
                text1="Email"
                text2={email}
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
                    onPressButton={LogoutHandler}
                    buttonText="LOGOUT"
                    from="fromSignup"
                />
            </View>
        </View>
    )
}
export default ProfileScreen;