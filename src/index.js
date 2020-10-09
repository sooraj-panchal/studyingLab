/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './navigation';
import * as colors from './assets/colors'
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import * as globals from './utils/globals'
import { configureStore } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

    useEffect(() => {
        netInfoStatus()
    }, [])

    const { store, persistor } = configureStore();


    const netInfoStatus = () => {
        NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            globals.isInternetConnected = state.isConnected;
        });
    }


    const _renderStatusBar = () => {
        // if (IS_IOS) return <StatusBarHolder />;
        return <StatusBar backgroundColor={colors.StatusbarColor} />;
    };

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                    {_renderStatusBar()}
                    <SafeAreaView
                        style={{
                            flex: 1,
                            backgroundColor: "white",
                        }}>
                        <NavigationContainer>
                            <AppContainer />
                        </NavigationContainer>
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
