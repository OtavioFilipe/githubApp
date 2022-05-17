import React from 'react';
import { UsersCard } from '../../components/UsersCard';

import { Container, Header, Field } from './styles';


export default function Users() {
    return (
        <Container>
            <Header />
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