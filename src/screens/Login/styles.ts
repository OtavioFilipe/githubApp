import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: ${(RFValue(22))}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;