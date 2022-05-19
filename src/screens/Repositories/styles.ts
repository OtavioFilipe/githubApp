import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    
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
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
`;

export const Title = styled.Text``;