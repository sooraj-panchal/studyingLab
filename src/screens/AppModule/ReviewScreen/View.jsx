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
            setYourRatingData(response.data.your_rating)
            setReviewData(response.data.all_review_data)
            setTotalRatingData(response.data.total_rating)
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
                <View style={styles.rvdView} >
                    <Text style={styles.student_nameText} >{item.student_name}</Text>
                    <View style={styles.starView} >
                        <Stars
                            disabled={true}
                            default={parseInt(item.rating)}
                            count={5}
                            half={false}
                            starSize={50}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={styles.starImage}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={styles.emptyStar1}
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
                <Text style={styles.messageText} >{item.message}</Text>
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
                <View>
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
                <View style={styles.yourRatingAndReview} >
                    <Text style={styles.studentNameText} >{YourRatingData.student_name}</Text>
                    <View style={styles.starView} >
                        <Stars
                            disabled={true}
                            default={YourRatingData.rating == undefined ? 0 : parseInt(YourRatingData.rating)}
                            count={5}
                            half={false}
                            starSize={50}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={styles.starImage}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={styles.emptyStar1}
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
                <Text style={styles.messageText} >{YourRatingData.message}</Text>
            </View>
        )
    }


    return (
        <View style={styles.viewContainer} >
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
                <View style={styles.totalReviewContainer} >
                    <Text style={styles.avg_rating_text} >{totalRating.avg_rating}</Text>
                    <View style={styles.startView} >
                        <Stars
                            disabled={true}
                            default={totalRating.avg_rating == undefined ? 0 : parseInt(totalRating.avg_rating)}
                            count={5}
                            half={false}
                            starSize={50}
                            fullStar={
                                <Image
                                    source={images.RatingScrren.starImage}
                                    style={styles.starStyle}
                                />
                            }
                            emptyStar={
                                <Image
                                    source={images.RatingScrren.gray_starImage}
                                    style={styles.emptyStar}
                                />
                            }
                        // halfStar={
                        //     <Icon name={'md-star-half'}
                        //         size={50}
                        //         style={[styles.myStarStyle]}
                        //     />}
                        />
                        <Text style={styles.totalRating} >from {totalRating.total_rating} People</Text>
                    </View>
                </View>
                <View style={styles.borderbottom} />
                {yourRatingAndReview()}
                <View style={styles.borderbottom1} />
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
                                style={styles.rvdSeparater}
                            />
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View
                                style={styles.rvdHeader}
                            />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View
                                style={styles.rvdFooter}
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