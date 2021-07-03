import React, {memo} from 'react';
import {
    IProvider,
    providerCategoryName,
} from '../../../../domain/entities/provider';
import {
    ProviderCategoryName,
    ProviderContainer,
    ProviderInfo,
    ProviderName,
    styles,
    Tags,
} from './styles';
import ActionButton from '../../buttons/action-button';
import {IconLib} from '../../icon/icon-lib';
import {colorLabel50, colorPrimary} from '../../../styles/global-styles';
import {useDispatch} from 'react-redux';
import {actionsUser} from '../../../store/modules/user/actions';
import TagWorkdayStatus from '../../tag/tag-workday';
import TagDistance from '../../tag/tag-distance';
import {SharedElement} from 'react-navigation-shared-element';
import {CustomImage} from '../../general/image';

function ProviderItem(props: {
    provider: IProvider;
    liked: boolean;
    onPress: () => void;
}): JSX.Element {
    const {provider, liked} = props;
    const dispatch = useDispatch();
    const toggleLike = () => {
        const action = liked
            ? actionsUser.unlikeProviderRequest(props.provider.id)
            : actionsUser.likeProviderRequest(props.provider.id);
        dispatch(action);
    };
    return (
        <ProviderContainer
            activeOpacity={3 / 4}
            onPress={props.onPress}
            style={styles.containerShadow}>
            <ActionButton
                onPress={() => toggleLike()}
                style={{color: liked ? colorPrimary : colorLabel50}}
                lib={IconLib.MATERIAL_COMMUNITY}
                name={'heart'}
            />
            <SharedElement id={provider.id}>
                <CustomImage
                    uri={provider.imageUrl ?? ''}
                    width={100}
                    height={100}
                />
            </SharedElement>
            <ProviderInfo>
                <SharedElement id={`${provider.id}-title`}>
                    <ProviderName>{provider.name}</ProviderName>
                </SharedElement>
                <SharedElement id={`${provider.id}-category`}>
                    <ProviderCategoryName>
                        {providerCategoryName[provider.category]}
                    </ProviderCategoryName>
                </SharedElement>
                <Tags>
                    <TagWorkdayStatus
                        status={provider.workStatus}
                        style={styles.tagWorkday}
                    />
                    {provider.distanceInMeters && (
                        <TagDistance
                            distanceInMeters={provider.distanceInMeters}
                        />
                    )}
                </Tags>
            </ProviderInfo>
        </ProviderContainer>
    );
}

export default memo(ProviderItem);
