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
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getSubCategoryData()
    }, [])

    const getSubCategoryData = () => {
        let formdata = new FormData();
        formdata.append('auth_token', globals.authToken);
        setIsLoading(true)
        API.sub_category(onGetSubCategoryResponse, formdata, true)
    }

    const onGetSubCategoryResponse = {
        success: response => {
            console.log("onGetSubCategoryResponse====>", response)
            setCategoryData(response.data)
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

    const _renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={goToCourseDetailsScreen} >
                <ImageBackground style={styles.rcibgStyle}
                    borderRadius={5}
                    source={images.HomeScreen.box_background1Image}
                >
                    <View style={{
                        alignItems: "center"
                    }} >
                        <Image style={styles.rciCataegoryImage}
                            source={images.HomeScreen.icon_1Image}
                        />
                        <Text style={styles.rciCataegoryName} >{item.cat_name}</Text>
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
            <LoadingComp animating={isLoading} />
            <HeaderComp
                navigation={navigation}
                headerText="Course"
            />
            <FlatList contentContainerStyle={styles.listCategoryContainer}
                data={categoryData}
                renderItem={_renderCategoryItem}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
export default NewCourseScreen;