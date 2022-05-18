import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  GitName,
  SubGitName,
  Location,
  Image,
  FooterCard,
  TopCard,
  UserInformation,
  Trash
} from "./styles";
import { View } from "react-native";

export interface GitUserCard {
  id: string;
  name: string;
  user: string;
  city: string;
  company: string;
  stars: number;
  onPress?: () => void;
}

export function UsersCard({ name, user, city, company, stars, onPress }: GitUserCard) {
  return (
    <Container onPress={onPress}>
      <TopCard>
        <Image source={require('../../assets/icons/userAvatar.png')}/>
        <UserInformation >
            <View style={{flexDirection: 'row'}}>
            <GitName>
                {name}
            </GitName>
            <MaterialIcons name='keyboard-arrow-right' size={24} />
            </View>
            <SubGitName>
                {user}
            </SubGitName>
        </UserInformation>
        <Trash>
            <MaterialIcons name='delete' size={16} color='black' />
        </Trash>
      </TopCard>
      <FooterCard>
            <MaterialIcons name='business' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {company}
        </Location>
            <MaterialIcons name='place' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {city}
        </Location>
            <MaterialIcons name='star' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {stars}
        </Location>
      </FooterCard>
    </Container>
  );
}
