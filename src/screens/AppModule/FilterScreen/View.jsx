import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import * as globals from '../../../utils/globals';

import BackImageComp from '../../../component/BackImageComp';
import Ionicans from 'react-native-vector-icons/Ionicons'
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';

const sortByDatas = [
    {
        "id": "1",
        name: "Upload date",
    },
    {
        "id": "2",
        name: "Rating",
    },
]

const FilterScreen = ({
    navigation,
    route
}) => {
    const [CategoryToShowData, setCategoryToShowData] = useState(route.params.courseData);
    const [isLoading, setIsLoading] = useState(false);
    // const [sortByData, setSortByData] = useState([]);
    const [updateData, setUpdateData] = useState(0)
    const [selectFilter, setSelectFilter] = useState(false)

    useEffect(() => {
        const cateGoryFilterData = CategoryToShowData.map((item, index) => {
            item.isSelectedCategory = false
            return item
        })
        setCategoryToShowData(cateGoryFilterData)
        // setSortByData(sortByDatas)
    }, [])

    const selectCategoryHandler = (item, index) => {
        CategoryToShowData[index]["isSelectedCategory"] = !CategoryToShowData[index]["isSelectedCategory"]
        setUpdateData(updateData + 1)
        let data = CategoryToShowData.filter((item, index) => {
            return item.isSelectedCategory == true
        }).map((item) => {
            return item.isSelectedCategory
        }).toString()
        setSelectFilter(data)
    }

    const applyFilter = () => {
        const cateGoryFilterData = CategoryToShowData.filter((item, index) => {
            return item.isSelectedCategory == true
        }).map((item, index) => {
            return item.course_id
        }).toString()
        let formdata = new FormData();
        formdata.append('course_id', cateGoryFilterData);
        formdata.append('token', globals.student_Token);
        setIsLoading(true)
        API.filter_data(onGetfilter_dataResponse, formdata, true)
    }
    const onGetfilter_dataResponse = {
        success: response => {
            console.log("onGetfilter_dataResponse====>", response.data)
            setIsLoading(false)
            navigation.navigate("Home", {
                categoryDataFromFilter: response.data,
                fromFilter: "ApplyFilter"
            })
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }
    const _renderCategoryToshowData = ({ item, index }) => {
        let backgroundColor
        let textColor
        let borderColor
        let borderWidth
        if (item.isSelectedCategory == true) {
            backgroundColor = colors.BlueColor
            textColor = "white"
            // borderColor = null
        } else {
            backgroundColor = "white"
            textColor = colors.GrayColor
            borderColor = colors.LightGrayColor
            borderWidth = 1
        }
        return (
            <TouchableOpacity style={{
                width: 100,
                height: 35,
                marginLeft: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: "center",
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
                borderColor: borderColor
            }} onPress={() => selectCategoryHandler(item, index)}  >
                <Text style={{
                    fontSize: 16,
                    color: textColor,
                    fontFamily: font.Regular
                }} >{item.name}</Text>
            </TouchableOpacity>
        )
    }

    // const selectSortByFilterHandler = (item, index) => {
    //     sortByData.map((value, placeindex) =>
    //         placeindex === index
    //             ? (sortByData[placeindex]["isSelectSortByFilter"] = !sortByData[placeindex]["isSelectSortByFilter"])
    //             : (sortByData[placeindex]['isSelectSortByFilter'] = false)
    //     );
    //     setUpdateData(updateData + 1)

    // }
    // const _renderSortByData = ({ item, index }) => {
    //     let textColor
    //     if (item.isSelectSortByFilter == true) {
    //         textColor = colors.BlueColor
    //     } else {
    //         textColor = colors.GrayColor
    //     }
    //     return (
    //         <View>
    //             <TouchableOpacity style={{
    //                 flexDirection: "row",
    //                 alignItems: "center",
    //                 justifyContent: "space-between",
    //                 marginTop: 5
    //             }} onPress={() => selectSortByFilterHandler(item, index)} >
    //                 <Text style={{
    //                     fontSize: 20,
    //                     color: textColor,
    //                     fontFamily: font.Regular
    //                 }} >{item.name}</Text>
    //                 {
    //                     item.isSelectSortByFilter == true &&
    //                     <Image
    //                         style={{
    //                             width: 20,
    //                             height: 20,
    //                             resizeMode: "contain",
    //                             marginRight: 10,
    //                         }}
    //                         source={images.FilterScreen.selectImage}
    //                     />
    //                 }
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }
    const clearFilter = () => {
        // navigation.dispatch(AppStack)
        navigation.navigate("Home", {
            fromFilter: "clearFilter"
        })
    }

    return (
        <View style={styles.viewContainer} >
            <LoadingComp animating={isLoading} />
            <View style={styles.headerView} >
                <Ionicans
                    style={styles.headerback}
                    size={30}
                    name="md-arrow-back"
                    color={colors.BlueColor}
                    onPress={() => navigation.goBack()}
                />
                <View style={styles.filterView} >
                    <Text style={styles.filterText} >Filter</Text>
                    <TouchableOpacity onPress={clearFilter}>
                        <Text style={styles.clearText} >Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.categoryView} >
                {/* <Text style={{
                    fontSize: 20,
                    fontFamily: font.Medium,
                    color: colors.blak
                }} >SORT BY</Text>

                <View
                    style={{
                        marginVertical: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#f7f7f7"
                    }}
                />
                <FlatList
                    data={sortByData}
                    renderItem={_renderSortByData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    marginVertical: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#f7f7f7"
                                }}
                            />
                        )
                    }}
                /> */}
                {/* <View
                    style={{
                        marginVertical: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#f7f7f7"
                    }}
                /> */}
                <Text style={styles.categoryToShowText} >COURSE TO SHOW</Text>
            </View>
            <View>
                <FlatList
                    data={CategoryToShowData}
                    renderItem={_renderCategoryToshowData}
                    numColumns={3}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={styles.separater}
                            />
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View
                                style={styles.headerList}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <TouchableOpacity style={[{
                backgroundColor: selectFilter == false ? colors.LightGrayColor : colors.BlueColor,
            }, styles.applyButton]} onPress={applyFilter} disabled={selectFilter == false ? true : false} >
                <Text style={styles.applybuttonText} >Apply</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FilterScreen;