import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as images from '../../assets/images/map';

const BackImageComp = ({
    onPressBackImage
}) => {
    return (
        <TouchableOpacity onPress={onPressBackImage} >
            <Image
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginTop: 10,
                    marginLeft: 10
                }}
                source={images.backIcon}
            />
        </TouchableOpacity>
    )
}
export default BackImageComp;