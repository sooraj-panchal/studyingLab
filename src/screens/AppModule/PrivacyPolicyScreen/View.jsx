import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, Dimensions } from "react-native";
import styles from "./styles";
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from "../../../component/ButtonComp";
import { API } from "../../../utils/api";
import * as globals from "../../../utils/globals";
import LoadingComp from "../../../component/LoadingComp";
import HeaderComp from "../../../component/HeaderComp";
import HTML from 'react-native-render-html';

const PrivacyPolicyScreen = ({
    navigation
}) => {
    const [description, setDescription] = useState("")
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        getPrivacyPolicyData()
    }, [])

    const getPrivacyPolicyData = () => {
        let formdata = new FormData();
        formdata.append('auth_token', globals.authToken);
        setIsLoading(true)
        API.privacy_policy(onGetPrivacyPolicyResponse, formdata, true)
    }
    const onGetPrivacyPolicyResponse = {
        success: response => {
            console.log("onGetPrivacyPolicyResponse====>", response)
            setDescription(response.data.description)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }
    return (
        <View style={styles.viewContainer} >
            <LoadingComp animating={loading} />
            <HeaderComp headerText="Privacy Policy" navigation={navigation} />
            <View style={{
                alignSelf: "center",
                // width: globals.mpw5 * 64,// 320,
                paddingHorizontal: 15
            }} >
                <HTML html={description} imagesMaxWidth={
                    Dimensions.get('window').width
                }
                />
            </View>
        </View>
    )
}
export default PrivacyPolicyScreen;