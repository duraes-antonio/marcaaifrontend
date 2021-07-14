import {AppRegistry, UIManager} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/shared/store';
import {Routes} from './src/shared/routes/routes';
import BottomSheetWrapper from './src/shared/components/general/bottom-sheet-wrapper';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <BottomSheetModalProvider>
                <Routes />
                <BottomSheetWrapper />
            </BottomSheetModalProvider>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => App);
