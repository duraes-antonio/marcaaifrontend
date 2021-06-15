import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginTop: 20,
        width: 200,
    },
    description: {
        marginTop: 10,
    },
    inputPassword: {
        marginTop: 32,
        marginBottom: 5,
    },
    inputPasswordConfirm: {
        marginTop: 25,
    },
    redefinitionSvg: {
        alignSelf: 'center',
        marginTop: 32,
    },
});

export const Container = styled.View`
    width: 100%;
    height: auto;
`;

export const ContainerSteps = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
`;

export const StepBar = styled.View`
    // @ts-ignore
    background-color: ${props => props.style?.backgroundColor};
    height: 4px;
    border-radius: 5px;
    width: 24%;
`;
