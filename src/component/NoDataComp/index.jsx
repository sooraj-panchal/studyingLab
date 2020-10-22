import React from 'react';
import { Image, View, Text } from 'react-native';
import * as images from '../../assets/images/map'
import * as colors from '../../assets/colors'
import * as font from '../../assets/fonts/fonts'

import ButtonComp from '../ButtonComp';
const NoDataComp = ({
    onPressButton,
    from,
    imageStyle,
    viewContainerStyle,
    textStyle,
    text
}) => {
    return (
        <View style={[{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#f7f7f7",
            paddingTop: 50
        }, viewContainerStyle]} >
            <Image
                style={[{
                    width: 300,
                    height: 300,
                    resizeMode: "contain"
                    // aspectRatio:1
                },imageStyle]}
                source={{ uri: "https://mednear.com/assets/web/images/icons/empty-product.png" }}
            />
            <Text style={[{
                fontSize: 35,
                fontFamily: font.Regular,
                color: colors.BlackColor
            }, textStyle]} >{text}</Text>
            {/* <ButtonComp
                buttonText=""
                btnTextStyle={{
                    fontFamily: font.Regular,
                    color: colors.DarkGrayColor,
                    fontSize: 16
                }}
                btnStyle={{
                    width: "75%",
                    borderRadius: 4,
                    marginTop: 0,s
                    backgroundColor: "#e3e3e3"
                }}
                onPressButton={onPressButton}
            /> */}
        </View>
    )
}
export default NoDataComp;