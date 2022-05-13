import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    width: 100%;
    margin-top: ${RFValue(43)}px;

    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.secondaryText};
    border-radius: 4px;
    align-items: flex-start;
    padding: 10px 40px;

    font-size: ${RFValue(16)}px;
`;
