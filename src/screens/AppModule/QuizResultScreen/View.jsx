import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import { color } from 'react-native-reanimated';

const QuizResultScreen = ({
    navigation
}) => {
    const goToNextChapter = () => {
        navigation.navigate("Course")
    }
    const goToHomeScreen = () => {
        navigation.navigate("Home")
    }
    return (
        <View style={styles.viewContainer} >
            <View style={{
                height: 50,
                backgroundColor: colors.BlueColor,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10
            }} >
                <TouchableOpacity onPress={() => navigation.goBack()}  >
                    <Image style={{
                        width: 20,
                        height: 20,
                        resizeMode: "contain"
                    }}
                        source={images.backIcon}
                    />
                </TouchableOpacity>
            </View>
            <ImageBackground style={{
                width: 320,
                height: 160,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 15
            }}
                borderRadius={5}
                source={images.QuizResultScreen.box_backgroundImage}
            >
                <Text style={{
                    fontSize: 30,
                    fontFamily: font.Bold,
                    color: "white"
                }} >RESULT</Text>
            </ImageBackground>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                alignSelf: "center"
            }} >
                <View style={{
                    width: 100,
                    height: 50,
                    backgroundColor: "#f7f7f7",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 2,
                    borderRadius: 2,
                }} >
                    <Text style={{
                        fontSize: 16,
                        color: colors.RedColor,
                        fontFamily: font.Bold
                    }} >2</Text>
                    <Text>Wrong Answer</Text>
                </View>
                <View style={{
                    width: 100,
                    height: 50,
                    backgroundColor: "#f7f7f7",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 2,
                    borderRadius: 2,
                    marginHorizontal: 10
                }} >
                    <Text style={{
                        fontSize: 16,
                        color: colors.GreenColor,
                        fontFamily: font.Bold
                    }} >2</Text>
                    <Text>Right Answer</Text>
                </View>
                <View style={{
                    width: 100,
                    height: 50,
                    backgroundColor: "#f7f7f7",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 2,
                    borderRadius: 2
                }} >
                    <Text style={{
                        fontSize: 16,
                        color: "purple",
                        fontFamily: font.Bold
                    }} >2</Text>
                    <Text>TOtal</Text>
                </View>
            </View>
            <Image
                style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                    marginTop: 20
                }}
                source={images.QuizResultScreen.shareImage}
            />
            <View style={{
                marginTop: 10,
                position: "absolute",
                bottom: 20,
                alignSelf: "center"
            }} >
                <TouchableOpacity style={{
                    backgroundColor: colors.BlueColor,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 320,
                    flexDirection: "row",
                    borderRadius: 30,
                    height: 45
                }} activeOpacity={0.8} onPress={goToNextChapter} >
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: font.Bold
                    }} >Next Chapter</Text>
                    <Image
                        source={images.QuizResultScreen.nextImage}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                            marginLeft: 15,
                            marginTop: 2
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: colors.DarkGrayColor,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 320,
                    flexDirection: "row",
                    borderRadius: 30,
                    height: 45,
                    marginTop: 10,
                }} activeOpacity={0.8} onPress={goToHomeScreen} >
                    <Image
                        source={images.backIcon}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                            marginTop: 2
                        }}
                    />
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: font.Bold,
                        marginLeft: 15,
                    }} >Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default QuizResultScreen;