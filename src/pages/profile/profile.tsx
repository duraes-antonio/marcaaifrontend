import React, {useEffect, useState} from 'react';
import Page from '../../shared/components/general/page/page';
import {services} from '../../data/services/di';
import {
    HorizontalCenterContainer,
    MenuBlockOptions,
    MenuOptionIcon,
    PrincipalData,
    styles,
    VerticalCenterContainer,
} from './components';
import {IconLib, IconWrapper} from '../../shared/components/icon/icon-lib';
import {PageTitle} from '../../shared/components/general/texts';
import {MenuOptionInput, UserBasicData} from './model';
import {BxsUserBadgeIcon} from '../../shared/icon-svg/user-badge';
import {colorPrimary} from '../../shared/styles/global-styles';
import BxStoreAltIcon from '../../shared/icon-svg/store-alt';
import BxLogOutIcon from '../../shared/icon-svg/log-out';

const PageHeader = () => {
    return (
        <VerticalCenterContainer>
            <IconWrapper size={28} lib={IconLib.FEATHER} name={'arrow-left'} />
            <PageTitle style={styles.pageTitle}>{'Configurações'}</PageTitle>
        </VerticalCenterContainer>
    );
};

const PageBody = (props: {user: UserBasicData}) => {
    const optionsPersonalData: MenuOptionInput[] = [
        {title: 'Meu email', value: props.user.email},
        {title: 'Meu username', value: props.user.username},
        {title: 'Meu nome', value: props.user.name},
    ];
    const optionsEstablishment: MenuOptionInput[] = [
        {title: 'Novo estabelecimento'},
        {title: 'Gerenciar estabelecimento'},
    ];
    return (
        <HorizontalCenterContainer>
            <PrincipalData user={props.user} />
            <MenuBlockOptions
                icon={
                    <BxsUserBadgeIcon
                        height={24}
                        width={24}
                        color={colorPrimary}
                    />
                }
                title={'Dados pessoais'}
                options={optionsPersonalData}
            />

            <MenuBlockOptions
                icon={
                    <BxStoreAltIcon
                        height={24}
                        width={24}
                        color={colorPrimary}
                    />
                }
                title={'Estabelecimentos'}
                options={optionsEstablishment}
            />

            <MenuOptionIcon
                title={'Sair'}
                icon={
                    <BxLogOutIcon height={24} width={24} color={colorPrimary} />
                }
            />
        </HorizontalCenterContainer>
    );
};

export const Profile = () => {
    // const user: UserState = useSelector(reduxSelectors.user);
    const [user, setUser] = useState<UserBasicData>();

    const updateUser = async () =>
        setUser(await services.auth.signIn({username: 'a', password: 'a'}));

    useEffect(() => {
        updateUser();
    });
    return user ? (
        <Page
            header={<PageHeader />}
            body={<PageBody user={user} />}
            bodyScrollable
            applyPaddingHeaderHeight={false}
        />
    ) : null;
};

export default Profile;
