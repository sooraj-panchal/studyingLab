import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import HeaderComp from '../../../component/HeaderComp';
import ButtonComp from '../../../component/ButtonComp';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';

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

const FavoriteScreen = ({
    navigation
}) => {
    const [FavoriteCourseData, setGetFavoriteCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // setMyCourseData(MyCourseData)
        GetFavoritCourseeData()
    }, [])

    const GetFavoritCourseeData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.get_favorite(getFavoriteResponse, formdata, true);
    }

    const getFavoriteResponse = {
        success: response => {
            console.log("getAddFavoriteResponse====>", response)
            setGetFavoriteCourseData(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }
    const goToAttendCourse = (item, index) => {
        navigation.navigate("AttendCourse", {
            course_id: item.course_id
        })
    }

    const removeFavouriteCourse = (item, index) => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('flag', "false");
        formdata.append('course_id', item.course_id);
        setIsLoading(true)
        API.add_favorite(getAddFavoriteResponse, formdata, true);
    }

    const getAddFavoriteResponse = {
        success: response => {
            console.log("getAddFavoriteResponse====>", response)
            GetFavoritCourseeData()
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }


    const _renderFavoriteCourseData = ({ item, index }) => {
        return (
            <View style={styles.rmcdCardView} >
                <Image
                    style={styles.rmcdImage}
                    source={images.CourseDetailsScreen.image1Image}
                />
                <Text style={styles.rmcdNewCourseText} >New Course - {item.name}</Text>
                <View style={styles.btnContainer} >
                    <ButtonComp
                        btnStyle={styles.btnLeft}
                        buttonText="Remove"
                        onPressButton={() => removeFavouriteCourse(item, index)}
                        btnTextStyle={styles.btnLeftText}
                    />
                    <ButtonComp
                        btnStyle={styles.btnRight}
                        buttonText="Continue"
                        onPressButton={() => goToAttendCourse(item, index)}
                        btnTextStyle={styles.btnRightText}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.viewContainer} >
            <LoadingComp animating={isLoading} />
            <HeaderComp
                navigation={navigation}
                headerText="Favorite"
            />
            <FlatList
                renderItem={_renderFavoriteCourseData}
                data={FavoriteCourseData}
                keyExtractor={(item, index) => index.toString()}
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
            />
        </View>
    )
}
export default FavoriteScreen;