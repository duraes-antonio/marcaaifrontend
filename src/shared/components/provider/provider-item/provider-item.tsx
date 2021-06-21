import React from 'react';
import {
    IProvider,
    providerCategoryName,
} from '../../../../domain/entities/provider';
import {
    Image,
    ProviderCategoryName,
    ProviderContainer,
    ProviderInfo,
    ProviderName,
    styles,
} from './styles';
import RatingView from '../../rating-view/rating-view';
import ActionButton from '../../buttons/action-button';
import {IconLib} from '../../icon/icon-lib';
import {colorLabel50, colorPrimary} from '../../../styles/global-styles';

const ProviderItem = (props: {provider: IProvider; liked: boolean}) => {
    const {provider} = props;
    return (
        <ProviderContainer activeOpacity={3 / 4} style={styles.containerShadow}>
            <ActionButton
                style={styles.likeButton}
                color={props.liked ? colorPrimary : colorLabel50}
                lib={IconLib.MATERIAL_COMMUNITY}
                name={'heart'}
            />
            <Image source={{uri: provider.imageUrl}} />
            <ProviderInfo>
                <ProviderName>{provider.name}</ProviderName>
                <ProviderCategoryName>
                    {providerCategoryName[provider.category]}
                </ProviderCategoryName>
                <RatingView value={provider.averageRating} />
            </ProviderInfo>
        </ProviderContainer>
    );
};

export default ProviderItem;
