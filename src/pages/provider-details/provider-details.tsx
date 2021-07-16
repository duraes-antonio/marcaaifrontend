import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import {IconLib, IconWrapper} from '../../shared/components/icon/icon-lib';
import ButtonContained from '../../shared/components/buttons/button';
import reduxSelectors from '../../shared/store/root-selector';
import {useDispatch, useSelector} from 'react-redux';
import ServiceList from '../../shared/components/service/service-list';
import {services} from '../../data/services/di';
import {Nullable} from '../../shared/types/general';
import SliderHeaderPage from '../../shared/components/slider-header-page/slider-header-page';
import {CustomImage} from '../../shared/components/general/image';
import {getLocation} from '../../shared/util/permission';
import {actionsUI} from '../../shared/store/modules/user-interface/actions';
import ProviderAddressMap from './provider-address-map';

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

function ProviderDetails(props: ProviderPageProps) {
    const providerResume = useSelector(reduxSelectors.providerSelected);
    const [provider, setProvider] = useState<Nullable<IProvider>>();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const showAddress = useCallback(async () => {
        await getLocation(
            position =>
                position &&
                dispatch(
                    actionsUI.setModalContent(
                        <ProviderAddressMap
                            targetLocation={provider?.address}
                        />,
                    ),
                ),
        );
    }, [dispatch]);

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
                <ButtonContained
                    icon={({color}) => (
                        <IconWrapper
                            size={24}
                            color={color}
                            name={'map-marker-alt'}
                            lib={IconLib.FONT_AWESOME_5}
                        />
                    )}
                    style={styles.showAddressButton}
                    text={'Ver endereço'}
                    onPress={showAddress}
                />
            </ContainerPage>
        ),
        [providerResume, showAddress],
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

export default ProviderDetails;
