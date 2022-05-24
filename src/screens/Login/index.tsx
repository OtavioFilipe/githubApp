import React from 'react';
import { 
    Container, 
    Text, 
    SubText, 
    Image, 
    Footer,
    UnderlineText
} from './styles';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button';

export default function Login({ navigation }: any) {

    return (
        <Container>
            <Image source={require('../../assets/icons/github.png')}/>
            <Text>Buscar usuário</Text>
            <SubText>Crie sua conta através do seu usuário do GitHub</SubText>
            <Input 
                placeholder='@username'
            />
            <Button onPress={() => navigation.navigate('User')}
                title='Cadastrar'
            />
            <Footer>Termos de <UnderlineText>política</UnderlineText> e <UnderlineText>privacidade</UnderlineText></Footer>
        </Container>
    );
};