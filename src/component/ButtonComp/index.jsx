import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';

const ButtonComp = ({
    onPressButton,
    buttonText,
    from,
    btnStyle
}) => {
    return (
        <TouchableOpacity style={[{
            width: 150,
            height: 45,
            borderRadius: 30,
            backgroundColor: from == "fromSignup" || from == "fromAuthSignIn" ? colors.BlueColor : colors.BlackColor,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: buttonText == "Sign in " ? 0 : 10
        },btnStyle]}
            activeOpacity={0.8}
            onPress={onPressButton}
        >
            <Text style={{
                fontSize: 20,
                color: "white",
                fontFamily: font.Bold
            }} >{buttonText}</Text>
        </TouchableOpacity>
    )
}
export default ButtonComp;