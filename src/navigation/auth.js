import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../screens/AuthModoule/LoginScreen/View';
import SignUpScreen from '../screens/AuthModoule/SignUpScreen/View';
import AuthScreen from '../screens/AuthModoule/AuthScreen/View';
import ForgotPasswordScreen from '../screens/AuthModoule/ForgotPasswordScreen/View';
import CheckYourEmailScreen from '../screens/AuthModoule/CheckYourEmailScreen/View';
import ChangePasswordScreen from '../screens/AuthModoule/ChangePasswordScreen/View';
import VerificationScreen from '../screens/AuthModoule/VerificationScreen/View';

const AuthStack = createStackNavigator();
const AuthStackScreen = ({ navigation }) => (
    <AuthStack.Navigator initialRouteName="Auth" screenOptions={{
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
    }}  >
        <AuthStack.Screen
            name="Login"
            component={LoginScreen}
        // options={{
        //     headerShown: false,
        // }}
        />
        <AuthStack.Screen
            name="SignUp"
            component={SignUpScreen}
        // options={{
        //     headerShown: false,
        // }}
        />
        <AuthStack.Screen
            name="Auth"
            component={AuthScreen}
        // options={{
        //     headerShown: false
        // }}
        />
        <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
        // options={{
        //     headerShown: false
        // }}
        />
        <AuthStack.Screen
            name="CheckYourEmail"
            component={CheckYourEmailScreen}
        // options={{
        //     headerShown: false
        // }}
        />
        <AuthStack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
        // options={{
        //     headerShown: false
        // }}
        />
        <AuthStack.Screen
            name="Verification"
            component={VerificationScreen}
        // options={{
        //     headerShown: false
        // }}
        />
    </AuthStack.Navigator>
);

export default AuthStackScreen;
