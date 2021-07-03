import {NavigationContainer} from '@react-navigation/native';
import Login from '../../pages/login/login';
import React from 'react';
import Signup from '../../pages/signup/signup';
import PasswordRecover from '../../pages/auth/password-recover/password-recover';
import PasswordRedefinition from '../../pages/auth/password-redefinition/password-redefinition';
import {TabsBottom} from '../components/bottom-tabs/tabs-bottom';
import ProviderDetails from '../../pages/provider-details/provider-details';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

export enum RouteName {
    LOGIN = 'login',
    REGISTER = 'register',
    PASSWORD_RECOVER = 'password_recover',
    PASSWORD_REDEFINITION = 'password_redefinition',
    HOME = 'home',
    SEARCH = 'search',
    FAVORITES = 'favorites',
    PROFILE = 'profile',
    CREATE = 'create',
    PROVIDER = 'provider',
}

const Stack = createSharedElementStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({current: {progress}}) => {
        return {};
    },
    config,
};
export const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={RouteName.SEARCH}>
            <Stack.Screen name={RouteName.HOME} component={TabsBottom} />
            <Stack.Screen name={RouteName.LOGIN} component={Login} />
            <Stack.Screen name={RouteName.REGISTER} component={Signup} />
            <Stack.Screen
                name={RouteName.PROVIDER}
                component={ProviderDetails}
                options={() => options}
            />
            <Stack.Screen
                name={RouteName.PASSWORD_RECOVER}
                component={PasswordRecover}
            />
            <Stack.Screen
                name={RouteName.PASSWORD_REDEFINITION}
                component={PasswordRedefinition}
            />
        </Stack.Navigator>
    </NavigationContainer>
);
