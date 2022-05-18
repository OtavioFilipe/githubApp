import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: ${RFValue(375)}px;
    height: ${RFValue(72)}px;

    justify-content: space-between;
    padding: ${RFValue(16)}px;
    margin-top: ${getStatusBarHeight()};
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
`;

export const Image = styled.Image`
    width: ${RFValue(99)}px;
    height: ${RFValue(40)}px;
`;