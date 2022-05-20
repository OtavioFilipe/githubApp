import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(345)}px;
    height: ${RFValue(185)}px;
    margin-top: ${RFValue(10)}px;
    margin-left: ${RFValue(16)}px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(13)}px;
    margin-top: ${RFValue(10)}px;
`;

export const Icon = styled.Text`
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

export const Star = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background-color: '#FFF6D6';
    align-items: center;
    justify-content: center;
    margin-left: 98px;
`;
export const Field =styled.View`
    flex-direction: row;
    margin-left: 19px;
`;

export const EditIcon = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
    background-color: #0017FF;
`;