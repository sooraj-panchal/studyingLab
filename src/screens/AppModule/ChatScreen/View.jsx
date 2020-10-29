import React from 'react'
import { GiftedChat, Bubble, Send, Time, Day, Avatar, Composer } from 'react-native-gifted-chat'
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import Ionicans from 'react-native-vector-icons/Ionicons'
import * as colors from '../../../assets/colors';
import * as font from '../../../assets/fonts/fonts';
// import { BackIconWhite } from '../../../Components/BackIcon';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as globals from '../../../utils/globals';
import { API } from '../../../utils/api';
export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            driver_details: 5
        }
    }
    onSend = async (messages) => {
        console.log(messages)
        const { text, user, createdAt } = messages[0]
        let formdata = new FormData();
        formdata.append('token', globals.student_Token)
        formdata.append('message', text);
        formdata.append('createdAt', new Date().getTime());
        API.add_message(this.onGetMessageSendResponse, formdata, true)
        this.setState((previousMessages) => {
            return {
                messages: GiftedChat.append(previousMessages.messages, messages)
            }
        })
    }

    // 2020-10-20T11:00:11.335Z

    onGetMessageSendResponse = {
        success: response => {
            console.log("onGetMessageSendResponse====>", response)
            // const data = response.data.map((item, index) => {
            //     item.text = item.message,
            //         item._id = Math.random(1),
            //         item.createdAt = JSON.parse(item.time)
            //     item.user = {
            //         _id: item.token == "" ? item.admin_id : item.token
            //     }
            //     return item
            // })
            // this.setState({
            //     messages: data
            // })
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
        },
        complete: () => { },
    }
    async componentDidMount() {
        let formdata = new FormData();
        formdata.append('token', globals.student_Token);
        API.chat(this.onGetMessagesResponse, formdata, true)
    }

    onGetMessagesResponse = {
        success: response => {
            console.log("onGetMessagesResponse====>", response)

            const data = response.data.map((item, index) => {
                item.text = item.message,
                    item._id = Math.random(1),
                    item.createdAt = JSON.parse(item.time)
                item.user = {
                    _id: item.token == "" ? item.admin_id : item.token
                }
                return item
            })
            this.setState({
                messages: data
            })
        },
        error: err => {
            console.log('err--->' + JSON.stringify(err))
        },
        complete: () => { },
    }

    renderSend = (props) => {
        return (
            <Send {...props} containerStyle={{
                justifyContent: "center"
            }}  >
                <Ionicans name="ios-send" size={25} color={colors.BlueColor} style={{
                    marginRight: 15
                }} />
            </Send>
        )
    }
    // componentWillUnmount() {
    //     firebaseSvc.refOff();
    // }

    // setIsTyping = () => {
    //     this.setState({
    //         isTyping: !this.state.isTyping,
    //     })
    // }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#f3f3f3"
            }} >
                <View
                    style={{
                        height: 90,
                        backgroundColor: colors.BlueColor
                    }}
                >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicans
                            name="ios-arrow-back"
                            size={28}
                            color="white"
                            style={{
                                marginLeft: 10,
                                marginTop: 10
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{
                        marginLeft: 30,
                        marginTop: 5,
                        flexDirection: "row",
                        marginHorizontal: 20,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }} >
                        <Text style={{
                            fontSize: 25,
                            color: "white",
                            fontFamily: font.Bold
                        }} >Admin</Text>
                        <Fontisto
                            name="more-v-a"
                            size={20}
                            color="white"
                            style={{
                            }}
                            onPress={() => {
                                alert("hi")
                            }}
                        />
                    </View>
                </View>
                <GiftedChat
                    messages={this.state.messages}
                    // onSend={messagess => this.onSend(messagess)}
                    onSend={this.onSend}

                    user={{
                        _id: "1",
                        // additional custom parameters
                    }}
                    // isTyping={true}
                    // renderUsernameOnMessage={true}
                    containerStyle={{
                        borderTopWidth: 0,
                        borderTopColor: 0,
                        backgroundColor: "white",
                        elevation: 1,
                        borderWidth: 1,
                        borderColor: "#f7f7f7",
                        marginHorizontal: 10,
                        alignItems: "center",
                        borderRadius: 4,
                        bottom: 10,
                        left: 0,
                        right: 0,
                    }}
                    alwaysShowSend={true}
                    renderComposer={props => {
                        return (
                            <Composer
                                {...props}
                                textInputProps={{ keyboardType: 'visible-password' }}
                            />
                        )
                    }}
                    // showUserAvatar={false}
                    renderBubble={props => {
                        return (
                            <Bubble
                                {...props}
                                textStyle={{
                                    right: {
                                        color: "black",
                                        fontSize: 14,
                                        fontFamily: font.Regular,
                                    },
                                    left: {
                                        color: "white",
                                        fontSize: 14,
                                        fontFamily: font.Regular,
                                    },
                                }}
                                wrapperStyle={{
                                    left: {
                                        // right:40,
                                        minWidth: 100,
                                        backgroundColor: colors.BlueColor,
                                        elevation: 2,
                                        bottom: 10,
                                        marginBottom: 5,
                                        marginRight: 40,
                                        // borderTopLeftRadius: 1,
                                        // borderTopRightRadius: 10,
                                        // borderBottomLeftRadius: 10,
                                        // borderBottomRightRadius: 10,
                                        // borderRadius: 10,
                                    },
                                    right: {
                                        bottom: 10,
                                        minWidth: 100,
                                        elevation: 1,
                                        marginBottom: 5,
                                        backgroundColor: "#e3e3e3",
                                        // borderTopLeftRadius: 10,
                                        // borderTopRightRadius: 0,
                                        // borderBottomLeftRadius: 10,
                                        // borderBottomRightRadius: 10,
                                        // borderRadius: 0
                                    },

                                }}
                                bottomContainerStyle={{
                                    left: {
                                        flexDirection: "row",
                                        justifyContent: "flex-end"
                                    },
                                    right: {
                                        flexDirection: "row",
                                        justifyContent: "flex-end",
                                        bottom: 2
                                    }
                                }}
                                containerToPreviousStyle={{
                                    left: {
                                        borderTopLeftRadius: 5,
                                        borderBottomLeftRadius: 5
                                    },
                                    right: {
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5
                                    }
                                }}
                                containerToNextStyle={{
                                    left: {
                                        borderTopLeftRadius: 5,
                                        borderBottomLeftRadius: 20
                                    },
                                    right: {
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 20
                                    }
                                }}
                                tickStyle={{
                                    fontSize: 12,
                                    bottom: 2,
                                    color: "green"
                                }}

                            />
                        );
                    }}
                    renderTime={props => {
                        return (
                            <Time
                                {...props}
                                containerStyle={{
                                    // left: {
                                    //     bottom: 3,
                                    //     right: 5,
                                    //     marginBottom: 0,
                                    // },
                                    // right: {
                                    //     bottom: 5,
                                    //     right: 5,
                                    //     marginBottom: 0
                                    // }

                                }}
                                timeTextStyle={{
                                    left: {
                                        color: "lightgrey",

                                    },
                                    right: {
                                        color: "grey",
                                    }
                                }}
                            />
                        )
                    }}
                    renderSend={this.renderSend}
                    textInputStyle={{
                        // backgroundColor:"red",
                        lineHeight: null,
                        marginBottom: 0
                    }}
                    renderDay={props => {
                        return (
                            <Day
                                {...props}
                                containerStyle={{
                                    width: 110,
                                    height: 30,
                                    elevation: 0.5,
                                    backgroundColor: "#e3e3e3",
                                    alignSelf: "center",
                                    marginBottom: 30,
                                    borderRadius: 20
                                }}
                                textStyle={{
                                    fontSize: 12,
                                    fontFamily: font.Regular,
                                    color: "grey"
                                }}
                            />
                        )
                    }}
                    renderAvatar={props => {
                        return (
                            <Avatar
                                {...props}
                                imageStyle={{
                                    left: {
                                        height: null,
                                        width: null,
                                        borderRadius: null,
                                    }
                                }}
                                containerStyle={{
                                    left: {
                                        marginRight: 0
                                    }
                                }}
                            />
                        )
                    }}
                    // inverted={false}
                    renderLoading={() => <ActivityIndicator size="large" style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }} color={colors.BlueColor} />}
                    // renderFooter={()=>{
                    //     return(
                    //         <View/>
                    //     )
                    // }}
                    // onInputTextChanged={this.setIsTyping}
                    // isTyping={this.state.isTyping}
                    showAvatarForEveryMessage={true}
                />
            </View>
        )
    }
}
