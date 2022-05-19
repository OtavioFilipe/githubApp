import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Container, Header, Image } from "./styles";

import { SearchBox } from "../../components/SearchBox";
import { RepositoriesCard } from "../../components/RepositoriesCard";

export default function Repositories({ navigation }) {
  return (
    <Container>
      <Header>
        <MaterialIcons
          name="arrow-back"
          size={32}
          style={{ marginRight: 260 }}
          onPress={() => navigation.navigate("User")}
        />
        <Image source={require("../../assets/icons/userAvatar.png")} />
      </Header>
      <SearchBox placeholder="Buscar um repositório..." />
      <RepositoriesCard
        id="1"
        projectName="project-name-java"
        description="Project application with component app with React Native."
        language="ReactNative"
        stars={2}
        access={5}
        days="5 dias atras"
      />
    </Container>
  );
}
