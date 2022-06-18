import React, { useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Container, Header, Image } from "./styles";

import SearchBox from "../../components/SearchBox";
import RepositoriesCard from "../../components/RepositoriesCard";
import CustomFlatlist from "../../components/CustomFlatlist";

import avatarImage from "../../assets/icons/userAvatar.png";

export default function Repositories({ route, navigation } : any) {
  const [repos, setRepos] = useState([]);

  const {login} = route.params;
  
  function handleGetRepo() {
    fetch('https://api.github.com/users/' + login + '/repos')
    .then((response) => response.json())
    .then((json) => {
      setRepos(json);
    });
}

  useEffect(() => {
    handleGetRepo();
  }, []);

  return (
    <Container>
      <Header>
        <MaterialIcons
          name="arrow-back"
          size={32}
          style={{ marginRight: 260 }}
          onPress={() => navigation.navigate("User")}
        />
        <Image source={avatarImage} />
      </Header>
      <SearchBox placeholder="Buscar um repositório..." />
      <CustomFlatlist
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={repos}
        renderItem={({ item }) => (
          <RepositoriesCard
            id={item.id}
            name={item.name}
            description={item.description}
            language={item.language}
            stargazerCount={item.stargazerCount}
            access={item.access}
            updatedAt={item.updatedAt}
          />
        )}
      />
    </Container>
  );
}
