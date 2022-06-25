import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Container,
  Footer,
  Image,
  SubText,
  Text,
  UnderlineText,
} from "./styles";

import image from "../../assets/icons/github.png";

import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login({ navigation }: any) {
  const [userName, setUserName] = useState("");

  async function storeData(value) {
    console.log(value, "value");

    try {
      const jsonValue = JSON.stringify([value]);
      const data = await AsyncStorage.setItem("@storageKey", jsonValue);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  function handleGetUser() {
    fetch("https://api.github.com/users/" + userName)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        storeData(json);
        navigation.navigate("User", {
          data: JSON.stringify(json),
        });
      });
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem("@storageKey");
      if (data) {
        navigation.navigate("User");
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <Image source={image} />
      <Text>Buscar usuário</Text>
      <SubText>Crie sua conta através do seu usuário do GitHub</SubText>
      <Input
        onChangeText={(event) => setUserName(event)}
        placeholder="@username"
      />
      <Button onPress={() => handleGetUser()} title="Cadastrar" />
      <Footer>
        Termos de <UnderlineText>política</UnderlineText> e{" "}
        <UnderlineText>privacidade</UnderlineText>
      </Footer>
    </Container>
  );
}
