import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map'
const SplashScreen = ({

}) => {
    return (
        <View style={styles.viewContainer} >
            <StatusBar hidden={true} />
            <Image
                style={{
                    width: 300,
                    height: 300,
                    resizeMode: "contain"
                }}
                source={images.SpashScreen.logoImage}
            />
        </View>
    )
}

export default SplashScreen;