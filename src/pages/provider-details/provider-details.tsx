import React, {ReactNode} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IdType} from '../../shared/store/types';
import {RouteName} from '../../shared/routes/routes';
import {
    IProviderBasic,
    providerCategoryName,
} from '../../domain/entities/provider';
import {Image} from 'react-native';
import {
    avatarSize,
    AvatarWrapper,
    ContainerPage,
    HeaderBottomBar,
    HeaderContainer,
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
import EmptyImageSvg from '../../../assets/vectors/empty_image.svg';
import ButtonContained from '../../shared/components/buttons/button';
import reduxSelectors from '../../shared/store/root-selector';
import {useSelector} from 'react-redux';

type ProviderParams = {
    [RouteName.PROVIDER]: {id: IdType; item: IProviderBasic};
};

export interface ProviderPageProps {
    route: RouteProp<ProviderParams, RouteName.PROVIDER>;
    navigation: StackNavigationProp<ProviderParams, RouteName.PROVIDER>;
}

function Header(props: {provider: IProviderBasic}): JSX.Element {
    const {imageUrl, workStatus, name, category, id, distanceInMeters} =
        props.provider;
    return (
        <HeaderContainer>
            <HeaderBottomBar>
                <AvatarWrapper style={styles.avatarImage}>
                    {!imageUrl ? (
                        <Image
                            source={{uri: imageUrl ?? ''}}
                            style={{width: avatarSize, height: avatarSize}}
                            nativeID={`${id}-dest`}
                        />
                    ) : (
                        // TODO: Se houver reuso, componentizar
                        <EmptyImageSvg
                            width={avatarSize - 20}
                            height={avatarSize - 20}
                        />
                    )}
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
            </HeaderBottomBar>
        </HeaderContainer>
    );
}

function ProviderDetails(props: ProviderPageProps): ReactNode {
    const {params} = props.route;
    const provider = useSelector(reduxSelectors.providerSelected);
    const navigation = useNavigation();
    const showAddress = () => null;

    if (!provider) {
        navigation.navigate(RouteName.SEARCH);
    }

    return (
        provider && (
            <ContainerPage>
                <Header provider={provider} />
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
        )
    );
}

export default ProviderDetails;
