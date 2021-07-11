import styled from 'styled-components/native';
import {grey3} from '../../styles/global-styles';
import {pageBackgroundColor} from '../general/page/styles';

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
