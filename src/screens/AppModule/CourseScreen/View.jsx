import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as globals from './../../../utils/globals';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import NoDataComp from '../../../component/NoDataComp';
import NoNeworkComp from '../../../component/NoNetworkComp';

const categoryDatas = [
    {
        "id": "1",
        categoryName: "Course 1",
        backgroundImage: images.HomeScreen.box_background1Image,
        categoryImage: images.HomeScreen.icon_1Image
    },
    {
        "id": "2",
        categoryName: "Course 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "3",
        categoryName: "Course 3",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "4",
        categoryName: "Course 4",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "5",
        categoryName: "Course 5",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "6",
        categoryName: "Course 6",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "7",
        categoryName: "Course 7",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "8",
        categoryName: "Course 8",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    }
]

const HomeScreen = ({
    navigation,
}) => {
    const [popularCourse, setPopularCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCourseData()
    }, [])

    const getCourseData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.popular_course(onGetPopularCourseResponse, formdata, true)
    }


    const onGetPopularCourseResponse = {
        success: response => {
            console.log("onGetPopularCourseResponse====>", response)
            setPopularCourse(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const goToNewCourseScreen = (item, index) => {
        navigation.navigate("CourseDetails", {
            course_id: item.course_id,
            course_name: item.name
        })
    }

    const _renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => goToNewCourseScreen(item, index)} >
                <ImageBackground style={styles.rcibgStyle}
                    borderRadius={5}
                    source={images.HomeScreen.box_background1Image}
                    resizeMode="stretch"
                    source={{ uri: item.course_image.length == 0 ? null : item.course_image[0].image }}
                >
                    <View style={styles.rcibgVIew} >
                        {/* <Image style={styles.rciCataegoryImage}
                            source={images.HomeScreen.icon_2Image}
                        /> */}
                        <Text style={styles.rciCataegoryName} >{item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const goToSearchScreen = () => {
        navigation.navigate("Search")
    }

    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={styles.headerImagebg}
                source={images.HomeScreen.backgroundImage}
            >
                <View style={styles.headerContainer} >
                    <Text style={styles.homeText} >Course</Text>
                </View>
                <TouchableOpacity style={styles.searachBtnContainer}
                    activeOpacity={0.8}
                    onPress={goToSearchScreen}
                >
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }} >
                        <Image style={styles.searchIconStyle}
                            source={images.HomeScreen.searchImage}
                        />
                        <Text style={styles.searchForAnyThingText} >Search for anything</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
            {
                isLoading ?
                    <LoadingComp animating={isLoading} />
                    :
                    globals.isInternetConnected ?

                        <FlatList contentContainerStyle={styles.listCategoryContainer}
                            data={popularCourse}
                            renderItem={_renderCategoryItem}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() => {
                                return (
                                    <NoDataComp
                                        text="No data found.."
                                    />
                                )
                            }}
                        /> : <NoNeworkComp onPressButton={getCourseData} />
            }
        </View>
    )
}
export default HomeScreen;