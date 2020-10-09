import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import ButtonComp from '../../../component/ButtonComp';
import Carousel from 'react-native-snap-carousel';
import HeaderComp from '../../../component/HeaderComp';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import ToastComp from '../../../component/ToastComp';

const StartQuizScreen = ({
    navigation,
    route
}) => {
    const goToQuizResultScreen = () => {
        navigation.navigate("QuizResult", {
            course_id: route.params.course_id
        })
    }
    const [isLoading, setIsLoading] = useState(false)
    const [dotsData, setDotsData] = useState([]);
    const [quizData, setQuizData] = useState([]);
    const [quizindex, setQuizIndex] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = () => {
        let formdata = new FormData();
        formdata.append('auth_token', globals.authToken);
        formdata.append('course_id', route.params.course_id);
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.quiz(onGetQuizDataResponse, formdata, true)
    }

    const onGetQuizDataResponse = {
        success: response => {
            console.log("onGetQuizDataResponseResponse====>", response)
            setQuizData(response.data)
            // setAttendCourseData(response.data)
            const LEN = response.data.length;
            const arr = [];
            for (let i = 0; i < LEN; i++) {
                arr.push(i + 1);
            }
            setDotsData(arr)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const onPressAnswer = (i, indexes, item, index) => {
        let formdata = new FormData();

        formdata.append('token', globals.student_Token);
        formdata.append('quiz_id', item.quiz_id);
        formdata.append('ans_id', i.ans_id);
        formdata.append('course_id', route.params.course_id);

        if (item.stu_ans_arr.stu_ans_flag == false) {
            if (i.answer && i.correct == "1") {
                console.log("this is correct_answer===>", i.answer)
                i.correct_answer = "true"
                setIsLoading(true)
                API.quiz_answer(onGetQuizAnswerResponse, formdata, true)
            } else if (i.answer && i.correct == "0") {
                console.log("this is wrong_answer===>", i.answer)
                i.correct_answer = "false"
                setIsLoading(true)
                API.quiz_answer(onGetQuizAnswerResponse, formdata, true)

            } else {
                return console.log("no data found")
            }
        } else {
            return setErrorMessage("Can't change answer")
        }
    }

    const onGetQuizAnswerResponse = {
        success: response => {
            console.log("onGetQuizAnswerResponse====>", response)
            // i.correct = response.da.ta.correct
            setIsLoading(false)
            getQuizData()

        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

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
                        <Text style={styles.questionConntText} >{index + 1}. </Text>
                        <Text style={styles.questionText} >{item.question}</Text>
                    </View>
                </View>
                <View style={styles.btnMainContainer} >
                    {
                        item.answer_data.map((i, indexes) => {
                            return (
                                <View style={styles.questionbtn1} key={indexes} >
                                    <TouchableOpacity
                                        style={[styles.touchable, {
                                            backgroundColor:
                                                item.stu_ans_arr.stu_ans_flag == true && i.correct_answer == "true" ||
                                                    i.correct_answer == "true" ? colors.GreenColor :
                                                    item.stu_ans_arr.stu_ans_flag == true && i.correct_answer == "false" ||
                                                        i.correct_answer == "false" ? colors.RedColor
                                                        : "#bf4193",
                                        }]} onPress={() => onPressAnswer(i, indexes, item, index)} >
                                        <Text style={styles.questionBtnText} >{i.answer}</Text>
                                    </TouchableOpacity>
                                    {
                                        item.stu_ans_arr.stu_ans_flag == true && i.correct_answer == "true" ||
                                            i.correct_answer == "true" ?
                                            <View style={styles.rightImageContainer} >
                                                <Image style={styles.rightImage}
                                                    source={images.StartQuizScreen.rightImage}
                                                />
                                            </View> : null
                                    }
                                    {
                                        item.stu_ans_arr.stu_ans_flag == true && i.correct_answer == "false" ||
                                            i.correct_answer == "false" ?
                                            <View style={styles.rightImageContainer} >
                                                <Image style={styles.rightImage}
                                                    source={images.StartQuizScreen.wrongImage}
                                                />
                                            </View> : null
                                    }
                                </View>
                            )
                        })
                    }
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
    return (
        <View style={styles.viewContainer} >
            <LoadingComp animating={isLoading} />
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
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
            <View style={styles.listQuestionContainer} >
                <Carousel
                    data={quizData}
                    renderItem={_renderQuizData}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width}
                    onSnapToItem={(slideIndex) => {
                        setQuizIndex(slideIndex)
                    }}

                />
            </View>
            <ToastComp
                type={"error"}
                message={errorMessage}
                onDismiss={() => { setErrorMessage("") }}
            />
        </View>
    )
}
export default StartQuizScreen;