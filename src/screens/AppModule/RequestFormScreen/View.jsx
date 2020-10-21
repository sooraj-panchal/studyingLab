import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import styles from "./styles";
import * as images from '../../../assets/images/map';
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
import ButtonComp from "../../../component/ButtonComp";
import { API } from "../../../utils/api";
import * as globals from "../../../utils/globals";
import LoadingComp from "../../../component/LoadingComp";
const RequestFormScreen = ({
    navigation
}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setIsLoading] = useState(false)


    const goToSubmitRequestFormScreen = async () => {
        if (title.trim().length == 0 || description.trim().length == 0) {
            globals.AlertHandler({
                value: "Form cannot empty!",
                text2: "ok"
            })
        } else {
            let formdata = new FormData();
            formdata.append('token', globals.student_Token);
            formdata.append('title', title);
            formdata.append('description', description);
            setIsLoading(true)
            API.add_request_form(onGetAddRequestFormResponse, formdata, true)
        }
    }
    const onGetAddRequestFormResponse = {
        success: response => {
            console.log("onGetAddRequestFormResponse====>", response)
            setIsLoading(false)
            navigation.navigate("SubmitRequestForm")
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
            setIsLoading(false)
        },
        complete: () => { },
    }
    return (
        <View style={styles.viewContainer} >
            <LoadingComp animating={loading} />
            <View style={{
                height: 50,
                backgroundColor: colors.BlueColor,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10
            }} >
                <TouchableOpacity onPress={() => navigation.goBack()}  >
                    <Image style={{
                        width: 20,
                        height: 20,
                        resizeMode: "contain"
                    }}
                        source={images.backIcon}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    color: "white",
                    fontFamily: font.Regular,
                    marginLeft: 15
                }} >Request Form</Text>
            </View>
            <View style={{
                marginTop: 15
            }} >
                <TextInput style={{
                    marginHorizontal: 15,
                    height: 50,
                    backgroundColor: "white",
                    paddingLeft: 10,
                    elevation: 3,
                    borderRadius: 2,
                    fontSize: 20
                }}
                    placeholder="Title.."
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                />
                <TextInput style={{
                    marginHorizontal: 15,
                    height: 300,
                    backgroundColor: "white",
                    paddingLeft: 10,
                    elevation: 3,
                    borderRadius: 2,
                    fontSize: 20,
                    marginTop: 15,
                    textAlignVertical: "top"
                }}
                    multiline={true}
                    placeholder="Type here.."
                    value={description}
                    onChangeText={(description) => setDescription(description)}
                />
                {/* <View style={{
                    marginHorizontal: 15,
                    height: 50,
                    backgroundColor: "white",
                    elevation: 3,
                    borderRadius: 2,
                    fontSize: 20,
                    marginTop: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10
                }}
                >
                    <Text style={{
                        fontSize: 14,
                        color: "lightgrey",
                        fontFamily: font.Medium
                    }} >Attach file or image</Text>
                    <Image
                        style={{
                            width: 35,
                            height: 35
                        }}
                        source={images.RequestFormScreen.attachImage}
                    />
                </View> */}
            </View>
            <View style={{
                marginTop: 30,
                alignSelf: "center"
            }} >
                <ButtonComp
                    onPressButton={goToSubmitRequestFormScreen}
                    buttonText="Send"
                    from="fromSignup"
                />
            </View>
        </View>
    )
}
export default RequestFormScreen;