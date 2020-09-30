import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
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

const MyCourseScreen = ({
    navigation
}) => {
    const goToAttendCourse = () => {
        navigation.navigate("AttendCourse")
    }
    const [MyCourseData, setMyCourseData] = useState(MyCourseDatas);
    useEffect(() => {
        setMyCourseData(MyCourseData)
    }, [])
    const _renderMyCourseData = () => {
        return (
            <View style={{
                marginHorizontal: 15,
                backgroundColor: "white",
                paddingTop: 5,
                paddingBottom: 20,
                elevation: 4,
                borderRadius: 5,
            }} >
                <Image
                    style={{
                        width: 310,
                        height: 190,
                        resizeMode: "contain",
                        alignSelf: "center"
                    }}
                    source={images.CourseDetailsScreen.image1Image}
                />
                <View style={{
                    marginLeft: 10,
                    marginTop: 10
                }} >
                    <Text style={{
                        fontSize: 20,
                        fontFamily: font.Medium,
                        color: colors.BlackColor
                    }} >New Course - Maths</Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    color: colors.GrayColor,
                    fontFamily: font.Medium,
                    marginTop: 5,
                    marginLeft: 10
                }} >Course Progress</Text>
                <Text style={{
                    fontSize: 16,
                    color: colors.BlackColor,
                    textAlign: "center",
                    marginTop: 10
                }} >51%</Text>
                <View style={{
                    marginLeft: 10,
                    marginTop: 2
                }} >
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
                <View style={{
                    marginTop: 25,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10
                }} >
                    <TouchableOpacity style={{
                        width: 150,
                        height: 45,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        backgroundColor: colors.RedColor
                    }} activeOpacity={0.8} >
                        <Text style={{
                            fontFamily: font.Regular,
                            color: "white",
                            fontSize: 16
                        }} >Add to Favourite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 150,
                        height: 45,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        backgroundColor: "lightgrey"
                    }} activeOpacity={0.8} onPress={goToAttendCourse} >
                        <Text style={{
                            fontFamily: font.Regular,
                            color: "white",
                            fontSize: 15
                        }} >Generate certificate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.viewContainer} >
            <View style={{
                height: 50,
                backgroundColor: colors.BlueColor,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10
            }} >
                <TouchableOpacity onPress={() => navigation.goBack()}  >
                    <Image style={{
                        width: 20,
                        height: 20,
                        resizeMode: "contain"
                    }}
                        source={images.backIcon}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    color: "white",
                    fontFamily: font.Regular,
                    marginLeft: 15
                }} >My Course</Text>
            </View>
            <FlatList
                renderItem={_renderMyCourseData}
                data={MyCourseData}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                marginVertical: 10
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
export default MyCourseScreen;