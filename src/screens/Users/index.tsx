import React from 'react';
import { UserButton } from '../../components/UserButton';
import { UsersCard } from '../../components/UsersCard';

import { Container, Header, Field, Image } from './styles';


export default function Users() {
    return (
        <Container>
            <Header>
                <Image source={require('../../assets/icons/github.png')}/>
                <UserButton title='Adicionar novo'/>
            </Header>
            <Field >
                <UsersCard
                    name='John Doe Santos'
                    user='@johndoesantos'
                    company='GO.K Digital'
                    city='São Paulo, Brazil'
                />
                <UsersCard
                    name='John Doe Santos'
                    user='@johndoesantos'
                    company='GO.K Digital'
                    city='São Paulo, Brazil'
                />
                <UsersCard
                    name='John Doe Santos'
                    user='@johndoesantos'
                    company='GO.K Digital'
                    city='São Paulo, Brazil'
                />
                <UsersCard
                    name='John Doe Santos'
                    user='@johndoesantos'
                    company='GO.K Digital'
                    city='São Paulo, Brazil'
                />
                <UsersCard
                    name='John Doe Santos'
                    user='@johndoesantos'
                    company='GO.K Digital'
                    city='São Paulo, Brazil'
                />
            </Field>
        </Container>
    );
};