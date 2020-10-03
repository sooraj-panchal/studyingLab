import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import FbGleBtnComp from '../../../component/FbGleBtnComp';

const AuthScreen = ({
    navigation,
}) => {

    const goToSignup = () => {
        navigation.navigate("SignUp")
    }
    const goToLogin = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.viewContainer}>
            <Image
                style={styles.logoImage}
                source={images.AuthScreen.logoImage}
            />
            <View>
                <Image
                    style={styles.borderImage}
                    source={images.AuthScreen.borderImage}
                />
            </View>
            <View style={styles.btnContainer} >
                <ButtonComp
                    onPressButton={goToSignup}
                    buttonText="Signup"
                    from="fromAuthSignup"
                />
                <ButtonComp
                    onPressButton={goToLogin}
                    buttonText="Sign in"
                    from="fromAuthSignIn"
                />
            </View>
            <View style={styles.fbGleBtnContainer} >
                <FbGleBtnComp
                    // onPressBtn={_googleSignIn}
                    imageSrc={images.AuthScreen.googleImage}
                    buttonText="Sign up With Google"
                    navigation={navigation}
                />
                <FbGleBtnComp
                    // onPressBtn={facebookHandler}
                    imageSrc={images.AuthScreen.facebookImage}
                    buttonText="Sign up With Facebook"
                    navigation={navigation}
                />
            </View>
        </View>
    )
}
export default AuthScreen;