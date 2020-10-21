import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as colors from '../../../assets/colors';
import * as images from '../../../assets/images/map';
import * as font from '../../../assets/fonts/fonts';
import { API } from '../../../utils/api';
import * as globals from '../../../utils/globals';
import LoadingComp from '../../../component/LoadingComp';

const searchDatas = [
    {
        "id": "1",
        searchName: "Loream Ipsuml 1",
    },
    {
        "id": "2",
        searchName: "Loream Ipsuml 2",
    },
    {
        "id": "3",
        searchName: "Loream Ipsuml 3",
    }
]

const SearchScreen = ({
    navigation,
}) => {
    const [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setIsSearchText] = useState("");

    useEffect(() => {
        if (searchText !== "") {
            getSearchedCourseData()
        }
    }, [searchText])


    const getSearchedCourseData = () => {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        formdata.append('auth_token', globals.authToken);
        formdata.append('keyword', searchText);
        setIsLoading(true)
        API.search(onGetsearchCourseResponse, formdata, true)
    }

    const onGetsearchCourseResponse = {
        success: response => {
            console.log("onGetsearchCourseResponse====>", response)
            setIsLoading(false)
            setSearchData(response.data)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setSearchData(err.data)
            setIsLoading(false)
        },
        complete: () => { },
    }

    const goToCourse = (item, index) => {
        navigation.navigate("CourseDetails", {
            course_id: item.course_id,
            course_name: item.name
        })
    }

    const _renderSearchData = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.rsdContainer}
                activeOpacity={0.8}
                onPress={() => goToCourse(item, index)}
            >
                <Text style={styles.rsdSearchName} >{item.name}</Text>
                <Image
                    style={styles.rsdImage}
                    source={images.SearchScreen.topImage}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.viewContainer}>
            <View style={styles.headerContainer} >
                <Text style={styles.searchText} >Search</Text>
            </View>
            <View>
                <View style={styles.searchInputContainer} >
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search here"
                        placeholderTextColor={colors.BlueColor}
                        value={searchText}
                        onChangeText={(searchText) => {
                            if (searchText.trim().length == 0) {
                                setIsSearchText(searchText)
                            } else {
                                setIsSearchText(searchText)
                            }
                        }}
                        autoFocus={true}
                        returnKeyType="search"
                    // onSubmitEditing={getSearchedCourseData}
                    />
                    {
                        searchText !== null && searchText !== "" ?
                            <TouchableOpacity onPress={() => {
                                setIsSearchText(null)
                            }} style={styles.closeTouchable} >
                                <Image
                                    style={styles.closeIcon}
                                    source={images.SearchScreen.cancelImage}
                                />
                            </TouchableOpacity>
                            : null
                    }

                </View>
                {
                    isLoading == true ?
                        <LoadingComp withoutModal animating={isLoading}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "red",
                                marginTop: 100
                            }}
                        />
                        :
                        searchData.length == 0 ?
                            <Text style={{
                                fontSize: 20,
                                color: colors.GrayColor,
                                fontFamily: font.Regular,
                                textAlign: "center",
                                marginVertical: 50
                            }} >No Course Found</Text>
                            :
                            <View style={styles.searchDataContainer} >
                                <FlatList
                                    data={searchData}
                                    style={{
                                        // paddingBottom: 100,
                                        maxHeight: 470,
                                    }} showsVerticalScrollIndicator={false}
                                    renderItem={_renderSearchData}
                                    ItemSeparatorComponent={() => {
                                        return (
                                            <View
                                                style={styles.searchListSeparater}
                                            />
                                        )
                                    }}
                                    ListHeaderComponent={() => {
                                        return (
                                            <View
                                                style={styles.searchListHeader}
                                            />
                                        )
                                    }}
                                    ListFooterComponent={() => {
                                        return (
                                            <View
                                                style={styles.searchlistFooter}
                                            />
                                        )
                                    }}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                }
            </View>
        </View >
    )
}
export default SearchScreen;