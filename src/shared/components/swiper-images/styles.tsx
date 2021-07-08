import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    min-height: 250px;
    background-color: black;
`;

const dotSize = 10;

export const IndicadorContainer = styled.View`
    position: absolute;
    right: 20px;
    top: 20px;
    flex-direction: row;
    z-index: 2;
`;

export const IndicatorDot = styled.View`
    background-color: white;
    width: ${dotSize}px;
    height: ${dotSize}px;
    border-radius: ${dotSize}px;
    margin-left: 8px;
`;

export const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        opacity: 0.85,
    },
});
