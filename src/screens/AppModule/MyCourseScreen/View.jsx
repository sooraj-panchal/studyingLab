import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
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

const MyCourseScreen = ({
    navigation
}) => {
    const [MyCourseData, setMyCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // setMyCourseData(MyCourseData)
        getMyCourses()
    }, [])


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
    const attendMyCourseHandler = (item, index) => {
        navigation.navigate("AttendCourse", {
            course_id: item.course_id
        })
    }


    const _renderMyCourseData = ({ item, index }) => {
        return (
            <View style={styles.rmcdCardView} >
                <Image
                    style={styles.rmcdImage}
                    source={images.CourseDetailsScreen.image1Image}
                />
                <Text style={styles.rmcdNewCourseText} >New Course - {item.name}</Text>
                <Text style={styles.rmcdCourseProgressText} >Course Progress</Text>
                <Text style={styles.rmcdPercentage} >51%</Text>
                <View style={styles.rmcdProgressBarContainer} >
                    <ProgressBar
                        progress={0.5}
                        width={300}
                        height={10}
                        borderRadius={2}
                        // borderColor={primaryColor}
                        unfilledColor="#f2f2f2"
                        color="#89d477"
                        borderWidth={0}
                    />
                </View>
                <View style={styles.btnContainer} >
                    <ButtonComp
                        btnStyle={styles.btnLeft}
                        buttonText="Add to Favourite"
                        // onPressButton={}
                        btnTextStyle={styles.btnLeftText}
                    />
                    {/* <ButtonComp
                        btnStyle={[styles.btnRight, {
                            backgroundColor: colors.BlueColor
                        }]}
                        buttonText="Attend Course"
                        onPressButton={() => attendMyCourseHandler(item, index)}
                        btnTextStyle={styles.btnRightText}
                    /> */}
                    <ButtonComp
                        btnStyle={styles.btnRight}
                        buttonText="Generate Certificate"
                        // onPressButton={}
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
                headerText="My Course"
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
export default MyCourseScreen;