import styled, {css} from 'styled-components/native';
import {
    colorLabel,
    colorPrimary,
    robotoRegular,
} from '../../shared/styles/global-styles';
import {StyleSheet} from 'react-native';

export const svgHeihgt = 120;

const cssText = css`
    font-size: 14px;
    align-self: center;
    color: ${colorLabel};
    font-family: ${robotoRegular};
    margin: 10px 0 15px;
`;

export const Text = styled.Text`
    ${cssText}
`;

export const TextSignUp = styled(Text)`
    color: ${colorLabel};
    margin-top: 20px;
    align-self: center;
`;

export const TextForgotPassword = styled(Text)`
    align-self: flex-end;
    justify-content: flex-end;
    color: ${colorPrimary};
`;

export const TextSignUpColor = styled(TextSignUp)`
    color: ${colorPrimary};
`;

export const styles = StyleSheet.create({
    vectorLogin: {
        position: 'absolute',
        bottom: 0,
    },
    vectorRegister: {
        position: 'absolute',
        bottom: 10,
    },
});
