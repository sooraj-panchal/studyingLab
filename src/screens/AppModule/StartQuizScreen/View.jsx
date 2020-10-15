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
            quiz_id: route.params.quiz.quiz_id,
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
        formdata.append('quiz_id', route.params.quiz.quiz_id);
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
        formdata.append('question_id', item.question_id);
        formdata.append('ans_id', i.ans_id);

        if (item.stu_ans_arr.stu_ans_flag == false) {
            if (i.ans_id && i.correct == "1") {
                console.log("this is correct_answer===>", i.answer)
                API.quiz_answer({
                    success: response => {
                        console.log("onGetQuizAnswerResponse====>", response)
                        // i.correct = response.da.ta.correct
                        setIsLoading(false)
                        item.stu_ans_arr.correct_ans = "true"
                        getQuizData()
                    },
                    error: err => {
                        console.log('err--->' + JSON.stringify(err))

                        setIsLoading(false)
                    },
                    complete: () => { },
                }, formdata, true)
            } else if (i.ans_id && i.correct == "0") {
                console.log("this is wrong_answer===>", i.answer)
                API.quiz_answer({
                    success: response => {
                        console.log("onGetQuizAnswerResponse====>", response)
                        // i.correct = response.da.ta.correct
                        setIsLoading(false)
                        item.stu_ans_arr.correct_ans = "false"
                        getQuizData()

                    },
                    error: err => {
                        console.log('err--->' + JSON.stringify(err))
                        setIsLoading(false)
                    },
                    complete: () => { },
                }, formdata, true)
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

                            const correct_ans = item.stu_ans_arr.stu_ans_flag == true
                                && i.correct == "1"
                                && item.stu_ans_arr.correct_ans == "true"
                                || i.correct == "1"
                                && item.stu_ans_arr.correct_ans == "true"

                            const wrong_ans = item.stu_ans_arr.stu_ans_flag == true
                                && i.correct == "0"
                                && item.stu_ans_arr.correct_ans == "false"
                                || i.correct == "0"
                                && item.stu_ans_arr.correct_ans == "false"

                            const changeBgColor = correct_ans ? colors.GreenColor :
                                wrong_ans ? colors.RedColor
                                    : "#bf4193"
                            return (
                                <View style={styles.questionbtn1} key={indexes} >
                                    <TouchableOpacity
                                        style={[styles.touchable, {
                                            backgroundColor: changeBgColor,
                                        }]} onPress={() => onPressAnswer(i, indexes, item, index)} >
                                        <Text style={styles.questionBtnText} >{i.answer}</Text>
                                    </TouchableOpacity>
                                    {
                                        correct_ans ?
                                            <View style={styles.rightImageContainer} >
                                                <Image style={styles.rightImage}
                                                    source={images.StartQuizScreen.rightImage}
                                                />
                                            </View> : null
                                    }
                                    {
                                        wrong_ans ?
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