import React, {memo} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IdType} from '../../shared/store/types';
import {RouteName} from '../../shared/routes/routes';
import {IProvider} from '../../domain/entities/provider';
import {SharedElement} from 'react-navigation-shared-element';
import {CustomImage} from '../../shared/components/general/image';

type ProviderParams = {
    [RouteName.PROVIDER]: {id: IdType; item?: IProvider};
};

export interface ProviderPageProps {
    route: RouteProp<ProviderParams, RouteName.PROVIDER>;
    navigation: StackNavigationProp<ProviderParams, RouteName.PROVIDER>;
}

const avatarSize = 120;

function ProviderDetails(props: ProviderPageProps): JSX.Element {
    const {params} = props.route;
    return (
        <SharedElement id={`image-${params.id}`}>
            <CustomImage
                borderRadius={15}
                height={avatarSize}
                uri={params?.item?.imageUrl ?? ''}
            />
        </SharedElement>
    );
}

export default memo(ProviderDetails);
