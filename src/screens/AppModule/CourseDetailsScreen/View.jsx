// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import BackImageComp from '../../../component/BackImageComp';
// import styles from './styles';
// import * as images from '../../../assets/images/map';
// import * as colors from '../../../assets/colors';
// import * as font from '../../../assets/fonts/fonts';


// const CourseDetailsScreen = ({
//     navigation
// }) => {
//     const goToAttendCourse =()=>{
//         navigation.navigate("AttendCourse")
//     }
//     return (
//         <View style={styles.viewContainer} >
//             <View style={{
//                 height: 50,
//                 backgroundColor: colors.BlueColor,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 paddingLeft: 10
//             }} >
//                 <TouchableOpacity onPress={() => navigation.goBack()}  >
//                     <Image style={{
//                         width: 20,
//                         height: 20,
//                         resizeMode: "contain"
//                     }}
//                         source={images.backIcon}
//                     />
//                 </TouchableOpacity>
//                 <Text style={{
//                     fontSize: 18,
//                     color: "white",
//                     fontFamily: font.Regular,
//                     marginLeft: 15
//                 }} >Course 1</Text>
//             </View>
//             <ScrollView contentContainerStyle={{
//                 paddingBottom: 50
//             }} >
//                 <View style={{
//                     marginHorizontal: 15,
//                     marginTop: 20,
//                     backgroundColor: "white",
//                     paddingTop: 5,
//                     paddingBottom: 20,
//                     elevation: 4,
//                     borderRadius: 5,
//                 }} >
//                     <Image
//                         style={{
//                             width: 310,
//                             height: 190,
//                             resizeMode: "contain",
//                             alignSelf: "center"
//                         }}
//                         source={images.CourseDetailsScreen.image1Image}
//                     />
//                     <View style={{
//                         marginLeft: 10,
//                         marginTop: 10
//                     }} >
//                         <Text style={{
//                             fontSize: 20,
//                             fontFamily: font.Medium,
//                             color: colors.BlackColor
//                         }} >New Course - Maths</Text>
//                     </View>
// <View style={{
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//     marginTop: 10
// }} >
//     <View>
//         <View style={{
//             flexDirection: "row",
//         }} >
//             <View style={{}} >
//                 <Image
//                     style={{
//                         width: 30,
//                         height: 30,
//                         resizeMode: "contain"
//                     }}
//                     source={images.CourseDetailsScreen.likeImage}
//                 />
//                 <Text style={{
//                     fontSize: 14,
//                     color: colors.GrayColor,
//                     fontFamily: font.React
//                 }} >200</Text>
//             </View>
//             <View style={{}} >
//                 <Image
//                     style={{
//                         width: 25,
//                         height: 25,
//                         resizeMode: "contain",
//                         marginLeft: 15,
//                         marginTop: 5
//                     }}
//                     source={images.CourseDetailsScreen.shareImage}
//                 />
//             </View>
//         </View>
//     </View>
//     <View style={{}} >
//         <Image
//             style={{
//                 width: 25,
//                 height: 25,
//                 resizeMode: "contain",
//                 marginLeft: 10
//             }}
//             source={images.CourseDetailsScreen.messageImage}
//         />
//     </View>
// </View>
// <Text style={{
//     fontSize: 15,
//     color: colors.GrayColor,
//     fontFamily: font.Medium,
//     marginHorizontal: 10,
//     marginTop: 20,
//     alignSelf: "center"
// }} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
//     sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
//     asfa sfasfasfsaf
// </Text>
//                     <View style={{
//                         marginTop: 20,
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         paddingHorizontal: 10
//                     }} >
//                         <TouchableOpacity style={{
//                             width: 150,
//                             height: 45,
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: 5,
//                             backgroundColor: colors.LightGrayColor
//                         }} activeOpacity={0.8} >
//                             <Text style={{
//                                 fontFamily: font.Regular,
//                                 color: colors.BlackColor,
//                                 fontSize: 16
//                             }} >Add to Favourite</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{
//                             width: 150,
//                             height: 45,
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: 5,
//                             backgroundColor: colors.BlueColor
//                         }} activeOpacity={0.8} onPress={goToAttendCourse} >
//                             <Text style={{
//                                 fontFamily: font.Regular,
//                                 color: "white",
//                                 fontSize: 16
//                             }} >Attend Course</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={{
//                     marginHorizontal: 15,
//                     paddingVertical: 5,
//                     backgroundColor: "white",
//                     elevation: 4,
//                     borderRadius: 5,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: 20
//                 }} >
//                     <Image
//                         style={{
//                             width: 310,
//                             height: 190,
//                             resizeMode: "contain",
//                             alignSelf: "center"
//                         }}
//                         source={images.CourseDetailsScreen.image2Image}
//                     />
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }
// export default CourseDetailsScreen;



import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import HeaderComp from '../../../component/HeaderComp';
import ButtonComp from '../../../component/ButtonComp';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import Icon from 'react-native-vector-icons/Ionicons'
import Stars from 'react-native-stars';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-gesture-handler';
import RatingSuccessModalComp from '../../../component/RatingSuccessModalComp';
import RateNowModalComp from '../../../component/RateNowModalComp';
import ProgressBar from 'react-native-progress/Bar';

const MyCourseDatas = [
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

const CourseDetailsScreen = ({
    navigation,
    route
}) => {
    const [isLoading, setIsLoading] = useState(false)

    const [MyCourseData, setMyCourseData] = useState([]);
    const [toggleModal, setIsToggleModal] = useState(false);
    const [updateData, setIsUpdateData] = useState(0);
    // const [toggleModal1, setIsToggleModal1] = useState(false);

    const [course, setCourse] = useState({});
    useEffect(() => {
        // setMyCourseData(MyCourseData)
        getCourses()
    }, [])


    const getCourses = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('sub_cat_id', route.params.subCatData.sub_cat_id);
        setIsLoading(true)
        API.course(onGetCourseResponse, formdata, true)
    }

    const onGetCourseResponse = {
        success: response => {
            console.log("onGetCourseResponse====>", response)
            setIsLoading(false)
            setMyCourseData(response.data)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }


    const goToAttendCourse = (item, index) => {
        console.log(item)
        if (item.enroll_flag == false) {
            let formdata = new FormData();
            formdata.append('token', globals.student_Token);
            formdata.append('course_id', item.course_id);
            setIsLoading(true)
            API.enroll_course(getenroll_courseResponse, formdata, true);
        } else {
            // navigation.navigate("AttendCourse", {
            //     course_id: item.course_id
            // })
            navigation.navigate("SelectChapter", {
                course_id: item.course_id
            })
        }
    }
    const getenroll_courseResponse = {
        success: response => {
            console.log("getenroll_courseResponse====>", response)
            getCourses()
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const AddtoFavouriteCourse = (item, index) => {
        MyCourseData[index]['favorite_flag'] = !MyCourseData[index]['favorite_flag']
        // setMyCourseData(MyCourseData)
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('flag', item.favorite_flag);
        formdata.append('course_id', item.course_id);
        setIsUpdateData(updateData + 1)
        API.add_favorite(getAddFavoriteResponse, formdata, true);
    }

    const getAddFavoriteResponse = {
        success: response => {
            console.log("getAddFavoriteResponse====>", response)
            // getCourses()
            // setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const likedCourse = (item, index) => {
        MyCourseData[index]['like_flag'] = !MyCourseData[index]['like_flag']
        // setMyCourseData(MyCourseData)
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('flag', item.like_flag);
        formdata.append('course_id', item.course_id);
        // setIsLoading(true)
        setIsUpdateData(updateData + 1)
        API.course_like(getCourseLikeResponse, formdata, true);
    }

    const getCourseLikeResponse = {
        success: response => {
            console.log("getCourseLikeResponse====>", response)
            // getCourses()
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    // const toggleModalHandler = (item, index) => {
    //     setIsToggleModal(!toggleModal);
    //     if (toggleModal == false) {
    //         console.log(toggleModal)
    //         let course = {
    //             course_name: item.name,
    //             course_id: item.course_id
    //         }
    //         setCourse(course)
    //     } else {
    //         return false
    //     }
    // };

    const goToReviewScreen = (item, index) => {
        navigation.navigate("Review", {
            course: item
        })
    }

    const _renderMyCourseData = ({ item, index }) => {
        let backgroundColor
        let favoriteBackgroundColor
        let FavText
        let favTextColor
        let enrollText
        let likeImage
        if (item.enroll_flag == true) {
            backgroundColor = colors.GreenColor
            enrollText = "Attend Course"
        } else {
            backgroundColor = colors.BlueColor
            enrollText = "Enroll Course"
        }

        if (item.favorite_flag == true) {
            favoriteBackgroundColor = colors.RedColor
            FavText = "Remove Favorite"
            favTextColor = "white"
        } else {
            favoriteBackgroundColor = colors.LightGrayColor
            FavText = "Add To Favorite"
            favTextColor = colors.BlackColor
        }

        if (item.like_flag == true) {
           likeImage = images.CourseDetailsScreen.like_blueImage
        } else {
            likeImage = images.CourseDetailsScreen.likeImage
        }
        // if(item.favorite_flag == )
        return (
            <View style={styles.rmcdCardView} >
                <Image
                    style={styles.rmcdImage}
                    source={images.CourseDetailsScreen.image1Image}
                />
                <Text style={styles.rmcdNewCourseText} >New Course - {item.name}</Text>
                <View style={styles.likeShareCommentContainer} >
                    <View>
                        <View style={{
                            flexDirection: "row",
                        }} >
                            <View style={{
                                alignItems: "center"
                            }} >
                                <TouchableOpacity onPress={() => likedCourse(item, index)}>
                                    <Image
                                        style={styles.likeImage}
                                        source={likeImage}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.likeText} >{item.total_like}</Text>
                            </View>
                            <>
                                <Image
                                    style={styles.shareImage}
                                    source={images.CourseDetailsScreen.shareImage}
                                />
                            </>
                        </View>
                    </View>
                    <View style={{
                        marginBottom: 5
                    }} >
                        {/* <Image
                            style={styles.messageImage}
                            source={images.CourseDetailsScreen.messageImage}
                        /> */}
                        <TouchableOpacity style={{
                        }}
                            // onPress={() => toggleModalHandler(item, index)}
                            onPress={() => goToReviewScreen(item, index)}
                        >
                            <Stars
                                disabled={true}
                                default={item.avg_rating}
                                count={5}
                                half={false}
                                starSize={50}
                                fullStar={
                                    <Image
                                        source={images.RatingScrren.starImage}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 2
                                        }}
                                    />
                                }
                                emptyStar={
                                    <Image
                                        source={images.RatingScrren.gray_starImage}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 2
                                        }}
                                    />
                                }
                            // halfStar={
                            //     <Icon name={'md-star-half'}
                            //         size={50}
                            //         style={[styles.myStarStyle]}
                            //     />}
                            />
                            <View style={{
                                marginTop: 5,
                                marginRight: 5
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: colors.BlueColor,
                                    textAlign: "right"
                                }} >{item.total_review} reviews</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    item.enroll_flag == true &&
                    <View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }} >
                            <Text style={styles.rmcdCourseProgressText} >Course Progress</Text>
                            <Text style={styles.rmcdPercentage} >{item.total_course_progress}%</Text>
                        </View>
                        <View style={styles.rmcdProgressBarContainer} >
                            <ProgressBar
                                progress={parseInt(item.total_course_progress) / 100}
                                width={300}
                                height={10}
                                borderRadius={2}
                                unfilledColor="#f2f2f2"
                                color="#89d477"
                                borderWidth={0}
                            />
                        </View>
                    </View>
                }
                {/* <Text style={styles.longText} numberOfLines={2} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                asfa sfasfasfsaf
                    </Text> */}
                <View style={styles.btnContainer} >
                    <ButtonComp
                        btnStyle={[styles.btnLeft, {
                            backgroundColor: favoriteBackgroundColor
                        }]}
                        buttonText={FavText}
                        onPressButton={() => AddtoFavouriteCourse(item, index)}
                        btnTextStyle={[styles.btnLeftText, {
                            color: favTextColor,
                        }]}
                    />
                    <ButtonComp
                        btnStyle={[styles.btnRight, {
                            backgroundColor: backgroundColor
                        }]}
                        buttonText={enrollText}
                        // onPressButton={}
                        onPressButton={() => goToAttendCourse(item, index)}
                        btnTextStyle={styles.btnRightText}
                    />
                </View>
            </View>
        )
    }
    const toggleModalHandler1 = () => {
        setIsToggleModal(false)
        setIsToggleModal1(!toggleModal1)
    }
    return (
        <View style={styles.viewContainer} >
            {/* {RatingModal()} */}
            {/* {RateSuccess()} */}
            {/* <RatingSuccessModalComp/> */}
            {/* <RateNowModalComp
                toggleModal={toggleModal}
                toggleModalHandler={toggleModalHandler}
                onPress={toggleModalHandler1}
                course={course}
            />
            <RatingSuccessModalComp
                toggleModal={toggleModal1}
                toggleModalHandler={toggleModalHandler1}
                onPress={toggleModalHandler1}
            /> */}
            <LoadingComp animating={isLoading} />
            <HeaderComp
                navigation={navigation}
                headerText="Course 1"
            />
            <FlatList
                renderItem={_renderMyCourseData}
                data={MyCourseData}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={styles.listMyCourseSeparater}
                        />
                    )
                }}
                ListHeaderComponent={() => {
                    return (
                        <View
                            style={styles.listMyCourseHeader}
                        />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View
                            style={styles.listMyCourseFooter}
                        />
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
export default CourseDetailsScreen;