import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import ButtonComp from '../../../component/ButtonComp';
import TouchableComp from '../../../component/TouchableComp';
import { AuthStack } from '../../../navigation/navActions';
import AsyncStorage from '@react-native-community/async-storage';
import * as globals from './../../../utils/globals';
import LoadingComp from '../../../component/LoadingComp';
import ModalComp from '../../../component/ModalComp';
import NoNeworkComp from '../../../component/NoNetworkComp';

const ProfileScreen = ({
    navigation,
    isLoading,
    userDetails,
    getProfileWatcher
}) => {
    const [toggleModal, setIsToggleModal] = useState(false);
    const [getClassData, setIsGetClassData] = useState(false)
    const [getGrade, setIsGetGrade] = useState("")
    const [name, setIsName] = useState("")
    const [email, setIsEmail] = useState("")

    const toggleModalHandler = () => {
        setIsToggleModal(!toggleModal);
    };

    useEffect(() => {
        getProfileData()
    }, [userDetails])
    const getProfileData = () => {
        if (userDetails) {
            setIsName(userDetails.name)
            setIsEmail(userDetails.email)
        } else {
            getProfileWatcher({
                token: globals.student_Token
            })
        }
        updateGradeAsync()
    }

    const updateGradeAsync = async () => {
        const YourGrade = await AsyncStorage.getItem("YourGrade")
        setIsGetGrade(YourGrade)
    }

    const goToMyCourseScreen = () => {
        navigation.navigate("MyCourse")
    }
    const goToChatScreen = () => {
        navigation.navigate("Chat")
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
    const editGradeHandler = () => {
        toggleModalHandler()
        setIsGetClassData(true)
    }
    const goToPrivacyPolicy = () => {
        navigation.navigate("PrivacyPolicy")

    }
    const LogoutHandler = () => {
        globals.AlertHandler({
            value:"Are you sure you want to logout?",
            text1: "No",
            text2: "yes",
            onPress: () => AsyncStorage.clear(() => {
                navigation.dispatch(AuthStack)
                getProfileWatcher(null)
            })
        })
    }
    return (
        <View style={styles.viewContainer}>
            <ModalComp
                toggleModal={toggleModal}
                toggleModalHandler={toggleModalHandler}
                getClassData={getClassData}
                navigation={navigation}
                from="Profile"
            />
            {

                isLoading == true ?
                    <LoadingComp animating={isLoading} />
                    :
                    globals.isInternetConnected
                        ?
                        <ScrollView contentContainerStyle={{
                            paddingBottom: 100
                        }}
                            style={{
                                flex: 1
                            }}
                        >
                            <View>
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
                                <TouchableComp
                                    text1="Your Grade"
                                    text2={getGrade}
                                    from="Grade"
                                    onPressTouch={editGradeHandler}
                                />
                                <TouchableComp
                                    text1="Privacy Policy"
                                    onPressTouch={goToPrivacyPolicy}
                                />
                                <View style={styles.btnStyle} >
                                    <ButtonComp
                                        onPressButton={LogoutHandler}
                                        buttonText="LOGOUT"
                                        from="fromSignup"
                                    />
                                </View>
                            </View>

                        </ScrollView>
                        :
                        <NoNeworkComp onPressButton={getProfileData} from="Profile" />
            }
        </View>
    )
}
export default ProfileScreen;