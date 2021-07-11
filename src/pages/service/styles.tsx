import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
    BoldText,
    CommonText,
    SemiBoldText,
} from '../../shared/components/general/texts';
import {
    colorGreen,
    colorLabel,
    colorPrimary,
} from '../../shared/styles/global-styles';
import {
    pageBackgroundColor,
    pagePaddingHorizontal,
} from '../../shared/components/general/page/styles';

export const ServiceInfo = styled.View`
    margin-left: 10px;
    flex: 1;
    margin-top: 15px;
`;

export const ServiceName = styled(BoldText)`
    color: ${colorLabel};
    font-size: 16px;
`;

export const ServiceDescription = styled(CommonText)`
    font-size: 12px;
    color: ${colorLabel};
    line-height: ${12 * 1.5}px;
    flex: 1;
`;

export const ProviderName = styled(CommonText)`
    font-size: 14px;
    color: ${colorPrimary};
`;

export const Price = styled(SemiBoldText)`
    color: ${colorGreen};
    font-size: 13px;
    letter-spacing: 0.25px;
`;

export const RatingPrice = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3px;
`;

export const ReviewsTitle = styled(ServiceName)`
    color: ${colorPrimary};
    align-self: flex-start;
    margin-bottom: 5px;
`;

export const Body = styled.View`
    padding: 0 ${pagePaddingHorizontal}px;
    align-items: center;
`;

export const Page = styled.ScrollView`
    background-color: ${pageBackgroundColor};
`;

export const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 20,
    },
});
