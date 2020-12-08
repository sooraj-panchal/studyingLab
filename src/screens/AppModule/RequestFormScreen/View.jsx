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
import ImagePicker from 'react-native-image-picker';

const RequestFormScreen = ({
    navigation
}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setIsLoading] = useState(false)
    const [imageUri, setImageUri] = useState("")

    const goToSubmitRequestFormScreen = async () => {
        if (title.trim().length == 0 || description.trim().length == 0) {
            globals.AlertHandler({
                value: "Form cannot empty!",
                text2: "ok"
            })
        } else {
            let formdata = new FormData();
            if (imageUri == "") {
                formdata.append('image', imageUri)
            } else {
                formdata.append('image', {
                    uri: imageUri,
                    name: 'my_photo.jpg',
                    type: 'image/jpg'
                })
            }
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
    const options = {
        title: 'Select Image',
        // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const imagePickHandler = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = { uri: response.uri };
                setImageUri(response.uri)

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                // this.setState({
                //     avatarSource: source,
                // });
            }
        });
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
                <TouchableOpacity style={{
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
                    onPress={imagePickHandler}
                >
                    <Text style={{
                        fontSize: 14,
                        color: "lightgrey",
                        fontFamily: font.Medium,
                        maxWidth: 250
                    }} numberOfLines={2} >{imageUri ? imageUri : "Attach image"}</Text>
                    <Image
                        style={{
                            width: 35,
                            height: 35
                        }}
                        source={images.RequestFormScreen.attachImage}
                    />
                </TouchableOpacity>
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