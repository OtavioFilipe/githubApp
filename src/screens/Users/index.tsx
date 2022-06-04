import React from "react";

import CustomFlatlist from "../../components/CustomFlatlist";
import UserButton from "../../components/UserButton";
import { GitUserCard, UsersCard } from "../../components/UsersCard";

import { Container, Header, Image } from "./styles";

import image from "../../assets/icons/github.png"
import { Text } from "react-native";

export default function Users({ route, navigation }: any) {
  
  const {data} = route.params;

  const parseJson = JSON.parse(data);

  console.log(data);
  
  return (
    <Container>
      <Header>
        <Image source={image} />
        <UserButton 
        title="Adicionar novo"
        onPress={() => navigation.navigate('AddUser',{user: data || []})}
        />
      </Header>
      <CustomFlatlist
        keyExtractor={(item) => item.id}
        data={[parseJson]}
        renderItem={({ item }) => (
          <UsersCard
          onPress={() => navigation.navigate('Repositories')}
            id={item.id}
            name={item.name}
            login={item.login}
            company={item.company}
            location={item.location}
            starredRepositories={item.starredRepositories}
            avatar_url={item.avatar_url}
          />
        )}
      />
    </Container>
  );
};
