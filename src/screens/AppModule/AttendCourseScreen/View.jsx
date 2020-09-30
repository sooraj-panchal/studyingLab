import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import { set } from 'react-native-reanimated';
import ButtonComp from '../../../component/ButtonComp';

const attendCourseDatas = [
    {
        "id": "1"
    },
    {
        "id": "2"
    },
    {
        "id": "3"
    },
    {
        "id": "4"
    },
    {
        "id": "5"
    }
]

const AttendCourseScreen = ({
    navigation
}) => {
    const [attendCourseData, setAttendCourseData] = useState(attendCourseDatas);
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setAttendCourseData(attendCourseData)
    }, [])

    const goToStartQuiz = () => {
        navigation.navigate("StartQuiz")
    }

    const _renderAttendCourseData = ({ item, index }) => {
        // console.log(index)
        return (
            <View style={{
                width: 340,
                marginTop: 20,
                backgroundColor: "white",
                paddingTop: 5,
                height: 640,
                elevation: 4,
                borderRadius: 5,
                marginHorizontal: 10
            }} >
                {
                    index == 0
                    &&
                    <>
                        <Image
                            style={{
                                width: 320,
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
                            }} >Chapter 1 - Maths</Text>
                        </View>
                    </>
                }
                <Text style={{
                    fontSize: 15,
                    color: colors.GrayColor,
                    fontFamily: font.Medium,
                    marginHorizontal: 10,
                    marginTop: 15,
                    alignSelf: "center"
                }} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                    sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                    asfa sfasfasfsaf
                    </Text>
                <Text style={{
                    fontSize: 15,
                    color: colors.GrayColor,
                    fontFamily: font.Medium,
                    marginHorizontal: 10,
                    marginTop: 15,
                    alignSelf: "center"
                }} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                    sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                    asfa sfasfasfsaf
                    </Text>
                <Text style={{
                    fontSize: 15,
                    color: colors.GrayColor,
                    fontFamily: font.Medium,
                    marginHorizontal: 10,
                    marginTop: 15,
                    alignSelf: "center"
                }} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                    sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                    asfa sfasfasfsaf sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf

                    </Text>
                {
                    index == attendCourseData.length - 1 &&
                    <View style={{
                        position: "absolute",
                        alignSelf: "center",
                        bottom: 30
                    }} >
                        <ButtonComp
                            onPressButton={goToStartQuiz}
                            buttonText="Start Quiz"
                            from="fromSignup"
                            btnStyle={{
                                width: 250
                            }}
                        />
                    </View>
                }
            </View>
        )
    }

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        // console.log("Visible items are", viewableItems);
        // console.log("Changed in this iteration", changed);
        setIndex(viewableItems[0].index)

    }, []);
    return (
        <View style={styles.viewContainer} >
            <View style={{
                // height: 50,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10
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
                }} >{index + 1}/{attendCourseData.length}</Text>
                <View
                    style={{
                        width: 20
                    }}
                />
            </View>
            <FlatList
                data={attendCourseData}
                renderItem={_renderAttendCourseData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                }}
            />
        </View>
    )
}
export default AttendCourseScreen;