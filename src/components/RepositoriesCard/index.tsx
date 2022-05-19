import React from "react";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  Text,
  Description,
  Location,
  FooterCard,
  TopCard,
  UserInformation,
  Star
} from "./styles";

export interface GitUserCard {
  id: string;
  projectName: string;
  description: string;
  language: string;
  stars: number;
  access: number;
  days: string;
}

export function RepositoriesCard({ projectName, description, stars, days, language, access }: GitUserCard) {
  return (
    <Container>
      <TopCard>
        <UserInformation >
            <View style={{flexDirection: 'row'}}>
            <Text>
                {projectName}
            </Text>
            <MaterialIcons name='keyboard-arrow-right' size={24} />
            </View>
            <Description>
                {description}
            </Description>
        </UserInformation>
        <Star>
            <MaterialIcons name='star' size={20} color='gold' />
        </Star>
      </TopCard>
      <FooterCard>
            <MaterialIcons name='language' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {language}
        </Location>
            <MaterialIcons name='star' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {stars}
        </Location>
            <MaterialIcons name='supervisor-account' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {access}
        </Location>
            <MaterialIcons name='access-time' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {days}
        </Location>
      </FooterCard>
    </Container>
  );
}
