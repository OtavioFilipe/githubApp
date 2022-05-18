import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: 40px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.secondaryText};
    border-radius: 4px;
    align-items: flex-start;
    flex-direction: row;
`;

export const Field = styled.TextInput`
    width: 70%;
    height: 100%;
    font-size: ${RFValue(16)}px;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
`;

export const IconContainer = styled.View`
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding-left: 8px;

`;