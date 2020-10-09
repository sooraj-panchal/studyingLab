import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import HeaderComp from '../../../component/HeaderComp';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';

const QuizResultScreen = ({
    navigation,
    route
}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [quizResult, setIsQuizResult] = useState({})
    useEffect(() => {
        // setQuizData(quizData)
        getQuizResultData()
    }, [])

    const getQuizResultData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('course_id', route.params.course_id);
        setIsLoading(true)
        API.final_result(onGetQuizFinalResultResponse, formdata, true)
    }

    const onGetQuizFinalResultResponse = {
        success: response => {
            console.log("onGetQuizFinalResultResponse====>", response)
            setIsQuizResult(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const goToNextChapter = () => {
        navigation.navigate("Course")
    }

    const goToHomeScreen = () => {
        navigation.navigate("Home")
    }
    return (
        <View style={styles.viewContainer} >
            <LoadingComp animating={isLoading} />
            <HeaderComp
                headerText=""
                navigation={navigation}
            />
            <ImageBackground style={styles.bgImage}
                borderRadius={5}
                source={images.QuizResultScreen.box_backgroundImage}
            >
                <Text style={styles.resultText} >RESULT</Text>
            </ImageBackground>
            <View style={styles.answerListContainer} >
                <View style={styles.wrongAnswerView} >
                    <Text style={styles.wrongAnswerConunt} >{quizResult.incorrect}</Text>
                    <Text style={styles.wrongAnswertext} >Wrong Answer</Text>
                </View>
                <View style={styles.rightAnswerContainer} >
                    <Text style={[styles.wrongAnswerConunt, { color: colors.GreenColor }]} >{quizResult.correct}</Text>
                    <Text style={styles.wrongAnswertext} >Right Answer</Text>
                </View>
                <View style={styles.wrongAnswerView} >
                    <Text style={[styles.wrongAnswerConunt, { color: "purple" }]} >{quizResult.total_que}</Text>
                    <Text style={styles.wrongAnswertext} >Total</Text>
                </View>
            </View>
            <Image
                style={styles.shareimage}
                source={images.QuizResultScreen.shareImage}
            />
            <View style={styles.btnMainContainer} >
                <TouchableOpacity style={styles.btnNextChapter} activeOpacity={0.8} onPress={goToNextChapter} >
                    <Text style={styles.nextChapterText} >Next Chapter</Text>
                    <Image
                        source={images.QuizResultScreen.nextImage}
                        style={styles.nextImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBackToHome} activeOpacity={0.8} onPress={goToHomeScreen} >
                    <Image
                        source={images.backIcon}
                        style={styles.backImage}
                    />
                    <Text style={styles.backToHomeText} >Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default QuizResultScreen;