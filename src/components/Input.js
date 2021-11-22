import React from "react";
import styled from "styled-components/native";

const Input = ({ ...props }) => {
  return (
    <InputContainer>
      <TextInput {...props}></TextInput>
    </InputContainer>
  );
};

const InputContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin: 16px 0;
`;

const TextInput = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  font-family: "Avenir";
  color: #dbdbdb;
`;

export default Input;
