import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderComp from '../../../component/HeaderComp';
import * as globals from './../../../utils/globals';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import Ionicans from 'react-native-vector-icons/Ionicons'
import ButtonComp from '../../../component/ButtonComp';
import { color } from 'react-native-reanimated';
import TouchableComp from '../../../component/TouchableComp';

const chapterDatas = [
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

const SelectChapterScreen = ({
    navigation,
    route
}) => {
    const [chapterData, setChapterData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getChapterData()
    }, [])

    const getChapterData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('course_id', route.params.course_id);
        setIsLoading(true)
        API.course_chapter(onGetCourseChapterResponse, formdata, true)
    }

    const onGetCourseChapterResponse = {
        success: response => {
            console.log("onGetCourseChapterResponse====>", response)
            setChapterData(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const goToCourseDetailsScreen = () => {
        navigation.navigate("CourseDetails")
    }

    const selectChapterHandler = (item, index) => {
        navigation.navigate("AttendCourse", {
            chapter_id: item.chapter_id,
            chapter_name:item.name
        })
    }

    const _renderChapterItem = ({ item, index }) => {
        return (
            // <View style={{
            //     justifyContent:"center",
            //     marginHorizontal:10,
            //     backgroundColor: "white",
            //     height:50,
            //     elevation:2,
            //     borderRadius:2
            // }} >
            //     <Text style={{
            //         fontSize: 20,
            //         fontFamily: font.Regular,
            //         color: colors.DarkGrayColor,
            //         marginLeft:20
            //     }} >{item.name}</Text>
            // </View>
            <TouchableComp
                text1={item.name}
                text2={item.course_progress}
                // buttonText={item.name}
                touchableStyle={{
                    backgroundColor: "white",
                    borderRadius: 4,
                    marginTop: 0
                }}
                onPressTouch={() => selectChapterHandler(item, index)}
                // btnTextStyle={{
                //     color: colors.BlackColor,
                //     fontFamily:font.Regular
                // }}
                from="selectChapter"
            />
        )
    }
    return (
        <View style={styles.viewContainer}>
            <LoadingComp animating={isLoading} />
            <HeaderComp
                navigation={navigation}
                headerText="Select Chapter"
            />
            <FlatList contentContainerStyle={{

            }}
                data={chapterData}
                renderItem={_renderChapterItem}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                marginVertical: 5
                            }}
                        />
                    )
                }}
                ListHeaderComponent={() => {
                    return (
                        <View
                            style={{
                                marginTop: 10
                            }}
                        />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View
                            style={{
                                marginBottom: 10
                            }}
                        />
                    )
                }}
            />
        </View>
    )
}
export default SelectChapterScreen;