import React, { useEffect, useState } from "react";

import CustomFlatlist from "../../components/CustomFlatlist";
import UserButton from "../../components/UserButton";
import { GitUserCard, UsersCard } from "../../components/UsersCard";

import { Container, Header, Image } from "./styles";

import image from "../../assets/icons/github.png"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Users({ route, navigation }: any) {
  const [users, setUsers] = useState([]);

  async function handleGetUser() {
    const data:any = await AsyncStorage.getItem('@user')
    const parsedUsers = JSON.parse(data)

    setUsers(prevdata => [...prevdata, parsedUsers])
  }

  useEffect(() => {
    handleGetUser();
  },[])
  
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
        data={users}
        renderItem={({ item }) => (
          <UsersCard
          onPress={() => navigation.navigate('Repositories', {login: item.login})}
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
