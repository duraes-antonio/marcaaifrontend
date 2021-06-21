import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const paddingTopScreen = 40;

export const Page = styled.View`
    background: white;
    min-height: 100%;
    position: relative;
`;

export const PageHead = styled.View`
    padding: ${paddingTopScreen}px 25px 0;
`;

export const PageBody = styled.ScrollView`
    padding-bottom: 90px;
`;

export const PageBodyContent = styled.View`
    padding: 5px 25px 0;
    height: 100%;
`;

export const ContainerScrollable = styled.ScrollView`
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
