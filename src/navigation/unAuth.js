import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/AppModule/HomeScreen/View';
import CourseScreen from '../screens/AppModule/CourseScreen/View';
import ProfileScreen from '../screens/AppModule/ProfileScreen/View';
import SearchScreen from '../screens/AppModule/SearchScreen/View';
import { TouchableOpacity, View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import * as images from '../assets/images/map'
import * as font from '../assets/fonts/fonts'
import * as colors from '../assets/colors'
import AddScreen from '../screens/AppModule/AddScreen/View';


const Tab = createBottomTabNavigator();


function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <>
      <ImageBackground style={{
        width: Dimensions.get("window").width,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
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
                  marginTop: 40
                }}
                activeOpacity={1}
              >
                {
                  label == "Home"
                    ?
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        // resizeMode: "contain"
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
                          width: 23,
                          height: 25,
                          // resizeMode: "contain"
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
                            width: 55,
                            height: 55,
                            // resizeMode: "contain",
                            marginBottom: 30
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
                              width: 25,
                              height: 25,
                              // resizeMode: "contain"
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
                                width: 25,
                                height: 25,
                                // resizeMode: "contain"
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
                      fontSize: 12,
                      fontFamily: font.Regular
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

const AppStackScreen = () => (
  // <Tab.Navigator
  //   screenOptions={({ route }) => ({
  //     tabBarIcon: ({ color, size }) => {
  //       let icon;
  //       if (route.name === 'Home') {
  //         icon = HomeImage;
  //       } else if (route.name === 'Jobs') {
  //         icon = JobImage;
  //       } else if (route.name === 'Profile') {
  //         icon = ProfileImage;
  //       }
  //       // You can return any component that you like here!
  //       return (
  //         <Image
  //           source={icon}
  //           style={{
  //             height: size,
  //             width: size,
  //             tintColor: color,
  //             resizeMode: 'contain',
  //           }}
  //         />
  //       );
  //     },
  //   })}
  //   tabBarOptions={{
  //     activeTintColor: Theme.icon.yellow,
  //     inactiveTintColor: Theme.icon.grey,
  //     labelStyle: {
  //       color: Theme.text.secondary,
  //       textTransform: 'capitalize',
  //       fontSize: moderateScale(12),
  //       fontWeight: 'bold',
  //     },
  //     tabStyle: {
  //       backgroundColor: Theme.background.bgTab,
  //     },
  //     safeAreaInsets: {
  //       top: 0,
  //       bottom: 0,
  //     },
  //   }}>
  // <Tab.Screen name="Home" component={HomeStack} />
  // <Tab.Screen name="Jobs" component={JobStack} />
  // <Tab.Screen name="Profile" component={ProfileStack} />
  // </Tab.Navigator>
  <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Course" component={CourseScreen} />
    <Tab.Screen name="Add" component={AddScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppStackScreen;
