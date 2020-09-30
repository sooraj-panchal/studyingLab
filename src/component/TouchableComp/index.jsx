import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';

const TouchableComp = ({
    TouchableForEmail,
    text1,
    text2,
    onPressTouch
}) => {

    if (TouchableForEmail)
        return (
            <TouchableOpacity onPress={onPressTouch} activeOpacity={0.8} style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                justifyContent: "center",
                backgroundColor: "white",
                elevation: 3,
                marginTop: 10,
                height: 80,
                borderRadius: 10
            }} >
                <Text style={{
                    fontSize: 20,
                    fontFamily: font.Medium
                }} >{text1}</Text>
                <Text style={{
                    fontSize: 16,
                    fontFamily: font.Regular
                }} >{text2}</Text>
            </TouchableOpacity>
        )
    return (
        <TouchableOpacity style={{
            marginHorizontal: 10,
            justifyContent: "space-between",
            backgroundColor: "white",
            elevation: 3,
            marginTop: 10,
            height: 60,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15
        }} onPress={onPressTouch} activeOpacity={0.8} >
            <Text style={{
                fontSize: 20,
                fontFamily: font.Medium
            }} >{text1}</Text>
            <Image
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain"
                }}
                source={images.ProfileScreen.openImage}
            />
        </TouchableOpacity>
    )
}
export default TouchableComp;