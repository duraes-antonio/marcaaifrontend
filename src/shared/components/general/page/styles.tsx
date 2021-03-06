import styled, {css} from 'styled-components/native';

const paddingTopScreen = 30;

export const pageBackgroundColor = 'white';
export const pagePaddingHorizontal = 25;

export const styleBody = css`
    padding: 5px ${pagePaddingHorizontal}px 0;
    height: 100%;
    background-color: ${pageBackgroundColor};
`;

export const PageContainer = styled.View`
    background: ${pageBackgroundColor};
    min-height: 100%;
    position: relative;
`;

export const PageHead = styled.View`
    background-color: white;
    padding: ${paddingTopScreen}px ${pagePaddingHorizontal}px 15px;
`;

export const PageBodyScroll = styled.ScrollView``;

export const PageBodyContent = styled.View`
    ${styleBody}
`;

export const PageBodyNew = styled.View`
    ${styleBody}
`;
