import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IdType} from '../../shared/store/types';
import {RouteName} from '../../shared/routes/routes';
import {
    IProvider,
    IProviderBasic,
    providerCategoryName,
} from '../../domain/entities/provider';
import {
    avatarSize,
    AvatarWrapper,
    ContainerPage,
    HeaderInfo,
    ProviderCategory,
    ProviderName,
    styles,
    TagsContainer,
} from './styles';
import TagWorkdayStatus from '../../shared/components/tag/tag-workday';
import TagDistance from '../../shared/components/tag/tag-distance';
import ActionButton from '../../shared/components/buttons/action-button';
import {IconLib} from '../../shared/components/icon/icon-lib';
import reduxSelectors from '../../shared/store/root-selector';
import {useSelector} from 'react-redux';
import ServiceList from '../../shared/components/service/service-list';
import {services} from '../../data/services/di';
import SliderHeaderPage from '../../shared/components/slider-header-page/slider-header-page';
import {CustomImage} from '../../shared/components/general/image';
import {ListName} from '../../shared/components/general/texts';
import {pagePaddingHorizontal} from '../../shared/components/general/page/styles';
import AddressCard from './address-card/address-card';
import {Nullable} from '../../shared/types/general';

type ProviderParams = {
    [RouteName.PROVIDER]: {id: IdType; item: IProviderBasic};
};

export interface ProviderPageProps {
    route: RouteProp<ProviderParams, RouteName.PROVIDER>;
    navigation: StackNavigationProp<ProviderParams, RouteName.PROVIDER>;
}

function Header(props: {provider: IProviderBasic}): JSX.Element {
    const {
        coversUrl,
        imageUrl,
        workStatus,
        name,
        category,
        id,
        distanceInMeters,
    } = props.provider;
    return (
        <SliderHeaderPage images={coversUrl}>
            <AvatarWrapper style={styles.avatarImage}>
                <CustomImage
                    uri={imageUrl}
                    width={avatarSize}
                    nativeID={`${id}-dest`}
                />
            </AvatarWrapper>
            <HeaderInfo>
                <ProviderName numberOfLines={2}>{name}</ProviderName>
                <ProviderCategory>
                    {providerCategoryName[category]}
                </ProviderCategory>
                <TagsContainer>
                    <TagWorkdayStatus
                        style={styles.tagWorkday}
                        status={workStatus}
                    />
                    {distanceInMeters && (
                        <TagDistance distanceInMeters={distanceInMeters} />
                    )}
                </TagsContainer>
            </HeaderInfo>
            <ActionButton
                containerStyle={styles.favoriteButton}
                containerShadow
                lib={IconLib.FEATHER}
                name={'heart'}
            />
        </SliderHeaderPage>
    );
}

function ProviderDetails() {
    const providerResume = useSelector(reduxSelectors.providerSelected);
    const [provider, setProvider] = useState<Nullable<IProvider>>();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
        if (!providerResume) {
            navigation.navigate(RouteName.SEARCH);
            return;
        }
    }, [navigation, providerResume]);

    const getAndSetProvider = useCallback(async () => {
        setLoading(true);
        if (!providerResume?.id) {
            return;
        }
        // @ts-ignore
        setProvider(await services.provider.get(providerResume.id));
        setLoading(false);
    }, [providerResume?.id]);

    useEffect(() => {
        getAndSetProvider();
    }, [getAndSetProvider]);

    const HeaderInstance = useMemo(
        () => (
            <ContainerPage>
                <Header provider={providerResume as IProviderBasic} />
                {provider ? (
                    <AddressCard
                        address={provider.address}
                        dest={provider?.address.location}
                        style={{marginBottom: 25}}
                    />
                ) : null}
                <ListName style={{paddingHorizontal: pagePaddingHorizontal}}>
                    Serviços ofertados
                </ListName>
            </ContainerPage>
        ),
        [provider, providerResume],
    );
    return (
        <ServiceList
            items={provider?.services ?? []}
            header={HeaderInstance}
            loading={loading}
            onRefresh={getAndSetProvider}
        />
    );
}

export default memo(ProviderDetails);
