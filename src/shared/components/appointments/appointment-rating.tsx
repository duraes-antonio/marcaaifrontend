import React, {memo} from 'react';
import styled from 'styled-components/native';
import {IdType} from '../../store/types';
import {CommonText, PageTitle} from '../general/texts';
import {colorPrimary} from '../../styles/global-styles';

const Container = styled.View`
    padding: 10px 32px 0;
    align-items: center;
`;

const ModalTitle = styled(PageTitle)`
    color: ${colorPrimary};
    letter-spacing: ${1 / 8}px;
`;

const texts = {
    title: 'Vamos avaliar o serviço?',
    desc: 'Se quiser, descreva os motivos que levaram a dar a nota acima e ajude a melhorar o serviço',
};

const AppointmentRating = (props: {appointmentId: IdType}) => {
    return (
        <Container>
            <ModalTitle>{texts.title}</ModalTitle>
            <CommonText>{texts.desc}</CommonText>
        </Container>
    );
};

export default memo(AppointmentRating);
