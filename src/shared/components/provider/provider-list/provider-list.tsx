import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IProvider} from '../../../../domain/entities/provider';
import ProviderItem from '../provider-item/provider-item';
import {pagePaddingHorizontal} from '../../general/page/styles';
import {useDispatch, useSelector} from 'react-redux';
import reduxSelectors from '../../../store/root-selector';
import {RouteName} from '../../../routes/routes';
import {useNavigation} from '@react-navigation/native';
import {actionsTemp} from '../../../store/modules/temp/actions';

const ListContainer = styled.View`
    overflow: visible;
`;

const ItemContainer = styled.View`
    overflow: visible;
    padding-top: 5px;
    padding-right: ${pagePaddingHorizontal}px;
    padding-left: ${pagePaddingHorizontal}px;
    margin-bottom: 10px;
`;

export interface ProviderListProps {
    header?: JSX.Element;
    loading?: boolean;
    onRefresh?: () => void;
    providers: IProvider[];
}

const ProviderList = (props: ProviderListProps) => {
    const {providersFavorite} = useSelector(reduxSelectors.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const showDetails = (p: IProvider) => {
        dispatch(actionsTemp.selectProvider(p));
        navigation.navigate(RouteName.PROVIDER);
    };

    const favorites = new Set(providersFavorite);
    const renderItem = (data: {item: IProvider}) => (
        <ItemContainer key={data.item.id}>
            <ProviderItem
                liked={favorites.has(data.item.id)}
                key={data.item.id}
                onPress={() => showDetails(data.item)}
                provider={data.item}
            />
        </ItemContainer>
    );
    return (
        <ListContainer>
            <FlatList
                data={props.providers}
                ListHeaderComponent={props.header}
                keyExtractor={p => p.id}
                refreshing={props.loading}
                onRefresh={props.onRefresh}
                renderItem={renderItem}
                stickyHeaderIndices={[0]}
            />
        </ListContainer>
    );
};

export default ProviderList;
