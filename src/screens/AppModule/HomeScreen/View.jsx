import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const categoryDatas = [
    {
        "id": "1",
        categoryName: "Category 1",
        backgroundImage: images.HomeScreen.box_background1Image,
        categoryImage: images.HomeScreen.icon_1Image
    },
    {
        "id": "2",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "3",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "4",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "5",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "6",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "7",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    },
    {
        "id": "8",
        categoryName: "Category 2",
        backgroundImage: images.HomeScreen.box_background2Image,
        categoryImage: images.HomeScreen.icon_2Image
    }
]

const HomeScreen = ({
    navigation,
}) => {
    const [categoryData, setCategoryData] = useState(categoryDatas);
    useEffect(() => {
        setCategoryData(categoryData)
    }, [])

    const goToNewCourseScreen = () => {
        navigation.navigate("NewCourse")
    }

    const _renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={goToNewCourseScreen} >
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
            <FlatList contentContainerStyle={styles.listCategoryContainer}
                data={categoryData}
                renderItem={_renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}
export default HomeScreen;