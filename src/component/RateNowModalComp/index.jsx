import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Stars from 'react-native-stars';
import Modal from 'react-native-modal';
import { View, Text, TextInput, Image } from 'react-native';
import ButtonComp from '../ButtonComp';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';
import { API } from '../../utils/api';
import * as globals from '../../utils/globals';
import LoadingComp from '../LoadingComp';
import AsyncStorage from '@react-native-community/async-storage';

const RateNowModalComp = ({
    toggleModal,
    toggleModalHandler,
    toggleModalHandler1,
    course,
    onPress,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [ratingStar, setRatingStar] = useState(0)
    const [review, setReview] = useState("")
    useEffect(() => {
        // if(course)
        // console.log("course", course)
        setRatingStar(2)
    }, [course])

    const addReviewHandler = (item, index) => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('course_id', course.course_id);
        formdata.append('rating', ratingStar);
        formdata.append('message', review);
        setIsLoading(true)
        API.add_rating(getAddRatingResponse, formdata, true);
    }

    const getAddRatingResponse = {
        success: response => {
            console.log("getAddRatingResponse====>", response)
            let ratingData = {
                ratingStar: ratingStar,
                review: review
            }
            setIsLoading(false)
            toggleModalHandler()
            toggleModalHandler1()
            AsyncStorage.setItem("ratingStar", JSON.stringify(ratingStar))
            AsyncStorage.setItem("review", review)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    return (
        <View>
            <Modal isVisible={toggleModal}
                backdropOpacity={0.5}
                onBackButtonPress={toggleModalHandler}
                onBackdropPress={toggleModalHandler}
                useNativeDriver={true}
            // animationIn="pulse"
            // animationInTiming={0}
            // animationOutTiming={0}
            >
                <LoadingComp animating={isLoading} />
                <View style={{
                    backgroundColor: "white",
                    width: "100%",
                    paddingVertical: 30,
                    alignSelf: "center",
                    borderRadius: 5
                }} >
                    <View style={{
                        marginLeft: 15,
                    }} >
                        <Text style={{
                            fontSize: 25,
                            color: colors.BlackColor,
                            fontFamily: font.Regular
                        }} >{course.course_name}</Text>
                        <Text style={{
                            marginTop: 2,
                            fontSize: 16,
                            color: colors.GrayColor,
                            fontFamily: font.Regular
                        }} >Admin name</Text>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            marginHorizontal: 15,
                            marginVertical: 20,
                            borderColor: "lightgrey"
                        }}
                    />
                    <View style={{

                    }}>
                        <Stars
                            default={ratingStar}
                            count={5}
                            half={false}
                            starSize={50}
                            update={(val) => {
                                setRatingStar(val)
                            }}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginLeft: 5
                                    }}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginLeft: 5
                                    }}
                                />

                            }
                        // halfStar={
                        //     <Icon name={'md-star-half'}
                        //         size={50}
                        //         style={[styles.myStarStyle]}
                        //     />}
                        />
                    </View>
                    <TextInput
                        placeholder="Type your feedbacak"
                        style={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            marginHorizontal: 15,
                            paddingLeft: 10,
                            height: 110,
                            marginTop: 30,
                            borderRadius: 5,
                            textAlignVertical: "top",
                        }}
                        multiline={true}
                        value={review}
                        onChangeText={(review) => setReview(review)}

                    />
                    <ButtonComp
                        buttonText="Submit"
                        btnStyle={{
                            alignSelf: "center",
                            marginTop: 30,
                            width: 100,
                            borderRadius: 15,
                            height: 40,
                            backgroundColor: colors.BlueColor
                        }}
                        btnTextStyle={{
                            fontSize: 15
                        }}
                        onPressButton={addReviewHandler}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default RateNowModalComp;