import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {BoldText} from '../../../shared/components/general/texts';
import {colorLabel, robotoRegular} from '../../../shared/styles/global-styles';

export const Container = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    border-radius: 10px;
    padding: 16px;
    background-color: white;
    min-width: 100%;
    max-width: 100%;
    elevation: 8;
    shadow-color: rgba(0, 0, 0, 0.4);
`;

export const Info = styled.View`
    flex: 1;
    max-width: 100%;
    margin-left: 16px;
`;

export const TextSmallBold = styled(BoldText)`
    color: ${colorLabel};
    font-size: 14px;
    max-width: 100%;
`;

export const TextSmall = styled(TextSmallBold)`
    font-family: ${robotoRegular};
    font-weight: normal;
`;

export const styles = StyleSheet.create({
    // @ts-ignore
    actionButton: {...StyleSheet.absoluteFill, position: 'relative'},
});
