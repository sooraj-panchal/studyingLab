import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import HeaderComp from '../../../component/HeaderComp';
import ButtonComp from '../../../component/ButtonComp';

const MyCourseDatas = [
    {
        "id": "1",
    },
    {
        "id": "2",
    },
    {
        "id": "3",
    },
    {
        "id": "4",
    },
    {
        "id": "5",
    },
    {
        "id": "6",
    },
    {
        "id": "7",
    },
    {
        "id": "8",
    }
]

const FavoriteScreen = ({
    navigation
}) => {
    const [MyCourseData, setMyCourseData] = useState(MyCourseDatas);
    useEffect(() => {
        setMyCourseData(MyCourseData)
    }, [])

    const _renderMyCourseData = () => {
        return (
            <View style={styles.rmcdCardView} >
                <Image
                    style={styles.rmcdImage}
                    source={images.CourseDetailsScreen.image1Image}
                />
                <Text style={styles.rmcdNewCourseText} >New Course - Maths</Text>
                <View style={styles.btnContainer} >
                    <ButtonComp
                        btnStyle={styles.btnLeft}
                        buttonText="Remove"
                        // onPressButton={}
                        btnTextStyle={styles.btnLeftText}
                    />
                    <ButtonComp
                        btnStyle={styles.btnRight}
                        buttonText="Continue"
                        // onPressButton={}
                        btnTextStyle={styles.btnRightText}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.viewContainer} >
            <HeaderComp
                navigation={navigation}
                headerText="Favorite"
            />
            <FlatList
                renderItem={_renderMyCourseData}
                data={MyCourseData}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={styles.listMyCourseSeparater}
                        />
                    )
                }}
                ListHeaderComponent={() => {
                    return (
                        <View
                            style={styles.listMyCourseHeader}
                        />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View
                            style={styles.listMyCourseFooter}
                        />
                    )
                }}
            />
        </View>
    )
}
export default FavoriteScreen;