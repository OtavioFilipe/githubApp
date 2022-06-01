import React from 'react';
import { FlatListProps } from  'react-native'

import { Container } from './styles';

interface Props extends FlatListProps<any> {
    
}

export default function CustomFlatlist({...rest}: Props) {
    return (
        <Container 
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        {...rest}/>
    );
};