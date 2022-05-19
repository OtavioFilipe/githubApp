import React from "react";
import { TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { 
    Container, 
    Image, 
    Text, 
    SubText, 
    Footer, 
    UnderlineText,
    Field
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function AddUser({ route, navigation }) {
    const user = route.params;

    return (
        <Container>
            {user ? (<TouchableOpacity onPress={() => navigation.navigate('User')}>
                <MaterialIcons name="arrow-back" size={32} style={{ marginRight: 260 }} />
            </TouchableOpacity>) : null}

            <Image source={require('../../assets/icons/github.png')} />
            <Text>Buscar usuário</Text>
            <SubText>Adicione seus novos usuários do GitHub</SubText>
            <Input
                placeholder='@username'
            />
            <Button onPress={() => navigation.navigate('User')}
                title='Adicionar'
            />
            <Field>
                <Footer>Termos de <UnderlineText>política</UnderlineText> e <UnderlineText>privacidade</UnderlineText></Footer>
            </Field>
        </Container>
    );
};