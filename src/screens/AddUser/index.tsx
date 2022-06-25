import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  Field,
  Footer,
  Image,
  SubText,
  Text,
  UnderlineText,
} from "./styles";

import image from "../../assets/icons/github.png";

import Button from "../../components/Button";
import Input from "../../components/Input";

export default function AddUser({ route, navigation }) {
  const user = route.params;
  const [userName, setUserName] = useState("");

  async function handleAddNewUser() {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/" + userName
      );
      const userStoraged: any = await AsyncStorage.getItem("@storageKey");
      const userParsed = JSON.parse(userStoraged);
      userParsed.push(data);
      await AsyncStorage.setItem("@storageKey", JSON.stringify(userParsed));
      navigation.navigate("User");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      {user ? (
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          <MaterialIcons
            name="arrow-back"
            size={32}
            style={{ marginRight: 260 }}
          />
        </TouchableOpacity>
      ) : null}

      <Image source={image} />
      <Text>Buscar usuário</Text>
      <SubText>Adicione seus novos usuários do GitHub</SubText>
      <Input
        onChangeText={(event) => setUserName(event)}
        placeholder="@username"
      />
      <Button onPress={() => handleAddNewUser()} title="Adicionar" />
      <Field>
        <Footer>
          Termos de <UnderlineText>política</UnderlineText> e{" "}
          <UnderlineText>privacidade</UnderlineText>
        </Footer>
      </Field>
    </Container>
  );
}
