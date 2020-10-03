// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import BackImageComp from '../../../component/BackImageComp';
// import styles from './styles';
// import * as images from '../../../assets/images/map';
// import * as colors from '../../../assets/colors';
// import * as font from '../../../assets/fonts/fonts';


// const CourseDetailsScreen = ({
//     navigation
// }) => {
//     const goToAttendCourse =()=>{
//         navigation.navigate("AttendCourse")
//     }
//     return (
//         <View style={styles.viewContainer} >
//             <View style={{
//                 height: 50,
//                 backgroundColor: colors.BlueColor,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 paddingLeft: 10
//             }} >
//                 <TouchableOpacity onPress={() => navigation.goBack()}  >
//                     <Image style={{
//                         width: 20,
//                         height: 20,
//                         resizeMode: "contain"
//                     }}
//                         source={images.backIcon}
//                     />
//                 </TouchableOpacity>
//                 <Text style={{
//                     fontSize: 18,
//                     color: "white",
//                     fontFamily: font.Regular,
//                     marginLeft: 15
//                 }} >Course 1</Text>
//             </View>
//             <ScrollView contentContainerStyle={{
//                 paddingBottom: 50
//             }} >
//                 <View style={{
//                     marginHorizontal: 15,
//                     marginTop: 20,
//                     backgroundColor: "white",
//                     paddingTop: 5,
//                     paddingBottom: 20,
//                     elevation: 4,
//                     borderRadius: 5,
//                 }} >
//                     <Image
//                         style={{
//                             width: 310,
//                             height: 190,
//                             resizeMode: "contain",
//                             alignSelf: "center"
//                         }}
//                         source={images.CourseDetailsScreen.image1Image}
//                     />
//                     <View style={{
//                         marginLeft: 10,
//                         marginTop: 10
//                     }} >
//                         <Text style={{
//                             fontSize: 20,
//                             fontFamily: font.Medium,
//                             color: colors.BlackColor
//                         }} >New Course - Maths</Text>
//                     </View>
// <View style={{
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//     marginTop: 10
// }} >
//     <View>
//         <View style={{
//             flexDirection: "row",
//         }} >
//             <View style={{}} >
//                 <Image
//                     style={{
//                         width: 30,
//                         height: 30,
//                         resizeMode: "contain"
//                     }}
//                     source={images.CourseDetailsScreen.likeImage}
//                 />
//                 <Text style={{
//                     fontSize: 14,
//                     color: colors.GrayColor,
//                     fontFamily: font.React
//                 }} >200</Text>
//             </View>
//             <View style={{}} >
//                 <Image
//                     style={{
//                         width: 25,
//                         height: 25,
//                         resizeMode: "contain",
//                         marginLeft: 15,
//                         marginTop: 5
//                     }}
//                     source={images.CourseDetailsScreen.shareImage}
//                 />
//             </View>
//         </View>
//     </View>
//     <View style={{}} >
//         <Image
//             style={{
//                 width: 25,
//                 height: 25,
//                 resizeMode: "contain",
//                 marginLeft: 10
//             }}
//             source={images.CourseDetailsScreen.messageImage}
//         />
//     </View>
// </View>
// <Text style={{
//     fontSize: 15,
//     color: colors.GrayColor,
//     fontFamily: font.Medium,
//     marginHorizontal: 10,
//     marginTop: 20,
//     alignSelf: "center"
// }} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
//     sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
//     asfa sfasfasfsaf
// </Text>
//                     <View style={{
//                         marginTop: 20,
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         paddingHorizontal: 10
//                     }} >
//                         <TouchableOpacity style={{
//                             width: 150,
//                             height: 45,
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: 5,
//                             backgroundColor: colors.LightGrayColor
//                         }} activeOpacity={0.8} >
//                             <Text style={{
//                                 fontFamily: font.Regular,
//                                 color: colors.BlackColor,
//                                 fontSize: 16
//                             }} >Add to Favourite</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{
//                             width: 150,
//                             height: 45,
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: 5,
//                             backgroundColor: colors.BlueColor
//                         }} activeOpacity={0.8} onPress={goToAttendCourse} >
//                             <Text style={{
//                                 fontFamily: font.Regular,
//                                 color: "white",
//                                 fontSize: 16
//                             }} >Attend Course</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={{
//                     marginHorizontal: 15,
//                     paddingVertical: 5,
//                     backgroundColor: "white",
//                     elevation: 4,
//                     borderRadius: 5,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: 20
//                 }} >
//                     <Image
//                         style={{
//                             width: 310,
//                             height: 190,
//                             resizeMode: "contain",
//                             alignSelf: "center"
//                         }}
//                         source={images.CourseDetailsScreen.image2Image}
//                     />
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }
// export default CourseDetailsScreen;



import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import * as images from '../../../assets/images/map';
import HeaderComp from '../../../component/HeaderComp';
import ButtonComp from '../../../component/ButtonComp';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
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

const CourseDetailsScreen = ({
    navigation
}) => {
    const [MyCourseData, setMyCourseData] = useState(MyCourseDatas);
    useEffect(() => {
        setMyCourseData(MyCourseData)
    }, [])
    const goToAttendCourse = () => {
        navigation.navigate("AttendCourse")
    }
    const _renderMyCourseData = () => {
        return (
            <View style={styles.rmcdCardView} >
                <Image
                    style={styles.rmcdImage}
                    source={images.CourseDetailsScreen.image1Image}
                />
                <Text style={styles.rmcdNewCourseText} >New Course - Maths</Text>
                <View style={styles.likeShareCommentContainer} >
                    <View>
                        <View style={{
                            flexDirection: "row",
                        }} >
                            <>
                                <Image
                                    style={styles.likeImage}
                                    source={images.CourseDetailsScreen.likeImage}
                                />
                                <Text style={styles.likeText} >200</Text>
                            </>
                            <>
                                <Image
                                    style={styles.shareImage}
                                    source={images.CourseDetailsScreen.shareImage}
                                />
                            </>
                        </View>
                    </View>
                    <>
                        <Image
                            style={styles.messageImage}
                            source={images.CourseDetailsScreen.messageImage}
                        />
                    </>
                </View>
                <Text style={styles.longText} >loream ipsulm lodadsda ,sdsadas sdadsadsdasda sdadsda dsdasdasfsgetasfs dsadads
                sdasdsd dasdads sdadas dssadassffafsff fsfasasfasasfs sfafsafsafs fsafasafsfasf
                asfa sfasfasfsaf
                    </Text>
                <View style={styles.btnContainer} >
                    <ButtonComp
                        btnStyle={styles.btnLeft}
                        buttonText="Add to Favourite"
                        // onPressButton={}
                        btnTextStyle={styles.btnLeftText}
                    />
                    <ButtonComp
                        btnStyle={styles.btnRight}
                        buttonText="Attend Course"
                        // onPressButton={}
                        onPressButton={goToAttendCourse}
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
                headerText="Course 1"
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
export default CourseDetailsScreen;