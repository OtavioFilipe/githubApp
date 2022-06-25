import React, { useEffect, useState } from "react";

import CustomFlatlist from "../../components/CustomFlatlist";
import UserButton from "../../components/UserButton";
import { UsersCard } from "../../components/UsersCard";

import { Container, Header, Image } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import image from "../../assets/icons/github.png";

export default function Users({ route, navigation }: any) {
  const [users, setUsers] = useState([]);

  async function handleGetUser() {
    const data: any = await AsyncStorage.getItem("@storageKey");
    const parsedUsers = JSON.parse(data);

    setUsers(parsedUsers);
    console.log(users, "usuarios");
  }

  async function handleRemove() {
    AsyncStorage.clear();
  }

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={image} />
        <UserButton
          title="Adicionar novo"
          onPress={() => navigation.navigate("AddUser")}
        />
      </Header>
      <CustomFlatlist
        keyExtractor={(item) => item.id}
        data={users}
        renderItem={({ item }) => (
          <UsersCard
            onPress={() =>
              navigation.navigate("Repositories", { login: item.login })
            }
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
}
