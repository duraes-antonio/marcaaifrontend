import React from 'react';
import {RouteProp} from '@react-navigation/native';
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
import styled from 'styled-components/native';
import ButtonContained from '../../shared/components/buttons/button';
import {pageBackgroundColor} from '../../shared/components/general/page/styles';

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
                            style={{marginRight: 5}}
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

const ContainerPage = styled.View`
    align-items: center;
    min-height: 100%;
    flex: 1;
    background-color: ${pageBackgroundColor};
`;

function ProviderDetails(props: ProviderPageProps): JSX.Element {
    const {params} = props.route;
    const showAddress = () => null;
    return (
        <ContainerPage>
            <Header provider={params.item} />
            <ButtonContained
                icon={({size, color}) => (
                    <IconWrapper
                        size={24}
                        color={color}
                        name={'map-marker-alt'}
                        lib={IconLib.FONT_AWESOME_5}
                    />
                )}
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                }}
                text={'Ver endereço'}
                onPress={showAddress}
            />
        </ContainerPage>
    );
}

export default ProviderDetails;
