import React, {useCallback, useEffect, useState} from 'react';
import {IProvider} from '../../domain/entities/provider';
import {PageHead} from '../../shared/components/general/page/styles';
import {PageTitle} from '../../shared/components/general/texts';
import ProviderList from '../../shared/components/provider/provider-list/provider-list';
import {Page} from '../../shared/components/general/page/page';
import {services} from '../../data/services/di';
import FavoriteEmpty from './favorite-empty';

const FavoriteProvider = () => {
    const [providers, setProviders] = useState<IProvider[]>([]);
    const [loading, setLoading] = useState(false);

    const getFavorite = useCallback(async () => {
        setLoading(true);
        setProviders(await services.provider.getFavorites());
        setLoading(false);
    }, []);

    useEffect(() => {
        getFavorite();
    }, [getFavorite]);

    const Header = (
        <PageHead>
            <PageTitle>{'Favoritos'}</PageTitle>
        </PageHead>
    );
    const Body = (
        <ProviderList
            header={Header}
            loading={loading}
            onRefresh={() => getFavorite()}
            providers={providers}
        />
    );
    const BodyEmptyFav = <FavoriteEmpty />;
    return (
        <Page
            header={
                providers.length < 1 ? (
                    <PageTitle>{'Favoritos'}</PageTitle>
                ) : null
            }
            applyPaddingBody={!providers.length}
            body={providers.length < 1 ? BodyEmptyFav : Body}
            bodyScrollable={false}
        />
    );
};

export default FavoriteProvider;
