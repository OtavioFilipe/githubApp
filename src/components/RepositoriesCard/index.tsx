import React from "react";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import CardButton from "../CardButton";

import {
  Container,
  Text,
  Description,
  Icon,
  FooterCard,
  TopCard,
  UserInformation,
  Star,
  Field,
  EditIcon,
} from "./styles";

export interface RepositoriesCardProps {
  id: string;
  avatar_url: string;
  name: string;
  description?: string;
  language: string;
  stargazerCount: number;
  access: number;
  
  updatedAt: any;
}

export default function RepositoriesCard({
  name,
  description,
  stargazerCount,
  language,
  access = 0,
  avatar_url,
  updatedAt,
}: RepositoriesCardProps) {
  return (
    <Container>
      <TopCard>
        <UserInformation>
          <View style={{ flexDirection: "row" }}>
            <Text>{name}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} />
            <Star>
              <MaterialIcons name="star" size={20} color="gold" />
            </Star>
          </View>
          <Description>{description}</Description>
        </UserInformation>
      </TopCard>
      <Field>
        <CardButton title="#JavaScript" />
        <CardButton title="#Front End" />
        <EditIcon>
          <MaterialIcons name="edit" size={12} color="white" />
        </EditIcon>
      </Field>
      <FooterCard>
        <MaterialIcons
          name="language"
          size={16}
          style={{ marginRight: 4 }}
          color="#7E7E7E"
        />
        <Icon>{language}</Icon>
        <MaterialIcons
          name="star"
          size={16}
          style={{ marginRight: 4 }}
          color="#7E7E7E"
        />
        <Icon>{stargazerCount}</Icon>
        <MaterialIcons
          name="supervisor-account"
          size={16}
          style={{ marginRight: 4 }}
          color="#7E7E7E"
        />
        <Icon>{access}</Icon>
        <MaterialIcons
          name="access-time"
          size={16}
          style={{ marginRight: 4 }}
          color="#7E7E7E"
        />
        
        <Icon>{updatedAt}</Icon>
      </FooterCard>
    </Container>
  );
}
