import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
import { TouchableOpacity } from 'react-native';

export default function Login({ route ,navigation }) {
    const user = route.params;

    return (
        <Container>
            {user ? (<TouchableOpacity onPress={() => navigation.navigate('User')}>
                <MaterialIcons name="arrow-back"/>
                </TouchableOpacity>) : null}
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