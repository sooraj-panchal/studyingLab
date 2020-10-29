import React, { useEffect, useState } from 'react';
import { API } from '../../utils/api';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, StyleSheet, PermissionsAndroid } from 'react-native';
import * as globals from '../../utils/globals';
import * as colors from '../../assets/colors';
import * as images from '../../assets/images/map';
import Stars from 'react-native-stars';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles';
import ButtonComp from '../ButtonComp';
import LoadingComp from '../LoadingComp';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import NoDataComp from '../NoDataComp';
import NoNeworkComp from '../NoNetworkComp';
import Swiper from 'react-native-swiper'
var RNFS = require('react-native-fs');
import FileViewer from 'react-native-file-viewer';

const CourseListComp = ({
    route,
    navigation,
    from
}) => {

    const [MyCourseData, setMyCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [updateData, setIsUpdateData] = useState(0);
    const [activeSlide, setIsactiveSlide] = useState(0);

    useEffect(() => {
        // setMyCourseData(MyCourseData)
        if (route.params != undefined && route.params.fromRating == "fromRating") {
                const unsubscribe = navigation.addListener('focus', () => {
                    // do something
                    CourseData()
                });
                return unsubscribe;
        } else {
            CourseData()
        }
    }, [from, route])
    const CourseData = () => {
        if (from == "MyCourse") {
            getMyCourses()
        } else if (from == "Favorite") {
            GetFavoritCourseeData()
        } else {
            getCourses()
        }
    }

    const GetFavoritCourseeData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.get_favorite(getFavoriteResponse, formdata, true);
    }

    const getFavoriteResponse = {
        success: response => {
            console.log("getAddFavoriteResponse====>", response)
            setMyCourseData(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setMyCourseData(err.data)
            setIsLoading(false)
        },
        complete: () => { },
    }

    const removeFavouriteCourse = (item, index) => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('flag', "false");
        formdata.append('course_id', item.course_id);
        setIsLoading(true)
        API.add_favorite(getAddFavoriteResponse, formdata, true);
    }

    // const getAddFavoriteResponse = {
    //     success: response => {
    //         console.log("getAddFavoriteResponse====>", response)
    //         GetFavoritCourseeData()
    //         setIsLoading(false)
    //     },
    //     error: err => {
    // GetFavoritCourseeData()
    // console.log('err--->' + JSON.stringify(err))
    // setIsLoading(false)
    //     },
    //     complete: () => { },
    // }


    const getMyCourses = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.get_my_course(onGetMyCourseResponse, formdata, true)
    }

    const onGetMyCourseResponse = {
        success: response => {
            console.log("onGetMyCourseResponse====>", response)
            setIsLoading(false)
            setMyCourseData(response.data)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const getCourses = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('course_id', route.params.course_id);
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
            if (from == "Favorite") {
                GetFavoritCourseeData()
                setIsLoading(false)
            } else {
                getCourses()
            }
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            if (from == 'Favorite') {
                GetFavoritCourseeData()
                setIsLoading(false)
            } else {
                getCourses()
            }
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
            if (from == 'Favorite') {
                GetFavoritCourseeData()
                setIsLoading(false)
            }
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            if (from == 'Favorite') {
                GetFavoritCourseeData()
                setIsLoading(false)
            }
        },
        complete: () => { },
    }

    const likedCourse = (item, index) => {
        MyCourseData[index]['like_flag'] = !MyCourseData[index]['like_flag']
        if (item.like_flag == true) {
            MyCourseData[index]['total_like'] = parseInt(MyCourseData[index]['total_like']) + 1
        } else {
            MyCourseData[index]['total_like'] = parseInt(MyCourseData[index]['total_like']) - 1
        }
        // setMyCourseData(MyCourseData)
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('flag', item.like_flag);
        formdata.append('course_id', item.course_id);
        // setIsLoading(true)

        setIsUpdateData(updateData + 1)
        API.course_like({
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
        }, formdata, true);

    }

    // const getCourseLikeResponse = 

    const goToReviewScreen = (item, index) => {
        navigation.navigate("Review", {
            course: item,
            from: from
        })
    }

    const pagination = (item) => {
        console.log(item.image.length)
        return (
            <Pagination
                dotsLength={item.image.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: globals.mpw5 * 2,// 10,
                    height: globals.mph5 * 2,// 10,
                    borderRadius: 5,
                    backgroundColor: colors.BlueColor,
                }}
                inactiveDotStyle={{
                    backgroundColor: "lightgrey",
                    width: globals.mpw5 * 3,// 10,
                    height: globals.mph5 * 3,// 10,
                    borderRadius: 7.5,
                }}
                inactiveDotOpacity={1}
            />
        )
    }

    const _renderCourseImages = ({ item, index }, parallaxProps) => {
        return (
            <View style={{
                width: globals.mpw5 * 62,// 310,
                height: globals.mph5 * 40, // 200,
                alignSelf: "center",
                marginLeft: globals.mpw5 * 2,// 10,
            }}>
                <ParallaxImage
                    source={{ uri: item.image }}
                    containerStyle={{
                        flex: 1,
                        backgroundColor: 'white',
                        borderRadius: 8,
                    }}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        resizeMode: 'cover',
                    }}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        )
    }
    var uploadBegin = (response) => {
        var jobId = response.jobId;
        console.log('UPLOAD HAS BEGUN! JobId: ' + JSON.stringify(jobId));
    };

    var uploadProgress = (response) => {
        var percentage = Math.floor((response.bytesWritten / response.contentLength) * 100);
        console.log('UPLOAD IS ' + percentage + '% DONE!');
    };

    const generateCertificate = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]);
        } catch (err) {
            console.warn(err);
        }
        const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        if (!readGranted || !writeGranted) {
            console.log('Read and write permissions have not been granted');
            return;
        }

        const url = 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4';

        var extension = url.split('/').pop();

        var localFile = `${RNFS.ExternalStorageDirectoryPath}/StudyingLabApp`;
        RNFS.mkdir(localFile);
        localFile += `/${extension}`
        const options = {
            fromUrl: url,
            toFile: localFile,
            begin: uploadBegin,
            progress: uploadProgress
        };

        RNFS.downloadFile(options).promise
            .then((response) => {
                var percentage = (response.bytesWritten / 9044043) * 100
                console.log('UPLOAD IS ' + percentage + '% DONE!');
            })
            .then(() => {
                FileViewer.open(localFile)
            })
            .catch(error => {
                console.log("error", error)
            });

        // var path = `${RNFS.ExternalStorageDirectoryPath}/StudyingLabApp`;
        // RNFS.mkdir(path);
        // path += '/data.json';
        // RNFS.writeFile(path, 'utf8')
        //     .then((success) => {
        //         console.log('Success');
        //         console.log(path)
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
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
                <View>
                    <Carousel
                        // ref={carouselRef}
                        sliderWidth={globals.mpw5 * 64}// 320}
                        sliderHeight={globals.mph5 * 64} // {320}
                        itemWidth={globals.mpw5 * 64} //{320}
                        data={item.image}
                        renderItem={_renderCourseImages}
                        hasParallaxImages={true}
                        swipeThreshold={0}
                        activeAnimationOptions={null}
                        onSnapToItem={(index) => setIsactiveSlide(index)}
                    />
                    <View style={{
                        position: "absolute",
                        bottom: -20,
                        alignSelf: "center"
                    }} >
                        {pagination(item, index)}
                    </View>
                </View>
                {/* <View>
                    <Swiper style={{
                        height: 300,

                    }} horizontal={true} >
                        {
                            item.image.map((item, index) => {
                                return (
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{
                                                width: 300,
                                                height: 300,
                                                alignSelf: "center"
                                            }}
                                        />
                                )
                            })
                        }
                    </Swiper>
                </View> */}
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
                            {/* <>
                                <Image
                                    style={styles.shareImage}
                                    source={images.CourseDetailsScreen.shareImage}
                                />
                            </> */}
                        </View>
                    </View>
                    <View style={styles.ratingView} >
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
                                default={parseInt(item.avg_rating)}
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
                                        style={styles.emptyStarImage}
                                    />
                                }
                            // halfStar={
                            //     <Icon name={'md-star-half'}
                            //         size={50}
                            //         style={[styles.myStarStyle]}
                            //     />}
                            />
                            <View style={styles.reviewView}>
                                <Text style={styles.reviewText} >{item.total_review} reviews</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    item.enroll_flag == true &&
                    <View style={styles.courseProgressView} >
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
                                width={globals.mpw5 * 60} //300}
                                height={globals.mph5 * 2}// {10}
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
                    {
                        from == "Favorite"
                            ?
                            <ButtonComp
                                btnStyle={[styles.btnLeft, {
                                    backgroundColor: "red"
                                }]}
                                buttonText="Remove Favorite"
                                onPressButton={() => {
                                    removeFavouriteCourse(item, index)
                                }}
                                btnTextStyle={[styles.btnLeftText, {
                                    color: "white",
                                }]}
                            />
                            :
                            <ButtonComp
                                btnStyle={[styles.btnLeft, {
                                    backgroundColor: favoriteBackgroundColor
                                }]}
                                buttonText={FavText}
                                onPressButton={() => {
                                    AddtoFavouriteCourse(item, index)
                                }}
                                btnTextStyle={[styles.btnLeftText, {
                                    color: favTextColor,
                                }]}
                            />
                    }
                    <ButtonComp
                        btnStyle={[styles.btnRight, {
                            backgroundColor: backgroundColor
                        }]}
                        buttonText={enrollText}
                        // onPressButton={}
                        onPressButton={() => goToAttendCourse(item, index)}
                        btnTextStyle={styles.btnRightText}
                    />
                    {/* <ButtonComp
                        btnStyle={[styles.btnRight, {
                            backgroundColor: "#f7f7f7",
                            borderWidth: 0.5,
                            borderColor: "lightgrey",
                            elevation: 1
                        }]}
                        buttonText={"Generate Certificate"}
                        // onPressButton={}
                        onPressButton={() => generateCertificate(item, index)}
                        btnTextStyle={[styles.btnRightText, { color: "grey" }]}
                    /> */}
                </View>
            </View>
        )
    }

    return (
        <View>
            {

                isLoading ?
                    <LoadingComp animating={isLoading} />
                    :
                    globals.isInternetConnected ?
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
                            ListEmptyComponent={() => {
                                return (
                                    <NoDataComp
                                        text="No data found.."
                                    />
                                )
                            }}
                        />
                        : <NoNeworkComp onPressButton={CourseData} />
            }
        </View>
    )
}
export default CourseListComp;