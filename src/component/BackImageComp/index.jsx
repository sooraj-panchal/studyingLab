import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as images from '../../assets/images/map';
import styles from "./styles";

const BackImageComp = ({
    onPressBackImage
}) => {
    return (
        <TouchableOpacity onPress={onPressBackImage} >
            <Image
                style={styles.image}
                source={images.backIcon}
            />
        </TouchableOpacity>
    )
}
export default BackImageComp;