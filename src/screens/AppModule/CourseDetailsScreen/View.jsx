import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import HeaderComp from '../../../component/HeaderComp';
import CourseListComp from '../../../component/CourseListComp';


const CourseDetailsScreen = ({
    navigation,
    route
}) => {
    return (
        <View style={styles.viewContainer} >
            <HeaderComp
                navigation={navigation}
                headerText={route.params.course_name}
            />
            <CourseListComp
                route={route}
                navigation={navigation}
            />
        </View>
    )
}
export default CourseDetailsScreen;