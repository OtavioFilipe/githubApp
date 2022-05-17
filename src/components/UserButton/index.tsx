import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TextInputProps {
    title: string;
}

export function UserButton({ title } : Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}