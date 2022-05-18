import React from 'react';
import { TextInputProps } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Container, Field, IconContainer } from './styles'

type Props = TextInputProps;

export function Input({...rest} : Props) {
    return (
        <Container>
            <IconContainer style={{width: '10%'}}>
            <MaterialIcons name="account-circle" size={24} color="gray" />
            </IconContainer>
            <Field {...rest}/>
        </Container>
    );
};