import React, {useCallback, useEffect, useState} from 'react';
import {PageTitle} from '../../shared/components/general/texts';
import {IconLib, IconWrapper} from '../../shared/components/icon/icon-lib';
import {
    ButtonGetLocation,
    SearchBar,
    SearchBarContainer,
    SearchBarInput,
} from './components';
import {IProvider} from '../../domain/entities/provider';
import ProviderList from '../../shared/components/provider/provider-list/provider-list';
import {Page} from '../../shared/components/general/page/page';
import {services} from '../../data/services/di';
import {Nullable, StringNullable} from '../../shared/types/general';
import {PageHead} from '../../shared/components/general/page/styles';
import {Location} from '../../models/location';
import {getLocation} from '../../shared/util/permission';
import {colorPrimary} from '../../shared/styles/global-styles';

const debounce = require('lodash.debounce');

const texts = {pageTitle: 'Busque por um serviço ou estabelecimento'};

function SearchPage(): JSX.Element {
    const [providers, setProviders] = useState<IProvider[]>([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const [coords, setCoords] = useState<Nullable<Location>>();

    const searchProviders = useCallback(
        async (textSearch?: StringNullable, location?: Nullable<Location>) => {
            setLoading(true);
            setProviders(await services.provider.search(textSearch, location));
            setLoading(false);
        },
        [],
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceSearch = useCallback(
        debounce(
            (textSearch?: string, location?: Nullable<Location>) =>
                searchProviders(textSearch, location),
            250,
        ),
        [],
    );

    const handleChange = (value: string, location?: Nullable<Location>) => {
        setText(value);
        debounceSearch(value, location);
    };

    useEffect(() => {
        getLocation(location => setCoords(location));
    }, []);

    useEffect(() => {
        debounceSearch(text, coords);
    }, [debounceSearch, text, coords]);

    const Header = (
        <PageHead>
            <PageTitle>{texts.pageTitle}</PageTitle>
            <SearchBarContainer>
                <SearchBar>
                    <SearchBarInput
                        onChangeText={setText}
                        onTextInput={e =>
                            handleChange(e.nativeEvent.text, coords)
                        }
                        value={text}
                    />
                    <IconWrapper
                        lib={IconLib.FEATHER}
                        name={'search'}
                        size={24}
                    />
                </SearchBar>

                <ButtonGetLocation
                    onPress={() =>
                        getLocation(location => setCoords(location))
                    }>
                    <IconWrapper
                        color={coords ? colorPrimary : undefined}
                        lib={IconLib.MATERIAL_COMMUNITY}
                        name={'crosshairs-gps'}
                        size={24}
                    />
                </ButtonGetLocation>
            </SearchBarContainer>
        </PageHead>
    );
    const Body = (
        <ProviderList
            navigation={navigation}
            header={Header}
            loading={loading}
            onRefresh={() => searchProviders(text)}
            providers={providers}
        />
    );
    return <Page body={Body} bodyScrollable={false} />;
}

export default SearchPage;
