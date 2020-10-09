import React, { useEffect } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import * as images from '../../assets/images/map';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import { AppStack } from '../../navigation/navActions';

const FbGleBtnComp = ({
    navigation,
    onPressBtn,
    buttonText,
    imageSrc
}) => {

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: '455250643702-pk3fsd68rrd5sleip64nt2761kbr25l2.apps.googleusercontent.com',
            offlineAccess: true,
            hostedDomain: '',
            loginHint: '',
            forceConsentPrompt: true,
            accountName: '',
            // iosClientId: 'XXXXXX-krv1hjXXXXXXp51pisuc1104q5XXXXXXe.apps.googleusercontent.com'
        });
        LoginManager.logOut();
    }, [])


    const _googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('Google Login', JSON.stringify(userInfo.user.email))
            navigation.dispatch(AppStack);

            // const data = {
            //     // google_id: userInfo.user.id,
            //     email: userInfo.user.email,
            //     user_name: userInfo.user.name,
            //     flag: "G",
            //     fcm_token: globals.fcmToken
            // }
            // this.setState({ isloading: true })
            // API.userLogin(this.onGoogleLoginResponse, data, true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert(error)
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert(error)
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert(error)
                // play services not available or outdated
            } else {
                // some other error happened
                alert(error)
            }
        }
    };

    const facebookHandler = () => {
        LoginManager.logInWithPermissions(["email", "public_profile"]).then(
            (result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    console.log(
                        "Login success with permissions: " +
                        result.grantedPermissions.toString()
                    );
                    AccessToken.getCurrentAccessToken().then((data) => {
                        const { accessToken } = data
                        console.log('accessToken', accessToken)

                        fetch('https://graph.facebook.com/v2.5/me?fields=email,name&access_token=' + accessToken)
                            .then((response) => response.json())
                            .then((json) => {
                                alert('DATA--->', json.email)
                                if (json.email == undefined) {
                                    return alert("Can't get Your Email, please check your privacy Setting")
                                } else {
                                    // const data = {
                                    //     flag: "F",
                                    //     email: json.email,
                                    //     user_name: json.name,
                                    //     fcm_token: globals.fcmToken
                                    // }
                                    // console.log(data)
                                    // this.setState({ isloading: true })
                                    // API.userLogin(this.onFbLoginResponse, data, true);
                                    navigation.dispatch(AppStack);

                                }
                            }
                            )
                            .catch((e) => {
                             alert('ERROR GETTING DATA FROM FACEBOOK', JSON.stringify(e))
                            })
                    }
                    )
                    const infoRequest = new GraphRequest('/me', {
                        parameters: {
                            fields: {
                                string: 'first_name,last_name'
                            }
                        }
                    }, (error, result) => {
                        if (error) {
                            alert('Error fetching data: ' + error.toString());
                        } else {
                            console.log('Success fetching data: ' + JSON.stringify(result));
                        }
                    });
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            function (error) {
                alert("Login fail with error: " + error);
            }
        );
    }

    return (
        <TouchableOpacity style={styles.TouchableView}
            activeOpacity={0.8}
            onPress={buttonText == "Sign up With Google" || buttonText == "Sign in With Google" ? _googleSignIn : facebookHandler}
        >
            <Image
                style={styles.image}
                source={imageSrc}
            />
            <Text style={styles.buttonText} >{buttonText}</Text>
        </TouchableOpacity>
    )
}
export default FbGleBtnComp;