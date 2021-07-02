import React, {memo} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {CommonText} from '../general/texts';
import {grey4} from '../../styles/global-styles';

export interface TagProps extends TouchableOpacityProps {
    clickable?: boolean;
    color?: string;
    children: string;
}

const Container = styled.TouchableOpacity`
    height: 20px;
    border-radius: 10px;
    padding: 0 10px;
    justify-content: center;
`;

const Text = styled(CommonText)`
    color: white;
    font-size: 11px;
    line-height: 11px;
`;

function Tag(props: TagProps): JSX.Element {
    return (
        <Container
            style={[props.style, {backgroundColor: props.color ?? grey4}]}
            disabled={!props.clickable || !props.onPress}>
            <Text>{props.children}</Text>
        </Container>
    );
}

export default memo(Tag);
