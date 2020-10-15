import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import styles from './styles'
const ButtonComp = ({
    onPressButton,
    buttonText,
    from,
    btnStyle,
    btnTextStyle,
    disabled
}) => {
    return (
        <TouchableOpacity style={[styles.TouchableView,
        {
            backgroundColor: from == "fromSignup" || from == "fromAuthSignIn" ? colors.BlueColor : colors.BlackColor,
            marginLeft: buttonText == "Sign in " ? 0 : 10
        },
            btnStyle]}
            activeOpacity={0.8}
            onPress={onPressButton}
            disabled={disabled}
        >
            <Text style={[{
                fontSize: 20,
                color: "white",
                fontFamily: font.Bold
            },
                btnTextStyle]} >{buttonText}</Text>
        </TouchableOpacity>
    )
}
export default ButtonComp;