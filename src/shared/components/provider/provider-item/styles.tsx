import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
    colorLabel,
    colorPrimary,
    robotoMedium,
    robotoRegular,
} from '../../../styles/global-styles';

export const styles = StyleSheet.create({
    containerShadow: {
        elevation: 6,
        shadowColor: 'rgba(0, 0, 0, .6)',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    likeButton: {
        borderRadius: 25,
        bottom: 0,
    },
});

export const ProviderContainer = styled.TouchableOpacity`
    background-color: white;
    border-radius: 15px;
    min-height: 100px;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
`;

export const Image = styled.Image`
    height: 100%;
    width: 100px;
`;

export const ProviderInfo = styled.View`
    flex: 1;
    padding: 17px 10px;
    width: 100%;
`;

const CommomText = styled.Text`
    color: ${colorPrimary};
    font-size: 13px;
    font-weight: 600;
    font-family: ${robotoMedium};
    margin-bottom: 8px;
`;

export const ProviderName = styled(CommomText)``;

export const ProviderCategoryName = styled(CommomText)`
    color: ${colorLabel};
    font-size: 12px;
    font-family: ${robotoRegular};
    max-width: 100%;
`;
