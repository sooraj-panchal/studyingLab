import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './styles';

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
    errors,
    editable
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
                    <View style={[styles.textInputContainer, textInputStyle]} >
                        <TextInput
                            placeholder={placeholder}
                            style={styles.textInputStyle}
                            value={value}
                            onChangeText={onChangeText}
                            onBlur={onBlur}
                            autoCompleteType="password"
                            secureTextEntry={isVisibleEyeImage ? false : true}
                        />
                    </View>
                    <TouchableOpacity onPress={() => {
                        setIsVisibleEyeImage(!isVisibleEyeImage)
                    }} style={styles.eyeIconContainer} >
                        <Image
                            style={styles.eyeIcon}
                            source={isVisibleEyeImage ? images.SignupScreen.visibleimage : images.SignupScreen.invisibleImage}
                        />
                    </TouchableOpacity>
                </View>
                {touched && errors &&
                    <View style={styles.errorView} >
                        <Icon
                            color="red"
                            name="exclamationcircle" size={12}
                        />
                        <Text style={styles.errorText}>{errors}</Text>
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
                style={[styles.textInputForCommon,{
                    marginTop: from == "forgotPassword" || from == "Edit Profile" ? 0 : 15,
                }]}
                editable={editable}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                autoCompleteType={autoCompleteType}
                keyboardType={keyboardType}
            />
            {touched && errors &&
                <View style={styles.errorView} >
                    <Icon
                        color="red"
                        name="exclamationcircle" size={12}
                    />
                    <Text style={styles.errorText}>{errors}</Text>
                </View>
            }
        </View>

    )
}
export default TextInputComp;