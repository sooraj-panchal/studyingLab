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
            <TouchableOpacity style={styles.rsdContainer} 
                activeOpacity={0.8}
            >
                <Text style={styles.rsdSearchName} >{item.searchName}</Text>
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
                    />
                    <Image
                        style={styles.closeIcon}
                        source={images.SearchScreen.cancelImage}
                    />
                </View>
                <View style={styles.searchDataContainer} >
                    <FlatList
                        data={searchData}
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
                    />
                </View>
            </View>
        </View>
    )
}
export default SearchScreen;