import React from 'react';
import { TextInputProps } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Container, Field, IconContainer, FilterIcon } from './styles';

type Props = TextInputProps;

export default function SearchBox({...rest} : Props) {
    return (
        <Container>
            <IconContainer style={{width: '10%'}}>
                <MaterialIcons name='search' size={24} color='gray'/>
            </IconContainer>
            <Field {...rest}/>
            <FilterIcon>
                <MaterialIcons name="filter-list" size={24}/>
            </FilterIcon>
        </Container>
    );
};