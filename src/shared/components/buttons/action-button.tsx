import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import styled from 'styled-components/native';
import {colorLabel, robotoRegular} from '../../styles/global-styles';
import {IconLib, IconWrapper} from '../icon/icon-lib';

const size = 35;

const ActionsContainer = styled.TouchableOpacity`
    height: ${size}px;
    width: ${size}px;
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: ${size}px;
`;

const ActionText = styled.Text`
    color: ${colorLabel};
    font-family: ${robotoRegular};
    font-size: 10px;
`;

const styles = StyleSheet.create({
    iconWithText: {
        backgroundColor: 'transparent',
        width: 'auto',
    },
});

function ActionButton(
    props: IconProps & {lib: IconLib; text?: string},
): JSX.Element {
    return (
        <ActionsContainer
            onPress={props.onPress}
            style={props.text ? styles.iconWithText : undefined}>
            <IconWrapper {...props} lib={props.lib} size={20} />
            {props.text && <ActionText>{props.text}</ActionText>}
        </ActionsContainer>
    );
}

export default memo(ActionButton);
