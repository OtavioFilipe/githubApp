import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    Container, 
    Text, 
    SubText, 
    Image, 
    Footer,
    UnderlineText
} from './styles';


import image from "../../assets/icons/github.png"

import Input from '../../components/Input'
import Button from '../../components/Button';

export default function Login({ navigation }: any) {
    const [userName, setUserName] = useState('') 

    function handleGetUser() {
        fetch('https://api.github.com/users/' + userName)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            storeData(json);
            navigation.navigate("User", {
                data: JSON.stringify(json)
            })
            
        });
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          console.log(e);
          
        }
      }

    return (
        <Container>
            <Image source={image}/>
            <Text>Buscar usuário</Text>
            <SubText>Crie sua conta através do seu usuário do GitHub</SubText>
            <Input onChangeText={(event) => setUserName(event)} 
                placeholder='@username'
            />
            <Button onPress={() => handleGetUser()}
                title='Cadastrar'
            />
            <Footer>Termos de <UnderlineText>política</UnderlineText> e <UnderlineText>privacidade</UnderlineText></Footer>
        </Container>
    );
};