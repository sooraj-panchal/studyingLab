import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles';
import * as images from '../../assets/images/map';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import { AppStack } from '../../navigation/navActions';
import * as globals from '../../utils/globals'
import LoadingComp from '../LoadingComp';
import { API } from '../../utils/api';
import AsyncStorage from '@react-native-community/async-storage';
import ModalComp from '../ModalComp';

const FbGleBtnComp = ({
    navigation,
    onPressBtn,
    buttonText,
    imageSrc
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [toggleModal, setIsToggleModal] = useState(false);
    const [getClassData, setIsGetClassData] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

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
            // navigation.dispatch(AppStack);

            // const data = {
            //     // google_id: userInfo.user.id,
            //     email: userInfo.user.email,
            //     user_name: userInfo.user.name,
            //     flag: "G",
            //     fcm_token: globals.fcmToken
            // }
            // this.setState({ isloading: true })
            // API.userLogin(this.onGoogleLoginResponse, data, true);
            let formdata = new FormData();
            formdata.append('name', userInfo.user.name);
            formdata.append('email', userInfo.user.email);
            formdata.append('auth_token', globals.authToken);
            formdata.append('flag', "G");
            formdata.append('fcm_token', "");
            setIsLoading(true)
            API.student_Register(onGoogleRegisterResponse, formdata, true)
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

    const toggleModalHandler = () => {
        setIsToggleModal(!toggleModal);
    };

    const onGoogleRegisterResponse = {
        success: response => {
            console.log("onGoogleRegisterResponse====>", response)
            setIsLoading(false)
            AsyncStorage.setItem("name", response.data.name)
            AsyncStorage.setItem("email", response.data.email)
            if (response.data.div_id == "0" || response.data.div_id == null) {
                AsyncStorage.setItem("tokenForRegister", response.data.token)
                toggleModalHandler()
                setIsGetClassData(true)
            } else {
                AsyncStorage.setItem("name", response.data.name)
                AsyncStorage.setItem("email", response.data.email)

                AsyncStorage.setItem("token", response.data.token)
                globals.student_Token = response.data.token
                AsyncStorage.setItem("YourGrade", response.data.div_name)
                AsyncStorage.setItem("div_id", response.data.div_id)
                navigation.dispatch(AppStack)
            }
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

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
                                console.log("json", json)

                                if (json.email == undefined) {
                                    return alert("Can't get Your Email, please check your privacy Setting")
                                } else {
                                    let formdata = new FormData();
                                    formdata.append('name', json.name);
                                    formdata.append('email', json.email);
                                    formdata.append('auth_token', globals.authToken);
                                    formdata.append('flag', "F");
                                    formdata.append('fcm_token', "");
                                    setIsLoading(true)
                                    API.student_Register(onGoogleRegisterResponse, formdata, true)
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
                                string: 'id, name, email, first_name, last_name, gender'
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
        <View>
            <LoadingComp animating={isLoading} />
            <ModalComp
                toggleModal={toggleModal}
                toggleModalHandler={toggleModalHandler}
                getClassData={getClassData}
                navigation={navigation}
                from="Login"
            />
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
        </View>
    )
}
export default FbGleBtnComp;