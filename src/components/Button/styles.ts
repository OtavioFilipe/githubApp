import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: black;
    margin-top: ${RFValue(25)}px;
    width: ${RFValue(290)}px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.defaultColorText};

    font-size: ${RFValue(16)}px;
`;