import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(345)}px;
    height: ${RFValue(160)}px;
    margin-bottom: ${RFValue(8)}px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
`;

export const GitName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`;

export const SubGitName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(10)}px;
`;

export const Location = styled.Text`
    height: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-right: 10px;
    justify-content: center;
`;

export const Image = styled.Image`
    height: ${RFValue(64)}px;
    width: ${RFValue(64)}px;
    margin-right: 16px;
`;

export const FooterCard = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0px 24px;
    margin-top: 16px;
    justify-content: flex-start;
`;

export const TopCard = styled.View`
    width: 100%;
    height: 100px;
    flex-direction: row;
    padding: 0px 24px;
    align-items: center;
    justify-content: flex-start;
`;

export const UserInformation = styled.View`
`;

export const Trash = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background-color: #E8E8E8;
    align-items: center;
    justify-content: center;
    margin-left: 39px;
`;