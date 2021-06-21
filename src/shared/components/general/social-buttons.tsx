import styled from 'styled-components/native';
import GoogleIcon from '../../../../assets/imgs/google.svg';
import FacebookIcon from '../../../../assets/imgs/facebook.svg';
import InstagramIcon from '../../../../assets/imgs/instagram.svg';
import React from 'react';
import {StyleSheet} from 'react-native';

const Container = styled.View`
    flex-direction: row;
    justify-content: center;
`;

const SocialButton = styled.TouchableOpacity`
    border-radius: 45px;
    border: 1px solid #bbbbbb2a;
    height: 45px;
    width: 45px;
    justify-content: center;
    align-items: center;
`;

const options = [
    <GoogleIcon width={26} />,
    <FacebookIcon width={26} />,
    <InstagramIcon width={26} />,
];

const styles = StyleSheet.create({
    buttons: {
        marginRight: 25,
    },
});

export const SocialLoginButtons = () => {
    return (
        <Container>
            {options.map((option, i) => (
                <SocialButton
                    key={i + 'bt'}
                    style={i + 1 < options.length && styles.buttons}>
                    {option}
                </SocialButton>
            ))}
        </Container>
    );
};
