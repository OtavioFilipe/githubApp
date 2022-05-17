import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(295)}px;
    height: ${RFValue(40)}px;
    margin-top: ${RFValue(25)}px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    
    background-color: ${({ theme }) => theme.colors.Text};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.defaultColorText};

    font-size: ${RFValue(16)}px;
`;