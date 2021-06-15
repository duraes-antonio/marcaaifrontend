import styled from 'styled-components/native';
import GoogleIcon from '../../../assets/imgs/google.svg';
import FacebookIcon from '../../../assets/imgs/facebook.svg';
import InstagramIcon from '../../../assets/imgs/instagram.svg';
import React from 'react';

export const SocialLoginButtons = () => {
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
    return (
        <Container>
            {options.map((option, i) => (
                <SocialButton
                    key={i + 'bt'}
                    style={{marginRight: i + 1 < options.length ? 25 : 0}}>
                    {option}
                </SocialButton>
            ))}
        </Container>
    );
};
