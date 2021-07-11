import React, {memo, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import reduxSelectors from '../../shared/store/root-selector';
import {Service} from '../../domain/entities/service';
import SliderHeaderPage from '../../shared/components/slider-header-page/slider-header-page';
import {CustomImage} from '../../shared/components/general/image';
import RatingView from '../../shared/components/rating/rating-view';
import {
    Body,
    Page,
    Price,
    ProviderName,
    RatingPrice,
    ReviewsTitle,
    ServiceDescription,
    ServiceInfo,
    ServiceName,
    styles,
} from './styles';
import {View} from 'react-native';
import {avatarSize, styles as providerStyles} from '../provider-details/styles';
import {Nullable} from '../../shared/types/general';
import {useNavigation} from '@react-navigation/native';
import {RouteName} from '../../shared/routes/routes';
import {ButtonContained} from '../../shared/components/buttons/button';
import ReviewList from './review-list';
import {AppointmentRating} from '../../domain/entities/appointment';
import {services} from '../../data/services/di';

function Header(props: {service: Service}): JSX.Element {
    const {coversUrl, imageUrl, name, provider, price, rating} = props.service;
    return (
        <SliderHeaderPage images={coversUrl}>
            <View style={providerStyles.avatarImage}>
                <CustomImage uri={imageUrl} width={avatarSize} />
            </View>
            <ServiceInfo>
                <ServiceName numberOfLines={2}>{name}</ServiceName>
                <ProviderName>{provider.name}</ProviderName>

                <RatingPrice>
                    <RatingView value={rating} />
                    <Price>R${price}</Price>
                </RatingPrice>
            </ServiceInfo>
        </SliderHeaderPage>
    );
}

function ServiceDetails(): JSX.Element {
    const navigation = useNavigation();
    const [reviews, setReviews] = useState<AppointmentRating[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const selected: Nullable<Service> = useSelector(
        reduxSelectors.serviceSelected,
    );
    const getAndSetReviews = useCallback(
        (currentPage = 1, perPage = 10) => {
            (async () => {
                setLoading(true);
                const newReviews = await services.review.get(
                    selected.id,
                    currentPage,
                    perPage,
                );
                setReviews(old => [...old, ...newReviews]);
                setPage(prev => prev + 1);
                setLoading(false);
            })();
        },
        [selected?.id],
    );

    useEffect(() => {
        getAndSetReviews();
    }, [getAndSetReviews]);
    const schedule = useCallback(() => null, []);

    if (!selected) {
        navigation.navigate(RouteName.SEARCH);
        return <></>;
    }
    const descriptionTruncated =
        selected.description.length > 1500
            ? selected.description.slice(0, 1500) + '...'
            : selected.description;
    const _Header = (
        <Page>
            <Header service={selected} />
            <Body>
                <ServiceDescription>{descriptionTruncated}</ServiceDescription>
                <ButtonContained
                    text={'Agendar'}
                    onPress={schedule}
                    style={styles.button}
                />
                {reviews.length ? (
                    <ReviewsTitle>Avaliações</ReviewsTitle>
                ) : null}
            </Body>
        </Page>
    );

    return (
        <ReviewList
            header={_Header}
            items={reviews}
            loading={loading}
            onRefresh={getAndSetReviews}
            onEndReached={() => getAndSetReviews(page)}
        />
    );
}

export default memo(ServiceDetails);
