import React from 'react';
import { Container, Text, SubText, Image, Footer } from './styles';

import { Input } from '../../components/Input'

export function Login() {
    return (
        <Container>
            <Image source={require('../../assets/icons/github.png')}/>
            <Text>Buscar usuário</Text>
            <SubText>Crie sua conta através do seu usuário do GitHub</SubText>
            <Input 
                placeholder='@username'
            />
            <Footer>Termos de política e privacidade</Footer>
        </Container>
    );
};