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
  login: string;
  location: string;
  company: string;
  // stars: number;
  // avatar_url: string;
  onPress?: () => void;
}

export function UsersCard({ name, login, location, company, onPress}: GitUserCard) {
  return (
    <Container onPress={onPress}>
      <TopCard>
        {/* <Image source={{uri: avatar_url}}/> */}
        <UserInformation >
            <View style={{flexDirection: 'row'}}>
            <GitName>
                {name}
            </GitName>
            <MaterialIcons name='keyboard-arrow-right' size={24} />
            </View>
            <SubGitName>
                {login}
            </SubGitName>
        </UserInformation>
        <Trash>
            <MaterialIcons name='delete' size={20} color='black' />
        </Trash>
      </TopCard>
      <FooterCard>
            <MaterialIcons name='business' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {company}
        </Location>
            <MaterialIcons name='place' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {location}
        </Location>
            <MaterialIcons name='star' size={16} style={{marginRight: 4}} color='#7E7E7E'/>
        <Location>
            {/* {stars} */}
            2
        </Location>
      </FooterCard>
    </Container>
  );
}
