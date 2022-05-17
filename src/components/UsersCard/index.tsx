import React from 'react';

import { Container, GitName, SubGitName, Location, Image, Field, SubText } from './styles';

interface GitUserCard {
    id: string;
    name: string;
    user: string;
    city: string;
    company: string;
}

export function UsersCard({ name, user, city, company }: GitUserCard) {
    return (
        <Container>
            <Field>
                <Image source={require('../../assets/icons/userAvatar.png')}/>
                <GitName>
                    {name}
                    <SubText>
                        <SubGitName>
                            {user}
                        </SubGitName>
                    </SubText>
                </GitName>
            </Field>
            <Location>
                {company}
                {city}
            </Location>
        </Container>
    );
};