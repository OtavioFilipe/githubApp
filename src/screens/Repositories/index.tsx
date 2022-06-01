import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Container, Header, Image } from "./styles";

import SearchBox from "../../components/SearchBox";
import RepositoriesCard from "../../components/RepositoriesCard";
import CustomFlatlist from "../../components/CustomFlatlist";

export default function Repositories({ navigation } : any) {
  const data: RepositoriesCard[] = [
    {
      id: "1",
      projectName: "project-name-java",
      description: "Project application with component app with React Native.",
      language: "ReactNative",
      stars: 2,
      access: 5,
      days: "2 dias atras",
    },
    {
      id: "2",
      projectName: "project-name-java",
      description: "Project application with component app with React Native.",
      language: "ReactNative",
      stars: 2,
      access: 5,
      days: "2 dias atras",
    },
    {
      id: "3",
      projectName: "project-name-java",
      description: "Project application with component app with React Native.",
      language: "ReactNative",
      stars: 2,
      access: 5,
      days: "2 dias atras",
    },
    {
      id: "4",
      projectName: "project-name-java",
      description: "Project application with component app with React Native.",
      language: "ReactNative",
      stars: 2,
      access: 5,
      days: "2 dias atras",
    }
  ]

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
      <CustomFlatlist
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <RepositoriesCard
            id={item.id}
            projectName={item.projectName}
            description={item.description}
            language={item.language}
            stars={item.stars}
            access={item.access}
            days={item.days}
          />
        )}
      />
    </Container>
  );
}
