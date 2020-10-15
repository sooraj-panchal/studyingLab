import React from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Text,
    Platform,
    ActivityIndicator
} from 'react-native';
import * as globals from '../../utils/globals';

import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';


const LoadingComp = ({
    animating,
    withoutModal,
    style
}) => {
    if (withoutModal)
        return (
            <View style={[{
                flex: 0.8,
                justifyContent: "center",
                backgroundColor: "white",
            },style]} >
                <ActivityIndicator
                    animating={animating}
                    color={colors.BlueColor}
                    size={40}
                />
            </View>
        )

    return (
        <Modal transparent={true} visible={animating}>
            <View style={styles.modalView}>
                {/* {Platform.OS == "android"
                    ? ( */}
                <View style={styles.AnroidActivityIndicatorWrapper}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }} >
                        <ActivityIndicator
                            animating={animating}
                            style={styles.indicator}
                            color={colors.BlueColor} size={35}
                        />
                        <Text style={styles.text1} >Loading...</Text>
                    </View>
                </View>
                {/* ) */}
                {/* : (
                        <View style={styles.IOSActivityIndicatorWrapper} >
                            <UIActivityIndicator animating={props.animating}
                                color='#298742' size={30}
                            />
                        </View>
                    ) */}
                {/* } */}
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent"
    },
    modalView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#00000080"
    },
    AnroidActivityIndicatorWrapper: {
        justifyContent: "center",
        width: globals.screenWidth * 0.80,  //100,
        height: globals.screenHeight * 0.10, //100,
        borderRadius: 2,
        backgroundColor: "white"
    },
    indicator: {
        position: "absolute",
        left: globals.screenWidth * 0.0833,//30
    },
    text1: {
        left: globals.screenWidth * 0.2778, ///100,
        fontSize: globals.font_20,//20,
        color: colors.BlueColor,
        fontFamily: font.Regular
    },
    IOSActivityIndicatorWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: globals.screenWidth * 0.2778,  //100,
        height: globals.screenHeight * 0.1355, //100,
        borderRadius: 10,
        backgroundColor: "white"
    }
});

export default LoadingComp;