/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './navigation';
import * as colors from './assets/colors'

const App = () => {

    const _renderStatusBar = () => {
        // if (IS_IOS) return <StatusBarHolder />;
        return <StatusBar backgroundColor={colors.StatusbarColor} />;
    };

    return (
        <SafeAreaProvider>
            {_renderStatusBar()}
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: "white",
                }}>
                <AppContainer />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default App;
