import React from 'react';
import { Image, View } from 'react-native';
import * as images from '../../assets/images/map'
import * as colors from '../../assets/colors'
import * as font from '../../assets/fonts/fonts'

import ButtonComp from '../ButtonComp';
const NoNeworkComp = ({
    onPressButton,
    from
}) => {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#f7f7f7",
            paddingTop: from == "Profile" ? 100 : null,
        }} >
            <Image
                style={{
                    width: 300,
                    height: 300,
                    resizeMode: "contain"
                    // aspectRatio:1
                }}
                source={images.EmptyView.noNetworkImage}
            />
            <ButtonComp
                buttonText="TRY AGAIN"
                btnTextStyle={{
                    fontFamily: font.Regular,
                    color: colors.DarkGrayColor,
                    fontSize: 16
                }}
                btnStyle={{
                    width: "75%",
                    borderRadius: 4,
                    marginTop: 0,
                    backgroundColor: "#e3e3e3"
                }}
                onPressButton={onPressButton}
            />
        </View>
    )
}
export default NoNeworkComp;