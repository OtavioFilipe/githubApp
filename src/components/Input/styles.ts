import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
    width: 100%;
    margin-top: ${RFValue(43)}px;

    border-style: solid;
    border-color: ${({ theme }) => theme.colors.secondaryText};
`;