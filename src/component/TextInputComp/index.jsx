import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';
import Icon from 'react-native-vector-icons/AntDesign'

const TextInputComp = ({
    placeholder,
    TextInputForPassword,
    from,
    textInputStyle,
    value,
    onChangeText,
    onBlur,
    autoCompleteType,
    keyboardType,
    touched,
    errors
}) => {
    const [isVisibleEyeImage, setIsVisibleEyeImage] = useState(false)

    if (TextInputForPassword)
        return (
            <View style={{
                alignSelf: "center"
            }} >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <View style={[{
                        backgroundColor: "white",
                        borderWidth: 1,
                        width: 300,
                        marginTop: 15,
                        height: 40,
                        borderRadius: 20,
                        borderColor: colors.LightGrayColor,
                    }, textInputStyle]} >
                        <TextInput
                            placeholder={placeholder}
                            style={{
                                maxWidth: 230,
                                paddingLeft: 20,
                                fontSize: 15,
                                top: 3,

                            }}
                            value={value}
                            onChangeText={onChangeText}
                            onBlur={onBlur}
                            autoCompleteType="password"
                            secureTextEntry={isVisibleEyeImage ? false : true}
                        />
                    </View>
                    <TouchableOpacity onPress={() => {
                        setIsVisibleEyeImage(!isVisibleEyeImage)
                    }} style={{
                        position: "absolute",
                        right: 15,
                        bottom: 8
                    }} >
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: "contain",

                            }}
                            source={isVisibleEyeImage ? images.SignupScreen.visibleimage : images.SignupScreen.invisibleImage}
                        />
                    </TouchableOpacity>
                </View>
                {touched && errors &&
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                        marginLeft: 5
                    }} >
                        <Icon
                            color="red"
                            name="exclamationcircle" size={12}
                        />
                        <Text style={{ fontSize: 11, marginLeft: 5, color: 'red' }}>{errors}</Text>
                    </View>
                }
            </View>

        )
    return (
        <View style={{
            alignSelf: "center"
        }} >
            <TextInput
                placeholder={placeholder}
                style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    width: 300,
                    marginTop: from == "forgotPassword" ? 0 : 15,
                    height: 40,
                    paddingLeft: 20,
                    borderRadius: 20,
                    borderColor: colors.LightGrayColor,
                    fontSize: 15,
                    top: 3
                }}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                autoCompleteType={autoCompleteType}
                keyboardType={keyboardType}
            />
            {touched && errors &&
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    marginLeft: 5,
                }} >
                    <Icon
                        color="red"
                        name="exclamationcircle" size={12}
                    />
                    <Text style={{ fontSize: 11, marginLeft: 5, color: 'red' }}>{errors}</Text>
                </View>
            }
        </View>

    )
}
export default TextInputComp;