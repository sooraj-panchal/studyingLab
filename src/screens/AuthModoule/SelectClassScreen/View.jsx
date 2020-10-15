import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Picker, } from 'react-native';
import BackImageComp from '../../../component/BackImageComp';
import styles from './styles';
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ProgressBar from 'react-native-progress/Bar';
import HeaderComp from '../../../component/HeaderComp';
import ButtonComp from '../../../component/ButtonComp';
import { API } from '../../../utils/api';
import LoadingComp from '../../../component/LoadingComp';
import * as globals from './../../../utils/globals';
import Stars from 'react-native-stars';
import Modal from 'react-native-modal';


const reviewDatas = [
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

const SelectClassScreen = ({
    navigation
}) => {
    const [reviewData, setReviewData] = useState(reviewDatas);
    const [isLoading, setIsLoading] = useState(false)
    const [selectClass, setIsSelectClass] = useState("")

    useEffect(() => {
        // setReviewData(reviewData)
        // getMyCourses()
    }, [])


    // const getMyCourses = () => {
    //     let formdata = new FormData();
    //     formdata.append('token', globals.student_Token);
    //     setIsLoading(true)
    //     API.get_my_course(onGetMyCourseResponse, formdata, true)
    // }

    // const onGetMyCourseResponse = {
    //     success: response => {
    //         console.log("onGetMyCourseResponse====>", response)
    //         setIsLoading(false)
    //         setMyCourseData(response.data)
    //     },
    //     error: err => {
    //         console.log('err--->' + JSON.stringify(err))
    //         setIsLoading(false)
    //     },
    //     complete: () => { },
    // }
    // const attendMyCourseHandler = (item, index) => {
    //     navigation.navigate("AttendCourse", {
    //         course_id: item.course_id
    //     })
    // }

    return (
        <View style={{
            backgroundColor: "white",
            flex: 1
        }} >
           
        </View>
    )
}
export default SelectClassScreen;