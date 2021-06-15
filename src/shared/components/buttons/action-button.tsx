import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import styled from 'styled-components/native';
import {colorLabel, robotoRegular} from '../../styles/global-styles';
import {IconLib, IconWrapper} from '../icon/icon-lib';

const ActionsContainer = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 0;
`;

const ActionText = styled.Text`
    color: ${colorLabel};
    font-family: ${robotoRegular};
    font-size: 10px;
`;

const ActionButton = (props: IconProps & {lib: IconLib; text?: string}) => {
    return (
        <ActionsContainer>
            <IconWrapper {...props} lib={props.lib} size={20} />
            <ActionText>{props.text}</ActionText>
        </ActionsContainer>
    );
};

export default ActionButton;
