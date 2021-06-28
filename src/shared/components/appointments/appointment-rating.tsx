import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import {CommonText, PageTitle} from '../general/texts';
import {colorPrimary} from '../../styles/global-styles';
import RatingStars from '../rating/rating';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {themeColor} from '../input/input';
import ButtonContained from '../buttons/button';
import {useDispatch} from 'react-redux';
import {actionsAppointment} from '../../store/modules/appointments/actions';
import {RatingAppointmentInput} from '../../../domain/entities/appointment';

const texts = {
    title: 'Vamos avaliar o serviço?',
    titleUpdate: 'Hum. Mudou de ideia?!',
    desc: 'Se quiser, descreva os motivos que levaram a dar a nota acima e ajude a melhorar o serviço',
    labelInput: 'Descrição do atendimento',
    buttonFinalize: 'Finalizar avaliação',
    buttonUpdate: 'Atualizar avaliação',
};

const styles = StyleSheet.create({
    stars: {
        marginTop: 22.5,
        marginBottom: 22.5,
    },
    desc: {
        fontSize: 14,
        marginBottom: 10,
    },
});

const Container = styled.View`
    padding: 10px 32px 0;
    align-items: center;
`;

const ModalTitle = styled(PageTitle)`
    color: ${colorPrimary};
    letter-spacing: ${1 / 8}px;
`;

const ScrollView = styled.ScrollView`
    max-height: 100px;
    width: 100%;
    margin-bottom: 25px;
`;

const AppointmentRating = (props: {
    rating: RatingAppointmentInput;
    update: boolean;
}) => {
    const [comment, setComment] = useState(props.rating.comment ?? '');
    const [loading, setLoading] = useState(false);
    const [ratingValue, setRatingValue] = useState(props.rating.value ?? 5);
    const dispatch = useDispatch();
    const submitReview = () => {
        setLoading(true);
        const apiMethod = props.update
            ? actionsAppointment.updateReviewRequest
            : actionsAppointment.addReviewRequest;
        dispatch(
            apiMethod({
                appointmentId: props.rating.appointmentId,
                comment,
                value: ratingValue,
            }),
        );
    };
    return (
        <Container>
            <ModalTitle>
                {props.update ? texts.titleUpdate : texts.title}
            </ModalTitle>
            <RatingStars
                value={ratingValue}
                size={26}
                onChange={setRatingValue}
                style={styles.stars}
            />
            <CommonText style={styles.desc}>{texts.desc}</CommonText>
            <ScrollView>
                <TextInput
                    label={texts.labelInput}
                    value={comment}
                    onChangeText={setComment}
                    theme={{colors: themeColor}}
                    maxLength={400}
                    multiline={true}
                    numberOfLines={3}
                />
            </ScrollView>
            <ButtonContained
                loading={loading}
                text={props.update ? texts.buttonUpdate : texts.buttonFinalize}
                onPress={submitReview}
            />
        </Container>
    );
};

export default memo(AppointmentRating);
