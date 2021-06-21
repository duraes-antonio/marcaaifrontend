import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {colorPrimary, grey3, ralewaySemiBold} from '../../styles/global-styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const svgHeihgt = 120;
const titleHeihgt = 55;

const Screen = styled.View`
    background-color: ${colorPrimary};
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
`;

const ContainerVector = styled.View`
    align-items: center;
    justify-content: center;
    width: 200px;
    margin-top: 20px;
    height: ${svgHeihgt}px;
`;

const ContentArea = styled.View`
    background: #f4f4f4;
    width: 100%;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    position: relative;
`;

const ContentAreaInternal = styled(ContentArea)`
    background: white;
    padding: 20px 50px;
    top: 0;
`;

const Title = styled.Text`
    align-self: center;
    color: ${grey3};
    font-family: ${ralewaySemiBold};
    font-size: 20px;
`;

const TitleContainer = styled.View`
    align-items: center;
    height: ${titleHeihgt}px;
    justify-content: center;
`;

const RoundedForm = (props: {title: string; children: ReactNode; svg: any}) => {
    return (
        <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
            <Screen>
                <ContainerVector>{props.svg}</ContainerVector>
                <ContentArea>
                    <TitleContainer>
                        <Title>{props.title}</Title>
                    </TitleContainer>
                    <ContentAreaInternal>{props.children}</ContentAreaInternal>
                </ContentArea>
            </Screen>
        </KeyboardAwareScrollView>
    );
};

export default RoundedForm;
