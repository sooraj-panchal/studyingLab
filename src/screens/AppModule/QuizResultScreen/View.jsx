import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import HeaderComp from '../../../component/HeaderComp';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import * as font from './../../../assets/fonts/fonts';
import ButtonComp from '../../../component/ButtonComp';

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
        formdata.append('quiz_id', route.params.quiz_id);
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
    const setResultWiseRendering = () => {
        let result;
        let backgroundColor;
        let text;
        let grade;
        if (quizResult.flag == "false") {
            result = "Sorry !!"
            backgroundColor = colors.RedColor
            text = "You failed, Batter luck Next time"
        } else {
            result = "Congratulation !!"
            backgroundColor = colors.GreenColor
            text = "You passed this exam"
        }
        return (
            <View>
                <View style={{
                    width: 300,
                    height: 150,
                    backgroundColor: backgroundColor,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    borderRadius: 20,
                    elevation: 2,
                    marginTop: 50
                }} >
                    <Text style={{
                        fontSize: 30,
                        color: "white",
                        fontFamily: font.Bold
                    }} >{result}</Text>
                    <Text style={{
                        fontSize: 18, color: "white",
                        fontFamily: font.Regular,
                        marginTop: 5
                    }} >{text}</Text>
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        fontFamily: font.Regular,
                        marginTop: 20
                    }} >Your Grade is : {quizResult.percentage}%</Text>
                </View>
            </View>
        )
    }

    const showGenerateCertificateButton = () => {
        if (quizResult.flag == "true")
            return (
                //    <ButtonComp 
                //     buttonText="Generate certificate"
                //     btnStyle={{
                //         width:"90%",
                //         marginTop:20,
                //         alignSelf:"center",
                //         marginLeft:0,
                //         borderRadius:20
                //     }}
                //    />
                <TouchableOpacity style={styles.btnNextChapter} activeOpacity={0.8} onPress={goToNextChapter} >
                    <Text style={styles.nextChapterText} >Generate certificate</Text>
                    <Image
                        source={images.QuizResultScreen.nextImage}
                        style={styles.nextImage}
                    />
                </TouchableOpacity>
            )
    }

    return (
        <View style={styles.viewContainer} >
            <HeaderComp
                headerText=""
                navigation={navigation}
            />
            {
                isLoading ?
                    <LoadingComp animating={isLoading} />
                    :
                    <>
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
                        {/* <Image
                style={styles.shareimage}
                source={images.QuizResultScreen.shareImage}
            /> */}
                        {setResultWiseRendering()}
                        <View style={styles.btnMainContainer} >
                            {showGenerateCertificateButton()}
                            <TouchableOpacity style={styles.btnBackToHome} activeOpacity={0.8} onPress={goToHomeScreen} >
                                <Image
                                    source={images.backIcon}
                                    style={styles.backImage}
                                />
                                <Text style={styles.backToHomeText} >Back to Home</Text>
                            </TouchableOpacity>
                        </View>
                    </>
            }
        </View>
    )
}
export default QuizResultScreen;