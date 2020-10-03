import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as images from '../../assets/images/map';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import styles from './styles';

const HeaderComp = ({
    navigation,
    headerText
}) => {
    return (
        <View style={styles.HeaderViewContainer} >
            <TouchableOpacity onPress={() => navigation.goBack()}  >
                <Image style={styles.backIcon}
                    source={images.backIcon}
                />
            </TouchableOpacity>
            <Text style={styles.headerText} >{headerText}</Text>
        </View>
    )
}

export default HeaderComp;