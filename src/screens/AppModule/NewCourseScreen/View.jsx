import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderComp from '../../../component/HeaderComp';
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

const NewCourseScreen = ({
    navigation,
}) => {
    const [categoryData, setCategoryData] = useState(categoryDatas);
    useEffect(() => {
        setCategoryData(categoryData)
    }, [])

    const goToCourseDetailsScreen = () => {
        navigation.navigate("CourseDetails")
    }

    const _renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={goToCourseDetailsScreen} >
                <ImageBackground style={styles.rcibgStyle}
                    borderRadius={5}
                    source={item.backgroundImage}
                >
                    <View style={{
                        alignItems: "center"
                    }} >
                        <Image style={styles.rciCataegoryImage}
                            source={item.categoryImage}
                        />
                        <Text style={styles.rciCataegoryName} >{item.categoryName}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        )
    }

    const goToSearchScreen = () => {
        navigation.navigate("Search")
    }
    const goToFilterScreen = () => {
        navigation.navigate("Filter")
    }


    return (
        <View style={styles.viewContainer}>
            <HeaderComp
                navigation={navigation}
                headerText="Course"
            />
            <FlatList contentContainerStyle={styles.listCategoryContainer}
                data={categoryData}
                renderItem={_renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}
export default NewCourseScreen;