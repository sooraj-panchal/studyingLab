import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import * as globals from './../../../utils/globals';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import AsyncStorage from '@react-native-community/async-storage';
import NoNeworkComp from '../../../component/NoNetworkComp';
import NoDataComp from '../../../component/NoDataComp';

const HomeScreen = ({
    navigation,
    route
}) => {
    const [MyCourseData, setMyCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (route.params != undefined) {
            if (route.params.fromFilter == "ApplyFilter") {
                setMyCourseData(route.params.categoryDataFromFilter)
            } else if (route.params.fromFilter == "clearFilter") {
                getCourses()
            }
        } else {
            getCourses()
        }
    }, [route,])

    const getCourses = async () => {
        const div_id = await AsyncStorage.getItem("div_id")
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('div_id', div_id);
        setIsLoading(true)
        API.course_list(onGetCourseListResponse, formdata, true)
    }
    const onGetCourseListResponse = {
        success: response => {
            console.log("onGetCourseListResponse====>", response)
            setIsLoading(false)
            setMyCourseData(response.data)
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
            <TouchableOpacity onPress={() => goToNewCourseScreen(item, index)}
            //  style={styles.rcTouchable} 
            >
                <ImageBackground style={styles.rcibgStyle}
                    borderRadius={5}
                    resizeMode="stretch"
                    // source={{ uri: item.course_image.length == 0 ? null : item.course_image[0].image }}
                    source={images.HomeScreen.box_background1Image}
                >
                    <View style={{
                        alignItems: "center"
                    }} >
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
    const goToFilterScreen = () => {
        navigation.navigate("Filter", {
            courseData: MyCourseData
        })
    }


    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={styles.headerImagebg}
                source={images.HomeScreen.backgroundImage}
            >

                <View style={styles.headerContainer} >
                    {/* <View
                        style={{
                            width:25
                        }}
                    /> */}
                    <Text style={styles.homeText} >Home</Text>
                    <TouchableOpacity onPress={goToFilterScreen} >
                        {/* <Text style={{
                            color: "white",
                            fontFamily: font.Medium,
                            fontSize: 22,
                            marginTop: 10,
                            marginRight: 5
                        }} >Filter</Text> */}
                        <FontAwesome5
                            style={styles.filterIconStyle}
                            color="white"
                            size={25}
                            name="filter"
                        />
                    </TouchableOpacity>
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
                            style={{
                                // paddingHorizontal:10
                            }}
                            data={MyCourseData}
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
                        />
                        :
                        <NoNeworkComp
                            onPressButton={getCourses}
                        />
            }
        </View>
    )
}
export default HomeScreen;
