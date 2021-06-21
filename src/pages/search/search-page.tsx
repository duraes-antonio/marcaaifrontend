import React, {useCallback, useEffect, useState} from 'react';
import {PageTitle} from '../../shared/components/general/texts';
import {IconLib, IconWrapper} from '../../shared/components/icon/icon-lib';
import {
    ButtonFilters,
    SearchBar,
    SearchBarContainer,
    SearchBarInput,
} from './components';
import {IProvider} from '../../domain/entities/provider';
import ProviderList from '../../shared/components/provider/provider-list/provider-list';
import {Page} from '../../shared/components/general/page/page';
import {services} from '../../data/services/di';
import {StringNullable} from '../../shared/types/general';
import {PageHead} from '../../shared/components/general/page/styles';

const debounce = require('lodash.debounce');

const texts = {
    pageTitle: 'Busque por um serviço ou estabelecimento',
};

const SearchPage = () => {
    const [providers, setProviders] = useState<IProvider[]>([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const searchProviders = useCallback(async (textSearch?: StringNullable) => {
        setLoading(true);
        setProviders(await services.provider.search(textSearch));
        setLoading(false);
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceSearch = useCallback(
        debounce((textSearch?: string) => searchProviders(textSearch), 250),
        [],
    );

    const handleChange = (value: string) => {
        setText(value);
        debounceSearch(value);
    };

    useEffect(() => {
        debounceSearch(text);
    }, [debounceSearch, text]);

    const Header = (
        <PageHead>
            <PageTitle>{texts.pageTitle}</PageTitle>
            <SearchBarContainer>
                <SearchBar>
                    <SearchBarInput
                        onChangeText={setText}
                        onTextInput={e => handleChange(e.nativeEvent.text)}
                        value={text}
                    />
                    <IconWrapper
                        lib={IconLib.FEATHER}
                        name={'search'}
                        size={24}
                    />
                </SearchBar>

                <ButtonFilters>
                    <IconWrapper
                        lib={IconLib.MATERIAL_COMMUNITY}
                        name={'filter-variant'}
                        size={24}
                    />
                </ButtonFilters>
            </SearchBarContainer>
        </PageHead>
    );
    const Body = (
        <ProviderList
            header={Header}
            loading={loading}
            onRefresh={() => searchProviders(text)}
            providers={providers}
        />
    );
    return <Page body={Body} bodyScrollable={false} />;
};

export default SearchPage;
