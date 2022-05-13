import React from 'react';
import { TextInputProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'



import { Container } from './styles'

type Props = TextInputProps;

export function Input({...rest} : Props) {
    return (
        <Container {...rest}/>
    );
};