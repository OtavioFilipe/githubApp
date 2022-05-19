import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { Container, Header, Image } from './styles';

import { SearchBox } from "../../components/SearchBox";

export default function Repositories() {
    
    return (
        <Container>
            <Header>
                <MaterialIcons name="arrow-back" size={32} style={{ marginRight: 260 }} />
                <Image source={require('../../assets/icons/userAvatar.png')}/>
            </Header>
            <SearchBox
                placeholder="Buscar um repositório..."
            />
        </Container>
    );
};