import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: ${RFValue(375)}px;
    height: ${RFValue(72)}px;

    justify-content: space-between;
    padding: ${RFValue(16)}px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.defaultColorText};
`;

export const Image = styled.Image`
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
`;