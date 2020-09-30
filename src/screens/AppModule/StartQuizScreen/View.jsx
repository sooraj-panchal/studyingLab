import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';

const dotsDatas = [
    {
        "id": "1",
    },
    {
        "id": "2"
    },
    {
        "id": "3"
    },
    {
        "id": "4"
    },
    {
        "id": "5"
    },
    {
        "id": "6"
    },
    {
        "id": "7"
    },
    {
        "id": "8"
    },
    {
        "id": "9"
    },
    {
        "id": "10"
    }
]

const quizDatas = [
    {
        "id": "1",
    },
    {
        "id": "2"
    },
    {
        "id": "3"
    },
    {
        "id": "4"
    },
    {
        "id": "5"
    },
    {
        "id": "6"
    },
    {
        "id": "7"
    },
    {
        "id": "8"
    },
    {
        "id": "9"
    },
    {
        "id": "10"
    }
]

const StartQuizScreen = ({
    navigation
}) => {
    const goToQuizResultScreen = () => {
        navigation.navigate("QuizResult")
    }
    const [dotsData, setDotsData] = useState(dotsDatas);
    const [quizData, setQuizData] = useState(quizDatas);
    const [quizindex, setQuizIndex] = useState(0)

    useEffect(() => {
        setDotsData(dotsData)
        setQuizData(quizData)
    }, [])

    const _renderDotsData = ({ item, index }) => {
        console.log(index + 1 == quizindex)
        return (
            <Image
                style={{
                    width: 10,
                    height: 10,
                    marginHorizontal: 3,
                    marginTop: 5
                }}
                source={
                    index < quizindex
                        ? images.StartQuizScreen.blue_dotImage :
                        images.StartQuizScreen.white_dotImage
                }
            />
        )
    }

    const _renderQuizData = ({ item, index }) => {
        return (
            <View style={{
                marginHorizontal: 20,

            }} >
                <View style={{
                    backgroundColor: "#f7f7f7",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 320,
                    paddingVertical: 20,
                    elevation: 4,
                    borderRadius: 5,
                }} >
                    <View style={{
                        flexDirection: "row",
                        marginLeft: 20
                    }} >
                        <Text style={{
                            fontSize: 20,
                            fontFamily: font.Medium,
                            color: colors.BlackColor
                        }} >{index + 1}.</Text>
                        <Text style={{
                            fontSize: 16,
                            color: colors.BlackColor,
                            marginTop: 2
                        }} >If the parametere and area of circle are equal then radius of a circle will be?</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 20
                }} >
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                    }} >
                        <TouchableOpacity style={{
                            backgroundColor: index == 0 ? "#bf4193" : colors.GreenColor,
                            // backgroundColor: colors.GreenColor,
                            width: 320,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5
                        }} >
                            <Text style={{
                                fontSize: 20,
                                color: "white",
                                fontFamily: font.Regular
                            }} >2 Units</Text>
                        </TouchableOpacity>
                        {
                            index == 0
                            ? null :
                            <View style={{
                                position: "absolute",
                                left: 15
                            }} >
                                <Image style={{
                                    width: 25,
                                    height: 25,
                                    resizeMode: "contain"
                                }}
                                    source={images.StartQuizScreen.rightImage}
                                />
                            </View>
                        }
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                    }}  >
                        <TouchableOpacity style={{
                            // backgroundColor: "#bf4193",
                            backgroundColor: index == 0 ? "#bf4193" : colors.RedColor,
                            width: 320,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5
                        }} >
                            <Text style={{
                                fontSize: 20,
                                color: "white",
                                fontFamily: font.Regular
                            }} >6 Units</Text>
                        </TouchableOpacity>
                        {
                            index == 0
                            ? null :
                            <View style={{
                                position: "absolute",
                                left: 15
                            }} >
                                <Image style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: "contain"
                                }}
                                    source={images.StartQuizScreen.wrongImage}
                                />
                            </View>
                        }
                    </View>
                </View>
                {
                    index == quizData.length - 1 &&
                    <View style={{
                        position: "absolute",
                        alignSelf: "center",
                        bottom: 30
                    }} >
                        <ButtonComp
                            onPressButton={goToQuizResultScreen}
                            buttonText="Show Result"
                            from="fromSignup"
                            btnStyle={{
                                width: 250
                            }}
                        />
                    </View>
                }
            </View>
        )
    }
    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        // console.log("Visible items are", viewableItems);
        // console.log("Changed in this iteration", changed);
        setQuizIndex(viewableItems[0].index + 1)

    }, []);
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
                <Text style={{
                    fontSize: 18,
                    color: "white",
                    fontFamily: font.Regular,
                    marginLeft: 15
                }} >Maths</Text>
            </View>
            <View style={{
                alignItems: "center",
                marginTop: 50,
                height: 50
            }} >
                <Text style={{
                    fontSize: 16,
                    fontFamily: font.Medium,
                    color: colors.BlackColor
                }} >Questions: {quizindex}/{quizData.length}</Text>
                <View>
                    <FlatList
                        data={dotsData}
                        renderItem={_renderDotsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={{
                marginTop: 20,
                flex: 1
            }} >
                <FlatList contentContainerStyle={{
                    paddingBottom: 20,
                }}
                    data={quizData}
                    renderItem={_renderQuizData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={{
                        itemVisiblePercentThreshold: 50
                    }}
                />
            </View>
        </View>
    )
}
export default StartQuizScreen;