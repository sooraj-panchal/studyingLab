import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStackScreen from './unAuth';
import AuthStackScreen from './auth';
import SplashScreen from '../screens/AuthModoule/SplashScreen/View';


const RootStack = createStackNavigator();
const AppContainer = ({ }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [token, setToken] = useState('')
    useEffect(() => {
        setToken("")
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [token])
    if (isLoading == true)
        return (
            <SplashScreen />
        )
    if (token !== "")
        return (
            <RootStack.Navigator
                headerMode="none"
            >
                <RootStack.Screen
                    name="AppStack"
                    component={AppStackScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
                <RootStack.Screen
                    name="AuthStack"
                    component={AuthStackScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
            </RootStack.Navigator>
        )
    return (
        <RootStack.Navigator
            headerMode="none"
        >
            <RootStack.Screen
                name="AuthStack"
                component={AuthStackScreen}
                options={{
                    animationEnabled: false,
                }}
            />
            <RootStack.Screen
                name="AppStack"
                component={AppStackScreen}
                options={{
                    animationEnabled: false,
                }}
            />
        </RootStack.Navigator>
    )
}

// const mapStateToProps = state => {
//   return {
//     token: state.Auth.user ? state.Auth.user.access_token : null,
//   };
// };

// export default connect(mapStateToProps)(AppContainer);
export default AppContainer;