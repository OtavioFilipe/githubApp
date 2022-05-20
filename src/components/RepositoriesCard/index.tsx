import React from "react";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { CardButton } from "../CardButton";

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
  EditIcon
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

export function RepositoriesCard({
  projectName,
  description,
  stars,
  days,
  language,
  access,
}: GitUserCard) {
  return (
    <Container>
      <TopCard>
        <UserInformation>
          <View style={{ flexDirection: "row" }}>
            <Text>{projectName}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} />
            <Star>
              <MaterialIcons name="star" size={20} color="gold" />
            </Star>
          </View>
          <Description>{description}</Description>
        </UserInformation>
      </TopCard>
      <Field>
      <CardButton
          title="#JavaScript"
        />
        <CardButton
          title="#Front End"
        />
        <EditIcon>
          <MaterialIcons name="edit" size={12} color="FFFFFF"/>
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
        <Icon>{stars}</Icon>
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
        <Icon>{days}</Icon>
      </FooterCard>
    </Container>
  );
}
