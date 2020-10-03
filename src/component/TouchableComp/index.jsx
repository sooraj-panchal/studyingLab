import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';
import styles from './styles';

const TouchableComp = ({
    TouchableForEmail,
    text1,
    text2,
    onPressTouch
}) => {
    if (TouchableForEmail)
        return (
            <TouchableOpacity onPress={onPressTouch} activeOpacity={0.8} style={styles.emailView} >
                <Text style={styles.text1} >{text1}</Text>
                <Text style={styles.text2s} >{text2}</Text>
            </TouchableOpacity>
        )
    return (
        <TouchableOpacity style={styles.touchableView} onPress={onPressTouch} activeOpacity={0.8} >
            <Text style={styles.text1} >{text1}</Text>
            <Image
                style={styles.openImage}
                source={images.ProfileScreen.openImage}
            />
        </TouchableOpacity>
    )
}
export default TouchableComp;