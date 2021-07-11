import {
    colorLabel,
    colorPrimary,
    grey3,
} from '../../shared/styles/global-styles';
import {pageBackgroundColor} from '../../shared/components/general/page/styles';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {CommonText, SemiBoldText} from '../../shared/components/general/texts';

export const avatarSize = 110;

export const AvatarWrapper = styled.View`
    background-color: white;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = styled.View`
    background-color: ${grey3};
    min-height: 170px;
    width: 100%;
`;

export const HeaderBottomBar = styled.View`
    flex-direction: row;
    min-height: 120px;
    width: 100%;
    border-top-left-radius: 90px;
    background-color: ${pageBackgroundColor};
    position: absolute;
    bottom: 0;
    padding: 0 25px;
`;

export const HeaderInfo = styled.View`
    top: 15px;
    flex: 1;
    margin-left: 15px;
`;

export const ProviderName = styled(SemiBoldText)`
    color: ${colorPrimary};
    flex-wrap: wrap;
`;

export const ProviderCategory = styled(CommonText)`
    color: ${colorLabel};
    font-size: 13px;
`;

export const TagsContainer = styled.View`
    flex-direction: row;
    margin-top: 5px;
`;

export const ContainerPage = styled.View`
    align-items: center;
    background-color: ${pageBackgroundColor};
    padding-bottom: 20px;
`;

export const styles = StyleSheet.create({
    avatarImage: {
        borderRadius: 15,
        height: avatarSize,
        width: avatarSize,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, .75)',
        top: -18,
        overflow: 'hidden',
    },
    favoriteButton: {
        position: 'absolute',
        top: -20,
        right: 25,
        backgroundColor: 'white',
    },
    serviceList: {
        marginTop: 15,
        paddingTop: 10,
    },
    showAddressButton: {
        height: 50,
        marginTop: 15,
    },
    tagWorkday: {marginRight: 5},
});
