import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ProgressBar from 'react-native-progress/Bar';
import HeaderComp from '../../../component/HeaderComp';
import ButtonComp from '../../../component/ButtonComp';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import Stars from 'react-native-stars';
import RateNowModalComp from '../../../component/RateNowModalComp';
import RatingSuccessModalComp from '../../../component/RatingSuccessModalComp';


const reviewDatas = [
    {
        "id": "1",
    },
    {
        "id": "2",
    },
    {
        "id": "3",
    },
    {
        "id": "4",
    },
    {
        "id": "5",
    },
    {
        "id": "6",
    },
    {
        "id": "7",
    },
    {
        "id": "8",
    }
]

const ReviewScreen = ({
    navigation,
    route
}) => {
    const [reviewData, setReviewData] = useState([]);
    const [totalRating, setTotalRatingData] = useState({});
    const [YourRatingData, setYourRatingData] = useState({});

    const [isLoading, setIsLoading] = useState(false)
    const [toggleModal, setIsToggleModal] = useState(false);
    const [toggleModal1, setIsToggleModal1] = useState(false);
    const [course, setCourse] = useState({});

    useEffect(() => {
        getReviewData()
    }, [])

    const getReviewData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('course_id', route.params.course.course_id);
        setIsLoading(true)
        API.get_review(onget_reviewResponse, formdata, true)
    }

    const onget_reviewResponse = {
        success: response => {
            console.log("onget_reviewResponse====>", response)
            setIsLoading(false)
            setReviewData(response.data.all_review_data)
            setTotalRatingData(response.data.total_rating)
            setYourRatingData(response.data.your_rating)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const _renderReviewData = ({ item, index }) => {
        return (
            <View style={{
                // backgroundColor:"red",
            }} >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 20
                }} >
                    <Text style={{
                        color: colors.BlackColor,
                        fontFamily: font.Medium,
                        fontSize: 16
                    }} >{item.student_name}</Text>
                    <View style={{
                        // alignItems: "flex-start",
                        right: 5
                    }} >
                        <Stars
                            disabled={true}
                            default={parseInt(item.rating)}
                            count={5}
                            half={false}
                            starSize={50}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={{
                                        width: 15,
                                        height: 15,
                                        marginLeft: 5
                                    }}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={{
                                        width: 15,
                                        height: 15,
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
                </View>
                <Text style={{
                    width: 300,
                    marginTop: 10,
                    marginLeft: 20,
                    color: colors.BlackColor,
                    fontFamily: font.Regular,
                    fontSize: 13
                }} >{item.message}</Text>
            </View>
        )
    }


    const toggleModalHandler = () => {
        if (route.params.course.enroll_flag == false) {
            Alert.alert(
                "Sorry !!",
                "You are eligible to rate course, when you enroll course",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );

        } else {
            setIsToggleModal(!toggleModal);
            if (toggleModal == false) {
                console.log(route.params.course)
                let course = {
                    course_name: route.params.course.name,
                    course_id: route.params.course.course_id
                }
                setCourse(course)
            } else {
                return false
            }
        }
    };

    const toggleModalHandler1 = () => {
        setIsToggleModal(false)
        setIsToggleModal1(!toggleModal1)
    }

    const yourRatingAndReview = () => {
        if (YourRatingData == "") {
            return (
                <View style={{
                    // backgroundColor:"red",
                    // marginTop: 20
                }} >
                    {/* <Text style={{
                        color: colors.BlackColor,
                        fontFamily: font.Medium,
                        fontSize: 20,
                        marginLeft: 10
                    }} >Your Rating & Review</Text> */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginHorizontal: 20,
                        marginTop: 10
                    }} >
                        <Text style={{
                            color: colors.BlackColor,
                            fontFamily: font.Regular,
                            fontSize: 16
                        }} >You Haven't Rate Yet?</Text>
                        <TouchableOpacity onPress={toggleModalHandler} >
                            <Text style={{
                                color: colors.BlueColor,
                                fontFamily: font.Regular,
                                fontSize: 16
                            }} >Rate Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View style={{
                // backgroundColor:"red",
                // marginTop: 20
            }} >
                {/* <Text style={{
                    color: colors.BlackColor,
                    fontFamily: font.Medium,
                    fontSize: 20,
                    marginLeft: 10
                }} >Your Rating & Review</Text> */}
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                    marginTop: 10
                }} >
                    <Text style={{
                        color: colors.BlackColor,
                        fontFamily: font.Medium,
                        fontSize: 16
                    }} >{YourRatingData.student_name}</Text>
                    <View style={{
                        // alignItems: "flex-start",
                        right: 5
                    }} >
                        <Stars
                            disabled={true}
                            default={YourRatingData.rating == undefined ? 0 : parseInt(YourRatingData.rating)}
                            count={5}
                            half={false}
                            starSize={50}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={{
                                        width: 15,
                                        height: 15,
                                        marginLeft: 5
                                    }}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={{
                                        width: 15,
                                        height: 15,
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

                </View>
                <Text style={{
                    width: 300,
                    marginTop: 10,
                    marginLeft: 20,
                    color: colors.BlackColor,
                    fontFamily: font.Regular,
                    fontSize: 13
                }} >{YourRatingData.message}</Text>
            </View>
        )
    }


    return (
        <View style={{
            backgroundColor: "white",
            flex: 1
        }} >
            <RateNowModalComp
                toggleModal={toggleModal}
                toggleModalHandler={toggleModalHandler}
                toggleModalHandler1={toggleModalHandler1}
                course={course}

            />
            <RatingSuccessModalComp
                toggleModal={toggleModal1}
                toggleModalHandler={toggleModalHandler1}
                getReviewData={getReviewData}
            />
            <LoadingComp animating={isLoading} />
            <HeaderComp
                navigation={navigation}
                headerText="Review"
            />
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40
                }} >
                    <Text style={{
                        fontSize: 45,
                        color: colors.BlackColor,
                        fontFamily: font.Regular
                    }} >{totalRating.avg_rating}</Text>
                    <View style={{
                        marginLeft: 20,
                    }} >
                        <Stars
                            disabled={true}
                            default={totalRating.avg_rating == undefined ? 0 : parseInt(totalRating.avg_rating)}
                            count={5}
                            half={false}
                            starSize={50}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: 5
                                    }}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={{
                                        width: 25,
                                        height: 25,
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
                            fontSize: 14,
                            color: colors.GrayColor,
                            fontFamily: font.Regular,
                            marginTop: 5,
                            marginLeft: 10
                        }} >from {totalRating.total_rating} People</Text>
                    </View>
                </View>
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.GrayColor,
                    marginTop: 20,
                    marginBottom: 10,
                    marginHorizontal: 20
                }} />
                {yourRatingAndReview()}
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.GrayColor,
                    marginTop: 20,
                    marginBottom: 0,
                    marginHorizontal: 20
                }} />
                {/* <Text style={{
                    color: colors.BlackColor,
                    fontFamily: font.Medium,
                    fontSize: 20,
                    marginLeft: 10,
                }} >All Rating & Review</Text> */}
                <FlatList
                    renderItem={_renderReviewData}
                    data={reviewData}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    marginVertical: 15,
                                    borderBottomWidth: 1,
                                    marginHorizontal: 15,
                                    borderBottomColor: colors.LightGrayColor
                                }}
                            />
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View
                                style={{
                                    marginTop: 20
                                }}
                            />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View
                                style={{
                                    marginBottom: 20,
                                }}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    )
}
export default ReviewScreen;