import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import ButtonComp from '../ButtonComp';
import * as colors from '../../assets/colors';
import * as font from '../../assets/fonts/fonts';
import * as globals from '../../utils/globals';

import LoadingComp from '../LoadingComp';
import { API } from '../../utils/api';
import Ionicans from 'react-native-vector-icons/Ionicons'
import { cos } from 'react-native-reanimated';
import { AppStack } from '../../navigation/navActions';
import AsyncStorage from '@react-native-community/async-storage';

const ModalComp = ({
    toggleModal,
    toggleModalHandler,
    onPress,
    getClassData,
    navigation,
    from
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [classData, setIsClassData] = useState([])
    const [updateState, setIsUpdateState] = useState(0)
    const [isChangeColor, setIsChangeColor] = useState(false)

    useEffect(() => {
        console.log(from)
        if (getClassData == true) {
            let formdata = new FormData();
            formdata.append('auth_token', globals.authToken);
            console.log(classData)
            setIsLoading(true)
            API.division(onGetDivisionResopnse, formdata, true)
        }

    }, [getClassData])

    const onGetDivisionResopnse = {
        success: response => {
            console.log("onGetDivisionResopnse====>", response)
            setIsClassData(response.data)
            setIsLoading(false)
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    const selectClass = (item, index) => {
        classData.map((value, placeindex) =>
            placeindex === index
                ? (classData[placeindex]['isSelected'] = !classData[placeindex]['isSelected'])
                : (classData[placeindex]['isSelected'] = false)
        );
        setIsUpdateState(updateState + 1)
        setIsChangeColor(item.isSelected)
    }

    const renderClassData = ({ item, index }) => {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
            }} >
                <Text style={{
                    fontSize: 20,
                    fontFamily: font.Regular,
                    color: colors.BlackColor
                }} >{item.name}</Text>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 25,
                    height: 25,
                    borderRadius: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: colors.BlueColor
                }}
                    onPress={() => selectClass(item, index)}
                >
                    {
                        item.isSelected == true
                            ?
                            <Ionicans
                                name="md-checkmark"
                                size={20}
                                color={colors.BlueColor}
                            /> : null
                    }

                </TouchableOpacity>
            </View>
        )
    }

    const SubmitSelectedClass = async () => {
        const data = classData.filter((item, index) => {
            return item.isSelected == true
        })
        console.log(data)
        const tokenForRegister = await AsyncStorage.getItem("tokenForRegister")
        let formdata = new FormData();
        if (from == "Profile") {
            formdata.append('token', globals.student_Token);
            formdata.append('div_id', data[0].div_id);
        } else {
            formdata.append('token', tokenForRegister);
            formdata.append('div_id', data[0].div_id);
        }

        setIsLoading(true)
        API.update_division({
            success: response => {
                console.log("onUpdateDivisionResponse====>", response)
                // navigation.dispatch(AppStack);
                setIsLoading(false)
                toggleModalHandler()
                AsyncStorage.setItem("YourGrade", data[0].name)
                AsyncStorage.setItem("div_id", data[0].div_id)
                if (from == "login") {
                    globals.student_Token = tokenForRegister
                    navigation.dispatch(AppStack)
                } else if (from == "Profile") {
                    navigation.dispatch(AppStack)
                } else {
                    navigation.navigate("CheckYourEmail")
                }
            },
            error: err => {
                console.log('err--->' + JSON.stringify(err))
                setIsLoading(false)
            },
            complete: () => { },
        }, formdata, true)

    }

    const onUpdateDivisionResponse = {
        success: response => {
            console.log("onUpdateDivisionResponse====>", response)
            // navigation.dispatch(AppStack);
            setIsLoading(false)
            toggleModalHandler()
            navigation.navigate("CheckYourEmail")
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }

    return (
        <Modal
            isVisible={toggleModal}
            backdropOpacity={0.5}
            onBackButtonPress={toggleModalHandler}
            onBackdropPress={toggleModalHandler}
            useNativeDriver={true}
        >
            <View style={{
                backgroundColor: "white",
                width: "100%",
                height: 450,
                borderRadius: 5
            }}>
                <Text style={{
                    fontSize: 20,
                    color: colors.BlackColor,
                    fontFamily: font.Medium,
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 5
                }} >Select Class</Text>
                {
                    isLoading == true ?
                        <LoadingComp withoutModal animating={isLoading} />
                        :
                        <View style={{
                            height: 350
                        }} >
                            <FlatList
                                data={classData}
                                extraData={classData}
                                renderItem={renderClassData}
                                keyExtractor={(item, index) => index.toString()}
                                ListHeaderComponent={() => {
                                    return (
                                        <View style={{
                                            marginTop: 10
                                        }} />
                                    )
                                }}
                                ListFooterComponent={() => {
                                    return (
                                        <View style={{
                                            marginBottom: 20
                                        }} />
                                    )
                                }}
                                ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{
                                            borderBottomWidth: 1,
                                            marginVertical: 10,
                                            marginHorizontal: 15,
                                            borderBottomColor: colors.LightGrayColor
                                        }} />
                                    )
                                }}
                            />
                        </View>
                }

                <View style={{
                    alignItems: "center",
                    position: "absolute",
                    bottom: 10,
                    alignSelf: "center",
                }} >
                    <ButtonComp
                        buttonText="Submit"
                        btnStyle={{
                            backgroundColor: isChangeColor == false ? colors.LightGrayColor : colors.BlueColor,
                            width: 300,
                            borderRadius: 5,
                            marginLeft: 0,
                        }}
                        disabled={isChangeColor == false ? true : false}
                        onPressButton={SubmitSelectedClass}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalComp;