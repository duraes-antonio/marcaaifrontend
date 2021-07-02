import styled, {css} from 'styled-components/native';
import {colorInputForm, colorLabel} from '../../shared/styles/global-styles';

const SearchBarItemCSS = css`
    align-items: center;
    background-color: ${colorInputForm};
    border-radius: 10px;
    justify-content: center;
    flex-direction: row;
    height: 45px;
`;

export const SearchBar = styled.View`
    ${SearchBarItemCSS};
    justify-content: space-between;
    padding: 0 15px;
    flex: 1;
`;

export const SearchBarInput = styled.TextInput`
    color: ${colorLabel};
    font-size: 16px;
    width: 85%;
`;

export const ButtonGetLocation = styled.TouchableOpacity`
    ${SearchBarItemCSS};
    width: 45px;
    margin-left: 5px;
`;

export const SearchBarContainer = styled.View`
    flex-direction: row;
    margin: 10px 0;
`;
