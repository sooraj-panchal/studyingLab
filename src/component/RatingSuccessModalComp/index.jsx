import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Stars from 'react-native-stars';
import Modal from 'react-native-modal';
import { View, Text, Image } from 'react-native';
import ButtonComp from '../ButtonComp';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as images from '../../assets/images/map';
import AsyncStorage from '@react-native-community/async-storage';

const RatingSuccessModalComp = ({
    toggleModal,
    toggleModalHandler,
    getReviewData,
    navigation,
    route,
    from
}) => {
    const [ratingData, setRatingData] = useState({})
    const [ratingStar, setRatingStar] = useState(0)
    const [review, setReview] = useState("")
    useEffect(() => {
        getRatingDataHandler()
        console.log(ratingStar, review)
    })
    let getRatingDataHandler = async () => {
        const ratingStar = await AsyncStorage.getItem("ratingStar", "")
        const review = await AsyncStorage.getItem("review", "")
        setRatingStar(ratingStar)
        setReview(review)
    }
    const submit = () => {
        toggleModalHandler()
        AsyncStorage.multiRemove(["ratingStar", "review"], (err) => {
            console.log(err)
        })
        if (from == "MyCourse") {
            navigation.navigate("MyCourse", {
                fromRating: "fromRating"
            })
        } else if (from == "Favorite") {
            navigation.navigate("Favorite", {
                fromRating: "fromRating"
            })
        } else {
            navigation.navigate("CourseDetails", {
                fromRating: "fromRating"
            })
        }
    }
    return (
        <Modal isVisible={toggleModal}
            backdropOpacity={0.5}
            onBackButtonPress={toggleModalHandler}
            onBackdropPress={toggleModalHandler}
            useNativeDriver={true}
        // animationIn="pulse"
        // animationInTiming={0}
        // animationOutTiming={0}
        >
            <View style={{
                backgroundColor: "white",
                width: "100%",
                paddingTop: 20,
                paddingBottom: 40,
                alignSelf: "center",
                borderRadius: 5
            }} >
                <View style={{
                    alignItems: "center"
                }} >
                    <Text style={{
                        fontSize: 30,
                        color: colors.BlackColor,
                        fontFamily: font.Bold
                    }} >Thank you!</Text>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: colors.GrayColor,
                        fontFamily: font.Regular
                    }} >Your feedback is very helpful to us</Text>
                </View>
                <View
                    style={{
                        borderBottomWidth: 1,
                        marginHorizontal: 15,
                        marginVertical: 20,
                        borderColor: "lightgrey"
                    }}
                />
                <Stars
                    default={ratingStar}
                    count={5}
                    half={false}
                    starSize={50}
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
                <Text style={{
                    fontSize: 16,
                    color: colors.GrayColor,
                    fontFamily: font.Regular,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    textAlign: "center"
                }} >{review}</Text>
                <ButtonComp
                    buttonText="Continue"
                    btnStyle={{
                        alignSelf: "center",
                        width: 100,
                        borderRadius: 15,
                        height: 40,
                        backgroundColor: colors.BlueColor
                    }}
                    btnTextStyle={{
                        fontSize: 15
                    }}
                    onPressButton={submit}
                />
            </View>
        </Modal>
    )
}

export default RatingSuccessModalComp;