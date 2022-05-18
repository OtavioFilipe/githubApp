import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

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
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(10)}px;

    color: ${({ theme }) => theme.colors.secondaryText};
    margin-bottom: 32px;
`;

export const Footer = styled.Text`
    margin-top: ${RFValue(160)}px;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    
    color: ${({ theme }) => theme.colors.secondaryText};
`;

export const UnderlineText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    text-decoration: underline;
`;