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
    Tags,
} from './styles';
import ActionButton from '../../buttons/action-button';
import {IconLib} from '../../icon/icon-lib';
import {colorLabel50, colorPrimary} from '../../../styles/global-styles';
import {useDispatch} from 'react-redux';
import {actionsUser} from '../../../store/modules/user/actions';
import Tag from '../../tag/tag';
import TagWorkPdayStatus from '../../tag/tag-workday';

const ProviderItem = (props: {provider: IProvider; liked: boolean}) => {
    const {provider, liked} = props;
    const dispatch = useDispatch();
    const toggleLike = () => {
        const action = liked
            ? actionsUser.unlikeProviderRequest(props.provider.id)
            : actionsUser.likeProviderRequest(props.provider.id);
        dispatch(action);
    };
    return (
        <ProviderContainer activeOpacity={3 / 4} style={styles.containerShadow}>
            <ActionButton
                onPress={() => toggleLike()}
                style={{color: liked ? colorPrimary : colorLabel50}}
                lib={IconLib.MATERIAL_COMMUNITY}
                name={'heart'}
            />
            <Image source={{uri: provider.imageUrl}} />
            <ProviderInfo>
                <ProviderName>{provider.name}</ProviderName>
                <ProviderCategoryName>
                    {providerCategoryName[provider.category]}
                </ProviderCategoryName>
                <Tags>
                    <TagWorkPdayStatus
                        status={provider.workStatus}
                        style={styles.tagWorkday}
                    />
                    <Tag>10 km</Tag>
                </Tags>
            </ProviderInfo>
        </ProviderContainer>
    );
};

export default ProviderItem;
