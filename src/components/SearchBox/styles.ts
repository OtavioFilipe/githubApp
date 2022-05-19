import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(288)}px;
    height: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
    border-radius: ${RFValue(4)}px;
    align-items: flex-start;
    flex-direction: row;
    margin-left: ${RFValue(16)}px;
    margin-top: ${RFValue(8)}px;
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
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
`;

export const FilterIcon = styled.View`
    width: 48px;
    height: 40px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    margin-left: 70px;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
`;