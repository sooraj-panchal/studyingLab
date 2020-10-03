import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';
import Carousel from 'react-native-snap-carousel';
import HeaderComp from '../../../component/HeaderComp';

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
        return (
            <Image
                style={styles.rddImage}
                source={
                    index <= quizindex
                        ? images.StartQuizScreen.blue_dotImage :
                        images.StartQuizScreen.white_dotImage
                }
            />
        )
    }

    const _renderQuizData = ({ item, index }) => {
        return (
            <View style={styles.rqdContainer} >
                <View style={styles.questionContainer} >
                    <View style={styles.questionminiContainer} >
                        <Text style={styles.questionConntText} >{index + 1}.</Text>
                        <Text style={styles.questionText} >If the parametere and area of circle are equal then radius of a circle will be?</Text>
                    </View>
                </View>
                <View style={styles.btnMainContainer} >
                    <View style={styles.questionbtn1} >
                        <TouchableOpacity style={[styles.touchable, {
                            backgroundColor: index == 0 ? "#bf4193" : colors.GreenColor,
                        }]} >
                            <Text style={styles.questionBtnText} >2 Units</Text>
                        </TouchableOpacity>
                        {
                            index == 0
                                ? null :
                                <View style={styles.rightImageContainer} >
                                    <Image style={styles.rightImage}
                                        source={images.StartQuizScreen.rightImage}
                                    />
                                </View>
                        }
                    </View>
                    <View style={styles.questionbtn1} >
                        <TouchableOpacity style={[styles.touchable, {
                            backgroundColor: index == 0 ? "#bf4193" : colors.RedColor,
                        }]} >
                            <Text style={styles.questionBtnText} >6 Units</Text>
                        </TouchableOpacity>
                        {
                            index == 0
                                ? null :
                                <View style={styles.rightImageContainer} >
                                    <Image style={styles.rightImage}
                                        source={images.StartQuizScreen.wrongImage}
                                    />
                                </View>
                        }
                    </View>
                </View>
                {
                    index == quizData.length - 1 &&
                    <View style={styles.showResultbtnContainer} >
                        <ButtonComp
                            onPressButton={goToQuizResultScreen}
                            buttonText="Show Result"
                            from="fromSignup"
                            btnStyle={styles.showResultbtnStyle}
                        />
                    </View>
                }
            </View>
        )
    }
    // const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    //     // console.log("Visible items are", viewableItems);
    //     // console.log("Changed in this iteration", changed);
    //     setQuizIndex(viewableItems[0].index + 1)

    // }, []);
    return (
        <View style={styles.viewContainer} >
            <HeaderComp
                headerText="Course 1"
                navigation={navigation}
            />
            <View style={styles.paginationCount} >
                <Text style={styles.questionPaginationText} >Questions: {quizindex + 1}/{quizData.length}</Text>
                <View>
                    <FlatList
                        data={dotsData}
                        renderItem={_renderDotsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={styles.listQuestionContainer} >
                {/* <FlatList contentContainerStyle={{
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
                /> */}
                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={quizData}
                    renderItem={_renderQuizData}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width}
                    // viewabilityConfig={{
                    //     itemVisiblePercentThreshold: 50
                    // }}
                    // onViewableItemsChanged={onViewableItemsChanged}
                    onSnapToItem={(slideIndex) => {
                        setQuizIndex(slideIndex)
                    }}

                />
            </View>
        </View>
    )
}
export default StartQuizScreen;