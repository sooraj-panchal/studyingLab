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

const categoryDatas = [
    {
        "id": "1",
        categoryName: "Category 1",
        backgroundImage: images.HomeScreen.box_background1Image,
        categoryImage: images.HomeScreen.icon_1Image
    },
    {
        "id": "1",
        categoryName: "Category 1",
        backgroundImage: images.HomeScreen.box_background1Image,
        categoryImage: images.HomeScreen.icon_1Image
    },
]

const HomeScreen = ({
    navigation,
}) => {
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log("url========>", url)
                const route = url.replace(/.*?:\/\//g, '');
                const id = route.match(/\/([^\/]+)\/?$/)[1];
                const routeName = route.split('/')[1];
                console.log("id is ", id)
                console.log("routeName is ", routeName)
                // navigation.navigate(routeName)
            }
        });

        // var NativeLinking = require("../../../../node_modules/react-native/Libraries/Linking/NativeLinking").default;
        // NativeLinking.getInitialURL().then((url) => {
        //     console.log('Initial url is: ' + url);
        // }).catch(err => console.error('An error occurred', err));

        // Linking.addEventListener('url', handleOpenURL);
        // return (() => {
        //     Linking.removeEventListener('url', handleOpenURL);
        //   })
        getCategoryData()
    }, [])

    const handleOpenURL = (event) => { // D
        // return console.log("event= === = >", event)
        const route = event.replace(/.*?:\/\//g, '');
        // const id = route.match(/\/([^\/]+)\/?$/)[1];
        const routeName = route.split('/')[0];

        console.log(routeName)

    }


    const getCategoryData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.category(onGetCategoryResponse, formdata, true)
    }

    const onGetCategoryResponse = {
        success: response => {
            console.log("onGetCategoryResponse====>", response)
            setCategoryData(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const goToNewCourseScreen = (item, index) => {
        navigation.navigate("NewCourse",{
            cat_id:item.cat_id
        })
    }

    const _renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => goToNewCourseScreen(item, index)}>
                <ImageBackground style={styles.rcibgStyle}
                    borderRadius={5}
                    source={images.HomeScreen.box_background1Image}
                >
                    <View style={{
                        alignItems: "center"
                    }} >
                        <Image style={styles.rciCataegoryImage}
                            source={images.HomeScreen.icon_2Image}
                        />
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
        navigation.navigate("Filter")
    }


    return (
        <View style={styles.viewContainer}>
            <LoadingComp animating={isLoading} />
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
            {/* {
                isLoading ?
                    <LoadingComp animating={isLoading} withoutModal />
                    : */}
            <FlatList contentContainerStyle={styles.listCategoryContainer}
            style={{
                // paddingHorizontal:10
            }}
                data={categoryData}
                renderItem={_renderCategoryItem}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* } */}
        </View>
    )
}
export default HomeScreen;