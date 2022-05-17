import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: ${RFValue(375)}px;
    height: ${RFValue(72)}px;

    background-color: red;
`;

// export const Field = styled.View`
//     padding: ${RFValue(16)}px;
// `;

export const Field = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding: ${RFValue(16)}px;
`;