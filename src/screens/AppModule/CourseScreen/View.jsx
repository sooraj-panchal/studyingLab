import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
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
        categoryName: "Course 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "5",
        categoryName: "Course 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "6",
        categoryName: "Course 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "7",
        categoryName: "Course 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "8",
        categoryName: "Course 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    }
]

const CourseScreen = ({
    navigation,
}) => {
    const [categoryData, setCategoryData] = useState(categoryDatas);
    useEffect(() => {
        setCategoryData(categoryData)
    }, [])
    const goToCourseDatailsScreen = () => {
        navigation.navigate("CourseDetails")
    }
    const _renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={goToCourseDatailsScreen} activeOpacity={0.8} >
                <ImageBackground style={{
                    width: 160,
                    height: 140,
                    marginHorizontal: 5,
                    marginVertical: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    borderRadius={5}
                    source={item.backgroundImage}
                >
                    <View style={{
                        alignItems: "center"
                    }} >
                        <Image style={{
                            width: 60,
                            height: 60,
                            // resizeMode: "contain"
                        }}
                            source={item.categoryImage}
                        />
                        <Text style={{
                            color: "white",
                            fontSize: 16,
                            fontFamily: font.Bold,
                            marginTop: 5
                        }} >{item.categoryName}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.viewContainer}>
            <ImageBackground style={{
                width: Dimensions.get("window").width,
                height: 115,
            }}
                source={images.HomeScreen.backgroundImage}
            >
                <View style={{
                    marginLeft: 10,
                    marginTop: 5
                }} >
                    <Text style={{
                        color: "white",
                        fontFamily: font.Bold,
                        fontSize: 35
                    }} >Course</Text>
                </View>
                <TouchableOpacity style={{
                    height: 45,
                    marginHorizontal: 10,
                    marginTop: 5,
                    borderRadius: 2,
                    backgroundColor: "white",
                    justifyContent: "center",
                    paddingLeft: 10
                }}
                    activeOpacity={0.8}
                >
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }} >
                        <Image style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain"
                        }}
                            source={images.HomeScreen.searchImage}
                        />
                        <Text style={{
                            fontSize: 15,
                            color: colors.GrayColor,
                            fontFamily: font.Regular,
                            marginLeft: 10
                        }} >Search for anything</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
            <FlatList contentContainerStyle={{
                alignItems: "center",
                marginTop: 10,
                paddingBottom: 100
            }}
                data={categoryData}
                renderItem={_renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}
export default CourseScreen;