import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IdType} from '../../shared/store/types';
import {RouteName} from '../../shared/routes/routes';
import {IProvider} from '../../domain/entities/provider';
import {Image} from 'react-native';

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
        <Image
            source={{uri: params?.item?.imageUrl ?? ''}}
            style={{width: avatarSize, height: avatarSize}}
            nativeID={`${params.id}-dest`}
        />
    );
}

export default ProviderDetails;
