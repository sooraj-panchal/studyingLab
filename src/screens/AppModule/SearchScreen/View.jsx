import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as colors from '../../../assets/colors';
import * as images from '../../../assets/images/map';
import * as font from '../../../assets/fonts/fonts';

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
    const [searchData, setCategoryData] = useState(searchDatas);
    useEffect(() => {
        setCategoryData(searchData)
    }, [])

    const _renderSearchData = ({ item, index }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 30,
            }} 
                activeOpacity={0.8}
            >
                <Text style={{
                    fontSize: 16,
                    fontFamily: font.Regular,
                    color: "white"
                }} >{item.searchName}</Text>
                <Image
                    style={{
                        width: 15,
                        height: 15,
                        resizeMode: "contain",
                    }}
                    source={images.SearchScreen.topImage}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.viewContainer}>
            <View style={{
                backgroundColor: colors.BlueColor,
                height: 55,
                justifyContent: "center",
                paddingLeft: 15
            }} >
                <Text style={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: font.Regular
                }} >Search</Text>
            </View>
            <View>
                <View style={{
                    backgroundColor: "white",
                    borderRadius: 25,
                    marginHorizontal: 15,
                    height: 50,
                    elevation: 5,
                    // alignSelf:"center",
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <TextInput
                        style={{
                            paddingLeft: 20,
                            fontSize: 18,
                            width: 250,
                            color: colors.BlueColor
                        }}
                        placeholder="Search here"
                        placeholderTextColor={colors.BlueColor}
                    />
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                            position: "absolute",
                            right: 20
                        }}
                        source={images.SearchScreen.cancelImage}
                    />
                </View>
                <View style={{
                    backgroundColor: colors.BlueColor,
                    marginHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 20,
                    marginTop: 20,
                }} >
                    <FlatList
                        data={searchData}
                        renderItem={_renderSearchData}
                        ItemSeparatorComponent={() => {
                            return (
                                <View
                                    style={{
                                        borderWidth: 0.2,
                                        marginVertical: 10,
                                        marginHorizontal: 20,
                                        borderColor: "white"
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
            </View>
        </View>
    )
}
export default SearchScreen;