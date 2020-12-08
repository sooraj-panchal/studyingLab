import React from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import styles from "./styles";
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from "../../../component/ButtonComp";

const SubmitRequestFormScreen = ({
    navigation
}) => {
    const goToHome=()=>{
        navigation.navigate("Home")
    }
    return (
        <View style={styles.viewContainer} >
            <View style={{
                alignItems: "center"
            }} >
                <Image
                    style={{
                        width: 300,
                        height: 300,
                        resizeMode: "contain",
                        marginTop: 80
                    }}
                    source={images.SubmitRequestFormScreen.attachImage}
                />
                <Text style={{
                    marginTop: 10,
                    fontSize: 22,
                    // fontFamily: font.Regular,
                    textAlign: "center",
                    width: 300
                }} >Thank you for submitting the request Admin will take care.</Text>
                <View style={{
                    marginTop: 50,
                    alignSelf: "center"
                }} >
                    <ButtonComp
                        onPressButton={goToHome}
                        buttonText="Back to home"
                        from="fromSignup"
                        btnStyle={{
                            width: 180
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
export default SubmitRequestFormScreen;