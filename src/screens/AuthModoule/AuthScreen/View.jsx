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
                style={{
                    width: 250,
                    height: 250,
                    resizeMode: "contain"
                }}
                source={images.AuthScreen.logoImage}
            />
            <View>
                <Image
                    style={{
                        width: 200,
                        marginTop: 20,
                        resizeMode: "contain"
                    }}
                    source={images.AuthScreen.borderImage}
                />
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30
            }} >
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
            <View style={{
                marginTop: 40
            }} >
                <FbGleBtnComp
                    // onPressBtn={_googleSignIn}
                    imageSrc={images.AuthScreen.googleImage}
                    buttonText="Sign up With Google"
                />
                <FbGleBtnComp
                    // onPressBtn={facebookHandler}
                    imageSrc={images.AuthScreen.facebookImage}
                    buttonText="Sign up With Facebook"
                />
            </View>
        </View>
    )
}
export default AuthScreen;