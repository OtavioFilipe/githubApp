import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(345)}px;
    height: ${RFValue(160)}px;
    margin-top: ${RFValue(8)}px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
`;

export const Field = styled.View`
    margin-top: ${RFValue(32)}px;
    margin-left: ${RFValue(24)}px;
    width: ${RFValue(240)}px;
    height: ${RFValue(64)}px;
    flex-direction: row;
`;

export const SubText = styled.View``;

export const GitName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    margin-left: ${RFValue(16)}px;
    margin-top: ${RFValue(9)}px;
`;

export const SubGitName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Location = styled.Text`
    width: ${RFValue(262)}px;
    height: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-left: ${RFValue(24)}px;
    margin-top: ${RFValue(16)}px;
`;

export const Image = styled.Image`
    height: ${RFValue(64)}px;
    width: ${RFValue(64)}px;
`;