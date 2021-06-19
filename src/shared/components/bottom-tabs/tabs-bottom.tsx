import {colorPrimary, grey3} from '../../styles/global-styles';
import {RouteName} from '../../routes/routes';
import Login from '../../../pages/login/login';
import {
    BottomTabBarOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAewsome from 'react-native-vector-icons/FontAwesome5';
import HomePage from '../../../pages/home/home';
import styled from 'styled-components/native';
import SearchPage from '../../../pages/search/search-page';
import {useDispatch} from 'react-redux';
import {actionsAppointment} from '../../store/modules/appointments/appointments.actions';

const Tab = createBottomTabNavigator();

const tabsShadow = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0,0,0,0.5)',
        elevation: 6,
    },
});

const tabsOptions: BottomTabBarOptions = {
    showLabel: false,
    style: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 58,
        borderRadius: 15,
        backgroundColor: 'white',
        ...tabsShadow.shadow,
        borderTopColor: 'transparent',
    },
};

const prepareIconFeather = (name: string, focused: boolean) => (
    <IconFeather name={name} size={24} color={focused ? colorPrimary : grey3} />
);

const prepareIconFA5 = (name: string, focused: boolean) => (
    <IconFontAewsome
        name={name}
        size={24}
        color={focused ? colorPrimary : grey3}
    />
);

const sizeCentralButton = 55;

const CentralIconContainer = styled.TouchableOpacity`
    background-color: ${colorPrimary};
    border-radius: ${sizeCentralButton}px;
    height: ${sizeCentralButton}px;
    width: ${sizeCentralButton}px;
    align-items: center;
    justify-content: center;
    bottom: 16px;
    elevation: ${5};
`;

const CentralIcon = () => (
    <CentralIconContainer activeOpacity={0.6}>
        <IconFeather name={'plus'} size={18} color={'white'} />
    </CentralIconContainer>
);

export const TabsBottom = () => {
    const dispatch = useDispatch();
    dispatch(actionsAppointment.allRequest());
    // TODO: SUbstituir componentes pelos componentes reais
    return (
        <Tab.Navigator
            initialRouteName={RouteName.SEARCH}
            tabBarOptions={tabsOptions}
            lazy>
            <Tab.Screen
                name={RouteName.HOME}
                component={HomePage}
                options={{
                    tabBarIcon: ({focused}) =>
                        prepareIconFeather('home', focused),
                }}
            />
            <Tab.Screen
                name={RouteName.SEARCH}
                component={SearchPage}
                options={{
                    tabBarIcon: ({focused}) =>
                        prepareIconFeather('search', focused),
                }}
            />
            <Tab.Screen
                name={RouteName.CREATE}
                component={Login}
                options={{tabBarIcon: () => <CentralIcon />}}
            />
            <Tab.Screen
                name={RouteName.FAVORITES}
                component={Login}
                options={{
                    tabBarIcon: ({focused}) =>
                        prepareIconFeather('heart', focused),
                }}
            />
            <Tab.Screen
                name={RouteName.PROFILE}
                component={Login}
                options={{
                    tabBarIcon: ({focused}) =>
                        prepareIconFA5('user-circle', focused),
                }}
            />
        </Tab.Navigator>
    );
};
