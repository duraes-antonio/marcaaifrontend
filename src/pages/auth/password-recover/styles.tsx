import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
const dimensions = Dimensions.get('window').height;

export const ScreenContainer = styled.ScrollView`
    background: white;
    min-height: 100%;
    position: relative;
`;

const paddingTopScreen = 40;
export const Container = styled.ScrollView`
    padding: ${paddingTopScreen}px 25px 0;
`;

export const SvgContainer = styled.View`
    max-width: 220px;
    align-self: center;
`;

export const styles = StyleSheet.create({
    loginTextAction: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    inputEmail: {
        marginTop: 30,
        marginBottom: 20,
    },
    pageDesc: {
        marginTop: 10,
    },
});
