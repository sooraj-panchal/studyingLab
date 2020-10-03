import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import BackImageComp from '../../../component/BackImageComp';
import Ionicans from 'react-native-vector-icons/Ionicons'

const CategoryToShowDatas = [
    {
        "id": "1",
        categoryName: "Category 1",
    },
    {
        "id": "2",
        categoryName: "Category 2",
    },
    {
        "id": "3",
        categoryName: "Category 3",
    },
    {
        "id": "4",
        categoryName: "Category 4",
    },
    {
        "id": "5",
        categoryName: "Category 5",
    },
    {
        "id": "6",
        categoryName: "Category 6",
    }
]

const FilterScreen = ({
    navigation
}) => {
    const [CategoryToShowData, setCategoryToShowData] = useState(CategoryToShowDatas);
    useEffect(() => {
        setCategoryToShowData(CategoryToShowData)
    }, [])

    const _renderCategoryToshowData = ({ item, index }) => {
        if (index == 2 || index == 3 || index == 4)
            return (
                <TouchableOpacity style={{
                    width: 100,
                    height: 35,
                    marginLeft: 10,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: "center",
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "lightgrey"
                }} >
                    <Text style={{
                        fontSize: 16,
                        color: "grey",
                        fontFamily: font.Regular
                    }} >{item.categoryName}</Text>
                </TouchableOpacity>
            )
        return (
            <TouchableOpacity style={{
                width: 100,
                height: 35,
                marginLeft: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: "center",
                backgroundColor: colors.BlueColor
            }} >
                <Text style={{
                    fontSize: 16,
                    color: "white",
                    fontFamily: font.Regular
                }} >{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.viewContainer} >
            <View style={{
                height: 90,
                backgroundColor: "#f7f7f7",
                borderBottomWidth: 1,
                borderBottomColor: "#e3e3e3",
                justifyContent: "center",
            }} >
                <Ionicans
                    style={{
                        marginLeft:10,
                    }}
                    size={30}
                    name="md-arrow-back"
                    color={colors.BlueColor}
                    onPress={()=>navigation.goBack()}
                />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                }} >
                    <Text style={{
                        fontSize: 35,
                        color: colors.BlackColor,
                        fontFamily: font.Bold
                    }} >Filter</Text>
                    <Text style={{
                        fontSize: 20,
                        color: colors.BlueColor,
                        marginTop: 10,
                        fontFamily: font.Medium
                    }} >Clear</Text>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 10,
                marginTop: 20
            }} >
                <Text style={{
                    fontSize: 20,
                    fontFamily: font.Medium,
                    color: colors.blak
                }} >SORT BY</Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 5
                }} >
                    <Text style={{
                        fontSize: 20,
                        color: colors.BlueColor,
                        fontFamily: font.Regular
                    }} >Upload date</Text>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                            marginRight: 10,
                        }}
                        source={images.FilterScreen.selectImage}
                    />
                </View>
                <View
                    style={{
                        marginVertical: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#f7f7f7"
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    color: colors.BlackColor,
                    fontFamily: font.Regular,
                }} >View Count</Text>
                <View
                    style={{
                        marginVertical: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#f7f7f7"
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    color: colors.BlackColor,
                    fontFamily: font.Regular,
                }} >Rating</Text>
                <View
                    style={{
                        marginVertical: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#f7f7f7"
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    color: colors.BlackColor,
                    fontFamily: font.Medium,
                    marginTop: 10
                }} >CATEGORY TO SHOW</Text>
            </View>
            <View>
                <FlatList
                    data={CategoryToShowData}
                    renderItem={_renderCategoryToshowData}
                    numColumns={3}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    marginVertical: 5
                                }}
                            />
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View
                                style={{
                                    marginTop: 15
                                }}
                            />
                        )
                    }}
                />
            </View>
            <TouchableOpacity style={{
                backgroundColor: colors.BlueColor,
                height: 50,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: 0
            }} >
                <Text style={{
                    fontSize: 20,
                    fontFamily: font.Medium,
                    color: "white"
                }} >Apply</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FilterScreen;