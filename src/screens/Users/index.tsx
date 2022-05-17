import React from 'react';
import { FlatList } from 'react-native';
import { UserButton } from '../../components/UserButton';
import { UsersCard } from '../../components/UsersCard';

import { Container, Header, Image } from './styles';

interface DataListProps {
    id: string;
    name: string;
    user: string;
    company: string;
    city: string;
  }

export default function Users() {
    const data: DataListProps[] = [
        {
            id: '1',
            name: 'John Doe Santos',
            user: '@johndoesantos',
            company: 'GO.K Digital',
            city: 'São Paulo, Brazil'
        },
        {
            id: '2',
            name: 'John Doe Santos',
            user: '@johndoesantos',
            company: 'GO.K Digital',
            city: 'São Paulo, Brazil'
        },
        {
            id: '3',
            name: 'John Doe Santos',
            user: '@johndoesantos',
            company: 'GO.K Digital',
            city: 'São Paulo, Brazil'
        },
        {
            id: '4',
            name: 'John Doe Santos',
            user: '@johndoesantos',
            company: 'GO.K Digital',
            city: 'São Paulo, Brazil'
        },
        {
            id: '5',
            name: 'John Doe Santos',
            user: '@johndoesantos',
            company: 'GO.K Digital',
            city: 'São Paulo, Brazil'
        }
    ];
    
    return (
        <Container>
            <Header>
                <Image source={require('../../assets/icons/github.png')}/>
                <UserButton title='Adicionar novo'/>
            </Header>
            {/* <Field >
                <UsersCard
                    name='John Doe Santos'
                    user='@johndoesantos'
                    company='GO.K Digital'
                    city='São Paulo, Brazil'
                />
            </Field> */}
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => 
                <UsersCard
                id={item.id}    
                name={item.name}
                user={item.user}
                company={item.company}
                city={item.city}
                />}
            />
        </Container>
    );
};