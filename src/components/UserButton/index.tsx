import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TextInputProps {
    title: string;
    onPress: () => void;
}

export function UserButton({ title, onPress } : Props) {
    return (
        <Container onPress={onPress}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}