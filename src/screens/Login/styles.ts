import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
    width: ${RFValue(198)}px;
    height: ${RFValue(80)}px;
    margin-top: ${RFValue(60)}px;
`;

export const Text = styled.Text`
   font-family: ${({ theme }) => theme.fonts.bold};
   font-size: ${RFValue(22)}px;
   
   margin-top: ${RFValue(100)}px;
   margin-right: ${RFValue(137)}px;
`;

export const SubText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.secondaryText};

    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(10)}px;
    margin-right: ${RFValue(40)}px;
`;

export const Footer = styled.Text`
    margin-top: ${RFValue(201)}px;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: ${RFValue(16)}px;
`;
