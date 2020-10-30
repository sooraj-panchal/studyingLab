import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import { set } from 'react-native-reanimated';
import ButtonComp from '../../../component/ButtonComp';
import Carousel from 'react-native-snap-carousel';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import HTML from 'react-native-render-html';

const attendCourseDatas = [
    {
        "id": "1"
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
    }
]

const AttendCourseScreen = ({
    navigation,
    route
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [attendCourseData, setAttendCourseData] = useState([]);
    const [index, setIndex] = useState(0)
    const [quiz, setQuiz] = useState({})
    const [quizStart, setQuizStart] = useState("")
    useEffect(() => {
        // setAttendCourseData(attendCourseData)
        getCourseDetailsData()
    }, [])

    const getCourseDetailsData = () => {
        let formdata = new FormData();
        formdata.append('chapter_id', route.params.chapter_id);
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.course_detail(onGetCourseDetailsResponse, formdata, true)
    }

    const onGetCourseDetailsResponse = {
        success: response => {
            console.log("onGetCourseDetailsResponse====>", response)
            setAttendCourseData(response.data.course_data)
            setQuiz(response.data.quiz)
            setQuizStart(response.data.quiz_flag)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }


    const goToStartQuiz = () => {
        navigation.navigate("StartQuiz", {
            quiz: quiz
        })
    }

    const _renderAttendCourseData = ({ item, index }) => {
        // console.log(index)
        return (
            <View style={styles.racdContainer} >
                <ScrollView contentContainerStyle={{
                    paddingBottom: globals.mph5 * 4,// 20
                }} >
                    {
                        index == 0
                        &&
                        <>
                            <Image
                                style={styles.courseImage}

                                source={images.CourseDetailsScreen.image1Image}
                            />
                            <View style={styles.chapterContainer} >
                                <Text style={styles.chapterText} >Chapter 1 - Maths</Text>
                            </View>
                        </>
                    }
                    <View style={{
                        alignSelf: "center",
                        width: globals.mpw5 * 64,// 320,
                    }} >
                        <HTML html={item.description} imagesMaxWidth={
                            Dimensions.get('window').width
                        } />
                    </View>
                    {/* <Text style={styles.longText} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                asfa sfasfasfsaf
                    </Text>
                <Text style={{
                    fontSize: 15,
                    color: colors.GrayColor,
                    fontFamily: font.Medium,
                    marginHorizontal: 10,
                    marginTop: 15,
                    alignSelf: "center"
                }} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                    sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                    asfa sfasfasfsaf sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                    </Text> */}

                    {
                        quizStart == "true" &&
                            index == attendCourseData.length - 1 && quiz !== null ?
                            // quiz.percentage !== "" ? null :
                            <View style={styles.btnContainer} >
                                <ButtonComp
                                    onPressButton={goToStartQuiz}
                                    buttonText="Start Quiz"
                                    from="fromSignup"
                                    btnStyle={styles.btnnStyle}
                                />
                            </View>
                            : null
                    }
                </ScrollView>
            </View>
        )
    }

    // const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    //     // console.log("Visible items are", viewableItems);
    //     // console.log("Changed in this iteration", changed);
    //     setIndex(viewableItems[0].index)
    // }, []);

    return (
        <View style={[styles.viewContainer, {
            backgroundColor: isLoading == true ? "white" : colors.BlueColor
        }]} >
            {
                isLoading == true
                    ?
                    <LoadingComp animating={isLoading} />
                    :
                    <>
                        <View style={styles.backgroundContainer} >
                            <TouchableOpacity onPress={() => navigation.goBack()}  >
                                <Image style={styles.backIcon}
                                    source={images.backIcon}
                                />
                            </TouchableOpacity>
                            <Text style={styles.paginationCountText} >{index + 1}/{attendCourseData.length}</Text>
                            <View
                                style={styles.emptyView}
                            />
                        </View>
                        {/* <FlatList
                data={attendCourseData}
                renderItem={_renderAttendCourseData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                }}
            /> */}
                        <Carousel
                            // ref={(c) => { this._carousel = c; }}
                            data={attendCourseData}
                            renderItem={_renderAttendCourseData}
                            sliderWidth={Dimensions.get("window").width}
                            itemWidth={Dimensions.get("window").width}
                            // viewabilityConfig={{
                            //     itemVisiblePercentThreshold: 50
                            // }}
                            // onViewableItemsChanged={onViewableItemsChanged}
                            onSnapToItem={(slideIndex) => {
                                setIndex(slideIndex)
                            }}
                        />
                    </>
            }

        </View>
    )
}
export default AttendCourseScreen;