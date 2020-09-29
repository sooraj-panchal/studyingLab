import React from 'react';
// import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStackScreen from './unAuth';
import AuthStackScreen from './auth';


const RootStack = createStackNavigator();
const AppContainer = ({ token }) => (
    <NavigationContainer>
        <RootStack.Navigator
            headerMode="none"
            initialRouteName={'AuthStack'}
        >
            <RootStack.Screen
                name="App"
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
    </NavigationContainer>
);

// const mapStateToProps = state => {
//   return {
//     token: state.Auth.user ? state.Auth.user.access_token : null,
//   };
// };

// export default connect(mapStateToProps)(AppContainer);
export default AppContainer;