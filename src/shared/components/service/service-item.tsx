import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Service} from '../../../domain/entities/service';
import {Image} from '../provider/provider-item/styles';
import {BoldText, CommonText} from '../general/texts';
import {colorLabel} from '../../styles/global-styles';
import RatingView from '../rating/rating-view';

const Container = styled.TouchableOpacity`
    background-color: white;
    border-radius: 15px;
    flex-direction: row;
    min-height: 80px;
    width: 100%;
`;

const InfoContainer = styled.View`
    justify-content: center;
    flex: 1;
    padding: 11px 10px;
`;

const Name = styled(CommonText)`
    color: ${colorLabel};
    font-size: 12px;
`;

const Price = styled(BoldText)`
    color: ${colorLabel};
    font-size: 12px;
    margin-bottom: 3px;
`;

const styles = StyleSheet.create({
    shadow: {
        elevation: 8,
        shadowColor: 'rgba(0,0,0,0.4)',
        overflow: 'hidden',
    },
    serviceImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        maxWidth: 85,
        resizeMode: 'cover',
    },
});

function ServiceItem(props: {service: Service}): JSX.Element {
    return (
        <Container activeOpacity={3 / 5} style={styles.shadow}>
            <Image
                style={styles.serviceImage}
                source={{uri: props.service.imageUrl}}
            />
            <InfoContainer>
                <Name>{props.service.name}</Name>
                <Price>R$ {props.service.price}</Price>
                <RatingView value={props.service.rating} />
            </InfoContainer>
        </Container>
    );
}

export default memo(ServiceItem);
