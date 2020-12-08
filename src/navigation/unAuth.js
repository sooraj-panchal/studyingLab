import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/AppModule/HomeScreen/View';
import CourseScreen from '../screens/AppModule/CourseScreen/View';
import ProfileScreen from '../screens/AppModule/ProfileScreen';
import SearchScreen from '../screens/AppModule/SearchScreen/View';
import { TouchableOpacity, View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import * as images from '../assets/images/map'
import * as font from '../assets/fonts/fonts'
import * as colors from '../assets/colors'
import AddScreen from '../screens/AppModule/AddScreen/View';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import CourseDetailsScreen from '../screens/AppModule/CourseDetailsScreen/View';
import AttendCourseScreen from '../screens/AppModule/AttendCourseScreen/View';
import StartQuizScreen from '../screens/AppModule/StartQuizScreen/View';
import QuizResultScreen from '../screens/AppModule/QuizResultScreen/View';
import RequestFormScreen from '../screens/AppModule/RequestFormScreen/View';
import SubmitRequestFormScreen from '../screens/AppModule/SubmitRequestFormScreen/View';
import MyCourseScreen from '../screens/AppModule/MyCourseScreen/View';
import ResetPasswordScreen from '../screens/AppModule/ResetPasswordScreen/View';
import FilterScreen from '../screens/AppModule/FilterScreen/View';
import EditProfileScreen from '../screens/AppModule/EditProfileScreen';
import NewCourseScreen from '../screens/AppModule/NewCourseScreen/View';
import * as globals from './../utils/globals'
import ReviewScreen from '../screens/AppModule/ReviewScreen/View';
import SelectChapterScreen from '../screens/AppModule/SelectChapterScreen/View';
import ChatScreen from '../screens/AppModule/ChatScreen/View';
import FavoriteScreen from '../screens/AppModule/FavoriteScreen/View';
import PrivacyPolicyScreen from '../screens/AppModule/PrivacyPolicyScreen/View';

const Tab = createBottomTabNavigator();

const StackScreen = createStackNavigator();


const AppStackScreen = () => (
  <StackScreen.Navigator initialRouteName="TabBarStack" screenOptions={{
    // headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  }}  >
    <StackScreen.Screen
      name="TabBarStack"
      component={TabBarStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="CourseDetails"
      component={CourseDetailsScreen}
      options={{
        headerShown: false,
      }}

    />
    <StackScreen.Screen
      name="AttendCourse"
      component={AttendCourseScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="StartQuiz"
      component={StartQuizScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="QuizResult"
      component={QuizResultScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="RequestForm"
      component={RequestFormScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="SubmitRequestForm"
      component={SubmitRequestFormScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="MyCourse"
      component={MyCourseScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="Filter"
      component={FilterScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="NewCourse"
      component={NewCourseScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="Review"
      component={ReviewScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="SelectChapter"
      component={SelectChapterScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackScreen.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicyScreen}
      options={{
        headerShown: false,
      }}
    />
  </StackScreen.Navigator>
)



function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <>
      <ImageBackground style={{
        width: Dimensions.get("window").width,
        height: globals.mph5 * 20, // 90,
        justifyContent: "center",
        alignItems: "center",
      }}
        resizeMode="stretch"
        source={images.tabBarScreen.backgroundImage}
      >
        <View style={{ flexDirection: 'row' }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: globals.mph5 * 8, // 40
                }}
                activeOpacity={1}
              >
                {
                  label == "Home"
                    ?
                    <Image
                      style={{
                        width: globals.mpw5 * 5, // 25,
                        height: globals.mph5 * 5, // 25,
                        resizeMode: "contain"
                      }}
                      source={
                        isFocused ?
                          images.tabBarScreen.home_blueImage
                          : images.tabBarScreen.home_Image
                      }
                    />
                    :
                    label == "Course"
                      ?
                      <Image
                        style={{
                          width: globals.mpw5 * 4, //23,
                          height: globals.mph5 * 4, //25,
                          resizeMode: "contain"
                        }}
                        source={
                          isFocused ?
                            images.tabBarScreen.course_blueImage
                            : images.tabBarScreen.course_Image
                        }
                      />
                      :
                      label == "Add"
                        ?
                        <Image
                          style={{
                            width: globals.mpw5 * 14, // 60,
                            height: globals.mph5 * 14, // 60,
                            resizeMode: "contain",
                            marginBottom: globals.mph5 * 8, // 40
                          }}
                          source={
                            images.tabBarScreen.addImage
                          }
                        />
                        :
                        label == "Search"
                          ?
                          <Image
                            style={{
                              width: globals.mpw5 * 5, // 25,
                              height: globals.mph5 * 5, // 25,
                              resizeMode: "contain"
                            }}
                            source={
                              isFocused ?
                                images.tabBarScreen.search_blue_Image
                                : images.tabBarScreen.searchImage
                            }
                          />
                          :
                          label == "Profile"
                            ?
                            <Image
                              style={{
                                width: globals.mpw5 * 5, // 25,
                                height: globals.mpw5 * 5, // 25,
                                resizeMode: "contain"
                              }}
                              source={
                                isFocused ?
                                  images.tabBarScreen.profile_blue_Image
                                  : images.tabBarScreen.profile_Image
                              }
                            />
                            : null
                }
                {
                  label == "Add"
                    ? null
                    :
                    <Text style={{
                      color: isFocused ? colors.BlueColor : colors.GrayColor,
                      marginTop: 2,
                      fontSize: globals.font_12, // 12,
                      // fontFamily: font.Regular
                    }}>
                      {label}
                    </Text>
                }

              </TouchableOpacity>);
          })}
        </View>
      </ImageBackground>
    </>

  );
}

const TabBarStackScreen = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={({ route, state, navigation }) => ({
      // unmountOnBlur: true,

    })}
    // screenOptions={({ route, state, navigation }) => ({
    //   unmountOnBlur: true,
    //   tabBarIcon: ({ focused }) => {
    //     if (route.name === 'Home') {
    //       return (
    //         <Image
    //           style={{
    //             width: 25,
    //             height: 25,
    //             // resizeMode: "contain"
    //           }}
    //           source={
    //             focused ?
    //               images.tabBarScreen.home_blueImage
    //               : images.tabBarScreen.home_Image
    //           }
    //         />
    //       )
    //     } else if (route.name === 'Course') {
    //       return (
    //         <Image
    //           style={{
    //             width: 23,
    //             height: 25,
    //             // resizeMode: "contain"
    //           }}
    //           source={
    //             focused ?
    //               images.tabBarScreen.course_blueImage
    //               : images.tabBarScreen.course_Image
    //           }
    //         />
    //       )
    //     } else if (route.name === 'Add') {
    //       return (
    //         <View style={{
    //           backgroundColor: "white",
    //           width: 60,
    //           height: 60,
    //           borderRadius: 30,
    //           justifyContent: "center",
    //           alignItems: "center",
    //           marginBottom: 30
    //         }} >
    //           <Image
    //             style={{
    //               width: 55,
    //               height: 55,
    //               // resizeMode: "contain",
    //             }}
    //             source={
    //               images.tabBarScreen.addImage
    //             } />
    //         </View>
    //       )
    //     } else if (route.name === 'Search') {
    //       return (
    //         <Image
    //           style={{
    //             width: 25,
    //             height: 25,
    //             // resizeMode: "contain"
    //           }}
    //           source={
    //             focused ?
    //               images.tabBarScreen.search_blue_Image
    //               : images.tabBarScreen.searchImage
    //           }
    //         />
    //       )
    //     } else if (route.name === 'Profile') {
    //       return (
    //         <Image
    //           style={{
    //             width: 25,
    //             height: 25,
    //             // resizeMode: "contain"
    //           }}
    //           source={
    //             focused ?
    //               images.tabBarScreen.profile_blue_Image
    //               : images.tabBarScreen.profile_Image
    //           }
    //         />
    //       )
    //     }
    //     // You can return any component that you like here!
    //   },
    //   tabBarLabel: ({ focused }) => {
    //     if (route.name == "Add") {
    //       return null;
    //     } else {
    //       return (
    //         <Text style={{
    //           color: focused ? colors.BlueColor : colors.GrayColor,
    //           marginTop: 2,
    //           fontSize: 12,
    //           fontFamily: font.Regular
    //         }}>
    //           {route.name}
    //         </Text>
    //       )
    //     }
    //   }
    // })}
    // tabBarOptions={{
    //   keyboardHidesTabBar: true,
    //   // showLabel: false,
    //   // activeTintColor: colors.blue,
    //   // inactiveTintColor: colors.white,
    //   tabStyle: {
    //     // backgroundColor: colors.darkgray,
    //   },
    //   style: {
    //     height: 55,
    //     paddingTop: 10
    //   }
    // }}
    tabBar={props =>
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        <MyTabBar {...props} />
      </View>
    }

  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Course" component={CourseScreen} />
    <Tab.Screen name="Add"
      listeners={{
        tabPress: e => {
          e.preventDefault()
          navigation.navigate("RequestForm")
        },
      }}
      component={AddScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppStackScreen;
