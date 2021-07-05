import Login from '../../pages/login/login';
import React from 'react';
import Signup from '../../pages/signup/signup';
import PasswordRecover from '../../pages/auth/password-recover/password-recover';
import PasswordRedefinition from '../../pages/auth/password-redefinition/password-redefinition';
import {TabsBottom} from '../components/bottom-tabs/tabs-bottom';
import ProviderDetails from '../../pages/provider-details/provider-details';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

const Stack = createStackNavigator();

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
