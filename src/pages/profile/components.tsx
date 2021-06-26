import React from 'react';
import {SemiBoldText} from '../../shared/components/general/texts';
import {
    colorLabel,
    colorLabel75,
    colorPrimary,
    colorPrimary2,
    grey5,
    robotoRegular,
} from '../../shared/styles/global-styles';
import {CustomImage} from '../../shared/components/general/image';
import styled from 'styled-components/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {MenuInput, MenuOptionInput, UserBasicData} from './model';
import BxsUserCircleIcon from '../../shared/icon-svg/user-circle';

export const styles = StyleSheet.create({
    avatar: {
        marginBottom: 10,
    },
    pageTitle: {
        marginLeft: 20,
    },
});

export const VerticalCenterContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const HorizontalCenterContainer = styled.View`
    align-items: center;
`;

export const MenuOptionsHeader = (props: {
    icon: JSX.Element;
    title: string;
}) => {
    const Item = styled.View`
        flex-direction: row;
        justify-content: flex-start;
        margin: 0 0 6px 17px;
    `;
    const ItemTitle = styled(SemiBoldText)`
        color: ${colorPrimary};
        margin-left: 10px;
    `;
    return (
        <Item>
            {props.icon}
            <ItemTitle>{props.title}</ItemTitle>
        </Item>
    );
};

export const MenuOption = (
    props: MenuOptionInput & {marginTop?: boolean; marginBottom?: boolean},
) => {
    const Item = styled.TouchableOpacity`
        border-color: ${grey5};
        border-bottom-width: ${props.marginBottom ? 1 : 0}px;
        border-top-width: ${props.marginTop ? 1 : 0}px;
        border-style: solid;
        justify-content: center;
        padding: 7px 33px 6px;
        min-height: 50px;
        width: 100%;
    `;
    const ItemTitle = styled(SemiBoldText)`
        color: ${colorLabel};
        margin-bottom: 5px;
    `;
    const ItemValue = styled(SemiBoldText)`
        color: ${colorLabel75};
    `;
    return (
        <Item activeOpacity={1 / 2}>
            <ItemTitle>{props.title}</ItemTitle>
            {props.value && <ItemValue>{props.value}</ItemValue>}
        </Item>
    );
};

export const MenuOptionIcon = (props: {icon: JSX.Element; title: string}) => {
    const Container = styled.TouchableOpacity`
        margin-top: 25px;
        width: 100%;
    `;
    const Item = styled.TouchableOpacity`
        flex-direction: row;
        justify-content: flex-start;
        border-color: ${grey5};
        border-bottom-width: 1px;
        border-top-width: 1px;
        align-items: center;
        padding: 7px 0 6px 17px;
        min-height: 50px;
        width: 100%;
    `;
    const ItemTitle = styled(SemiBoldText)`
        color: ${colorPrimary};
        margin-left: 10px;
    `;
    return (
        <Container activeOpacity={1 / 2}>
            <Item>
                {props.icon}
                <ItemTitle>{props.title}</ItemTitle>
            </Item>
        </Container>
    );
};

export const MenuBlockOptions = (props: MenuInput) => {
    const Container = styled.View`
        margin-top: 25px;
        width: 100%;
    `;
    const ContainerOptions = styled.View``;
    const lastIndex = props.options.length - 1;
    return (
        <Container>
            <MenuOptionsHeader icon={props.icon} title={props.title} />
            <ContainerOptions>
                {props.options.map((o, i) => (
                    <MenuOption
                        key={o.title}
                        marginTop={true}
                        marginBottom={i === lastIndex}
                        title={o.title}
                        value={o.value}
                    />
                ))}
            </ContainerOptions>
        </Container>
    );
};

export const PrincipalData = (props: {user: UserBasicData}) => {
    const {user} = props;
    const UserLogin = styled(SemiBoldText)`
        font-size: 18px;
        color: ${colorLabel};
    `;
    const UserName = styled(UserLogin)`
        font-family: ${robotoRegular};
        margin-top: 5px;
    `;
    const avatarSize = 100;
    return (
        <HorizontalCenterContainer>
            {user.imageUrl ? (
                <CustomImage
                    uri={user.imageUrl}
                    height={avatarSize}
                    borderColor={colorPrimary}
                    borderWidth={4}
                    circle
                    style={styles.avatar}
                />
            ) : (
                <TouchableOpacity>
                    <BxsUserCircleIcon
                        color={colorPrimary2}
                        width={avatarSize}
                        height={avatarSize}
                    />
                </TouchableOpacity>
            )}
            <UserLogin>{user.email}</UserLogin>
            <UserName>{user.name}</UserName>
        </HorizontalCenterContainer>
    );
};
