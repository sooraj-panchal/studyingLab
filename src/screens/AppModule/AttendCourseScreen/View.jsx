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
    const [index, setIndex] = useState(1)
    const [quiz, setQuiz] = useState({})
    const [quizStart, setQuizStart] = useState("")
    useEffect(() => {
        // setAttendCourseData(attendCourseData)
        if (route) {
            getCourseDetailsData()
        }
        const arr = [];
        let length = 0
        for (let i = 0; i < length + 1; i++) {
            arr.push({ "description": i + 1 });
            length = 2
        }
        console.log(arr)

        // let data = arr.map((item, index) => {
        //     item.description = 1
        //     length = 2
        //     return item;
        // })
        // console.log(data)

        // var foo = [];
        // const data = foo.map((item, index) => {
        //     item.description = "sdad";
        //     return item
        // })
        // console.log(data);
        // let datas = [{
        //     description: ""
        // }, {
        //     description: ""
        // }
        // ]
        // const data = "<h3>1914 translation by H. Rackham</h3>"
        // let fn = 0
        // let sn = 2
        // const arr = datas.map((item) => {
        //     item.description = data.split(" ").splice(fn, sn).join(" ")
        //     fn = sn
        //     sn = data.length
        //     return item
        // })
        // console.log(arr)

    }, [route])

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
            console.log(response.data.course_data)
            // let fn = 0
            // let sn = 190
            // const data = response.data.course_data.map((item, index) => {
            //     item.description = item.description.split(" ").splice(fn, sn).join(" ")
            //     fn = sn
            //     sn = item.description.length
            //     return item
            // })
            // console.log(data)

            setIndex(1)
            setQuiz(response.data.quiz)
            setQuizStart(response.data.quiz_flag)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setAttendCourseData(err.data)
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
                }}  >
                    {/* {
                        index == 0
                        &&
                        <>
                            <Image
                                style={styles.courseImage}

                                source={images.CourseDetailsScreen.image1Image}
                            />
                            <View style={styles.chapterContainer} >
                                <Text style={styles.chapterText} >{route.params.chapter_name}</Text>
                            </View>
                        </>
                    } */}
                    <View style={{
                        alignSelf: "center",
                        // marginTop: index == 0 ? 10 : null,
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
                        quizStart == "false" &&
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
                            <Text style={styles.chapterText} >{route.params.chapter_name}</Text>
                            <Text style={styles.paginationCountText} >{index}/{attendCourseData.length}</Text>
                        </View>
                        <Carousel
                            // ref={(c) => { this._carousel = c; }}
                            data={attendCourseData}
                            renderItem={_renderAttendCourseData}
                            itemHeight={Dimensions.get("window").height / 1.1}
                            sliderHeight={Dimensions.get("window").height / 1.1}
                            vertical={true}
                            // viewabilityConfig={{
                            //     itemVisiblePercentThreshold: 50
                            // }}
                            // onViewableItemsChanged={onViewableItemsChanged}
                            onSnapToItem={(slideIndex) => {
                                setIndex(slideIndex + 1)
                            }}
                        // scrollEnabled={false}
                        />
                    </>
            }

        </View>
    )
}
export default AttendCourseScreen;