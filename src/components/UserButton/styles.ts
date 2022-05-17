import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(154)}px;
    height: ${RFValue(32)}px;
    background-color: ${({ theme }) => theme.colors.Text};
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(100)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.defaultColorText};
    font-size: ${RFValue(16)}px;
`;