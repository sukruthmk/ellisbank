import React from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

import Text from "../components/Text";

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <ProfilePhoto source={require("../../assets/profilePhoto.png")} />
        <Welcome>
          <Text heavy medium>Welcome,</Text>
          <Text>Sukruth</Text>
        </Welcome>
        <FontAwesome5 name="cog" size={24} color="#565656" />
      </Header>

      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Welcome = styled.View`
    flex: 1;
    padding: 0 16px;
`;

const StatusBar = styled.StatusBar``;

export default HomeScreen;
