import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: ${RFValue(96)}px;
    height: ${RFValue(21)}px;
    background-color: #E5E5E5;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
`;