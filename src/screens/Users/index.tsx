import React from "react";

import { CustomFlatlist } from "../../components/CustomFlatlist";
import { UserButton } from "../../components/UserButton";
import { GitUserCard, UsersCard } from "../../components/UsersCard";

import { Container, Header, Image } from "./styles";

export default function Users({ navigation }) {
  const data: GitUserCard[] = [
    {
      id: "1",
      name: "John Doe Santos",
      user: "@johndoesantos",
      company: "GO.K Digital",
      city: "São Paulo, Brazil",
      stars: 2
    },
    {
      id: "2",
      name: "John Doe Santos",
      user: "@johndoesantos",
      company: "GO.K Digital",
      city: "São Paulo, Brazil",
      stars: 2
    },
    {
      id: "3",
      name: "John Doe Santos",
      user: "@johndoesantos",
      company: "GO.K Digital",
      city: "São Paulo, Brazil",
      stars: 2
    },
    {
      id: "4",
      name: "John Doe Santos",
      user: "@johndoesantos",
      company: "GO.K Digital",
      city: "São Paulo, Brazil",
      stars: 2
    },
    {
      id: "5",
      name: "John Doe Santos",
      user: "@johndoesantos",
      company: "GO.K Digital",
      city: "São Paulo, Brazil",
      stars: 2
    },
  ];

  return (
    <Container>
      <Header>
        <Image source={require("../../assets/icons/github.png")} />
        <UserButton 
        title="Adicionar novo"
        onPress={() => navigation.navigate('AddUser',{user: data || []})}
        />
      </Header>
      <CustomFlatlist
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <UsersCard
            id={item.id}
            name={item.name}
            user={item.user}
            company={item.company}
            city={item.city}
            stars={item.stars}
          />
        )}
      />
    </Container>
  );
};
