import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, Vibration } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
const TouchableComp = ({
    TouchableForEmail,
    text1,
    text2,
    onPressTouch,
    from,
    touchableStyle
}) => {

    if (from == "Grade")
        return (
            <TouchableOpacity onPress={onPressTouch} activeOpacity={0.8} style={[styles.emailView, {
                flexDirection: "row",
                alignItems: "center",
                height: 50,
                justifyContent: "space-between",
                paddingHorizontal: 15
            }]} >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <Text style={styles.text1} >{text1} - </Text>
                    <Text style={{
                        // fontFamily: font.Bold,
                        fontSize: 16,
                        color: colors.BlueColor
                    }} >( {text2} )</Text>
                </View>
                <View>
                    <Icon
                        name="mode-edit"
                        size={25}
                        color={colors.GrayColor}
                    />
                </View>
            </TouchableOpacity>
        )

    if (from == "selectChapter")
        return (
            <TouchableOpacity style={[styles.touchableView, touchableStyle]} onPress={onPressTouch} activeOpacity={0.8} >
                <Text style={styles.text1} >{text1}</Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center"
                }} >
                <Text style={{
                    marginRight:10,
                    fontSize:14,
                    color:colors.GreenColor
                }}>{text2}</Text>
                <Image
                    style={styles.openImage}
                    source={images.ProfileScreen.openImage}
                />
                </View>
            </TouchableOpacity>
        )

    if (TouchableForEmail)
        return (
            <TouchableOpacity onPress={onPressTouch} activeOpacity={0.8} style={styles.emailView} >
                <Text style={styles.text1} >{text1}</Text>
                <Text style={styles.text2s} >{text2}</Text>
            </TouchableOpacity>
        )
    return (
        <TouchableOpacity style={[styles.touchableView, touchableStyle]} onPress={onPressTouch} activeOpacity={0.8} >
            <Text style={styles.text1} >{text1}</Text>
            <Image
                style={styles.openImage}
                source={images.ProfileScreen.openImage}
            />
        </TouchableOpacity>
    )
}
export default TouchableComp;