import React from "react";
import styled from "styled-components/native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

import Text from "../components/Text";

export default function TouchScreen() {
  return (
    <Container>
      <Text>Touch Screen</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;
